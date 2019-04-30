/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Table component for displaying file-related data.
 */

// Core dependencies
import { DataSource } from "@angular/cdk/collections";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit } from "@angular/core";
import { Sort } from "@angular/material";
import { select, Store } from "@ngrx/store";
import { fromEvent, Observable, merge, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

// App dependencies
import { AppState } from "../../_ngrx/app.state";
import {
    selectPagination,
    selectTableData,
    selectTableLoading,
    selectTermCountsByFacetName
} from "../_ngrx/file.selectors";
import { FetchPagedOrSortedTableDataRequestAction } from "../_ngrx/table/table.actions";
import { PaginationModel } from "../table/pagination.model";
import {
    getPairedEnd, getSelfOrFirst,
    getUnspecifiedIfNullValue,
    rollUpMetadata
} from "../table/table-methods";
import { TableParamsModel } from "../table/table-params.model";

@Component({
    selector: "hca-table-files",
    templateUrl: "./hca-table-files.component.html",
    styleUrls: ["./hca-table-files.component.scss"]
})
export class HCATableFilesComponent implements OnInit, AfterViewInit {

    // Template variables
    data$: Observable<any[]>;
    displayedColumns = [
        "fileName", "fileFormat", "fileSize", "projectTitle", "specimenId", "sampleEntityType", "organ", "organPart", "selectedCellType",
        "libraryConstructionApproach", "genusSpecies", "organismAge", "biologicalSex", "disease", "totalCells"
    ];
    domainCountsByColumnName$: Observable<Map<string, number>>;
    domainCountVisibleForColumns = [
        "biologicalSex",
        "disease",
        "fileFormat",
        "genusSpecies",
        "libraryConstructionApproach",
        "organ",
        "sampleEntityType",
        "selectedCellType"
    ];
    loading$: Observable<boolean>;
    tableElementDataSource: TableElementDataSource;
    pagination$: Observable<PaginationModel>;

    // Locals
    private ngDestroy$ = new Subject();
    private snapped: boolean;

    /**
     * @param {Store<AppState>} store
     * @param {ChangeDetectorRef} cdref
     * @param {ElementRef} elementRef
     * @param {Window} window
     */
    constructor(private store: Store<AppState>,
                private cdref: ChangeDetectorRef,
                private elementRef: ElementRef,
                @Inject("Window") private window: Window) {
    }

    /**
     * Public API
     */

    /**
     * Returns age and ageUnit.
     * @param age
     * @param ageUnit
     * @returns {string}
     */
    public getAge(age: string, ageUnit: string): string {

        let ageUnitTruncated = this.getAgeUnit(ageUnit);

        if ( age && age !== "Unspecified" ) {

            return age + " " + ageUnitTruncated;
        }

        return "Unspecified";
    }

    /**
     * Returns ageUnit, truncated at first character
     * @param ageUnit
     * @returns {string}
     */
    public getAgeUnit(ageUnit: string): string {

        if ( ageUnit ) {
            return ageUnit.charAt(0);
        }
    }

    /**
     * Returns class download and class truncate (if table data is not spaced).
     * @param {string} tableData
     * @returns {{[p: string]: boolean}}
     */
    public getFileDownloadClass(tableData: string): { [className: string]: boolean } {

        if ( tableData.indexOf(" ") == -1 ) {
            return {
                "file-download": true,
                truncate: true
            };
        }

        return {
            "file-download": true
        };
    }

    /**
     * Return the set of CSS class names that are currently applicable to the table header row.
     *
     * @returns {[className: string]: boolean}
     */
    public getHeaderClass(): { [className: string]: boolean } {

        return {
            snapped: this.snapped
        };
    }

    /**
     * Return the set of CSS class names that are currently applicable to the first row in the table.
     *
     * @param {number} rowIndex
     * @returns {[className: string]: boolean}
     */
    public getRowClass(rowIndex: number): { [className: string]: boolean } {

        return {
            snapped: (rowIndex === 0) && this.snapped
        };
    }

    /**
     * Returns false (tooltip not to be disabled) if the width of the parent container is smaller than the element of interest.
     * If false, an ellipsis has been applied to the text and a tooltip will show the element's content.
     * @param el
     * @returns {boolean}
     */
    public isTooltipDisabled(el) {

        return !( el.parentElement.getBoundingClientRect().width < el.getBoundingClientRect().width );
    }

    /**
     * Sort the table given the sort param and the order.
     *
     * @param {PaginationModel} pm
     * @param {Sort} sort
     */
    public sortTable(pm: PaginationModel, sort: Sort) {

        let tableParamsModel: TableParamsModel = {
            size: pm.size,
            sort: sort.active,
            order: sort.direction
        };

        this.store.dispatch(new FetchPagedOrSortedTableDataRequestAction(tableParamsModel));
    }

    /**
     * Lifecycle hooks
     */

    ngAfterContentChecked() {

        this.cdref.detectChanges();
    }

    /**
     * Update snapped status of table, on scroll of component.
     */
    public ngAfterViewInit() {

        const nativeElement = this.elementRef.nativeElement;
        const scrolls$ = fromEvent(this.window, "scroll");
        const wheels$ = fromEvent(this.window, "wheel");

        merge(scrolls$, wheels$).pipe(
            takeUntil(this.ngDestroy$)
        )
            .subscribe(() => {

                if ( this.window.pageYOffset >= nativeElement.offsetTop && !this.snapped ) {

                    this.snapped = true;
                }
                else if ( this.window.pageYOffset < nativeElement.offsetTop && this.snapped ) {

                    this.snapped = false;
                }
            });
    }

    /**
     * Kill subscriptions on destroy of component.
     */
    public ngOnDestroy() {

        this.ngDestroy$.next(true);
        this.ngDestroy$.complete();
    }

    /**
     *  Set up table data source and pagination
     */
    ngOnInit() {

        // Initialize the new data source with an observable of the table data.
        this.tableElementDataSource = new TableElementDataSource(this.store.pipe(select(selectTableData)));

        // Get an observable of the table data.
        this.data$ = this.store.pipe(select(selectTableData));

        // Get an observable of the loading status of table.
        this.loading$ = this.store.pipe(select(selectTableLoading));

        // Get an observable of the pagination model
        this.pagination$ = this.store.pipe(select(selectPagination));

        // Get the term counts for each facet - we'll use this as a basis for displaying a count of the current set of
        // values for each column
        this.domainCountsByColumnName$ = this.store.pipe(select(selectTermCountsByFacetName));
    }
}

/**
 * UCSC Genomics Institute - CGL
 * https://cgl.genomics.ucsc.edu/
 *
 * Elements in Material Design table that displays HCA-specific file related data.
 */
export interface Element {
    ageUnit: string;
    biologicalSex: string;
    disease: string; // TODO check not array
    fileFormat: string;
    fileName: string;
    fileSize: number;
    genusSpecies: string;
    libraryConstructionApproach: string;
    organ: string;
    organismAge: string;
    organPart: string;
    pairedEnd: string;
    projectTitle: string;
    sampleEntityType: string;
    selectedCellType: string;
    specimenId: string;
    totalCells: number;
    url: string;
}

/**
 * UCSC Genomics Institute - CGL
 * https://cgl.genomics.ucsc.edu/
 *
 * Data source backing Material Design table that displays file related data.
 */
class TableElementDataSource extends DataSource<any> {

    element$: Observable<Element[]>;

    constructor(tableData$: Observable<any[]>) {

        super();

        this.element$ = tableData$.pipe(
            map((rows: any[]) => {

                return rows.map((row: any) => {

                    let file = row.files[0] || {};
                    let cellSuspensions = rollUpMetadata(row.cellSuspensions);
                    let protocols = rollUpMetadata(row.protocols);
                    let samples = rollUpMetadata(row.samples);
                    let specimens = rollUpMetadata(row.specimens);
                    let projectTitle = rollUpMetadata(row.projects);

                    return {
                        ageUnit: specimens.organismAgeUnit,
                        biologicalSex: getUnspecifiedIfNullValue(specimens.biologicalSex),
                        disease: getUnspecifiedIfNullValue(specimens.disease),
                        fileFormat: file.format,
                        fileName: file.name,
                        fileSize: getUnspecifiedIfNullValue(file.size),
                        genusSpecies: getUnspecifiedIfNullValue(specimens.genusSpecies),
                        libraryConstructionApproach: getUnspecifiedIfNullValue(protocols.libraryConstructionApproach),
                        organ: getUnspecifiedIfNullValue(specimens.organ),
                        organismAge: getUnspecifiedIfNullValue(specimens.organismAge),
                        organPart: getUnspecifiedIfNullValue(specimens.organPart),
                        pairedEnd: getPairedEnd(protocols.pairedEnd),
                        projectTitle: getUnspecifiedIfNullValue(projectTitle.projectTitle),
                        sampleEntityType: getUnspecifiedIfNullValue(samples.sampleEntityType),
                        selectedCellType: getUnspecifiedIfNullValue(cellSuspensions.selectedCellType),
                        specimenId: getSelfOrFirst(specimens.id),
                        totalCells: getUnspecifiedIfNullValue(cellSuspensions.totalCells),
                        url: file.url
                    };
                });
            })
        );
    }

    connect(): Observable<Element[]> {
        return this.element$;
    }

    disconnect() {
    }
}
