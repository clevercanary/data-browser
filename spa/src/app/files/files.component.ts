/**
 * UCSC Genomics Institute - CGL
 * https://cgl.genomics.ucsc.edu/
 *
 * Core files component, displays results summary as well as facets.
 */
// Core dependencies
import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
// App dependencies
import { FileFacet } from "./shared/file-facet.model";
import { FileSummary } from "./file-summary/file-summary";
import { FetchFileManifestSummaryRequestAction } from "./_ngrx/file-manifest-summary/file-manifest-summary.actions";
import {
    selectEntities,
    selectFileFacetsFileFacets,
    selectFileSummary,
    selectSelectedEntity,
    selectSelectedFileFacets
} from "./_ngrx/file.selectors";
import { AppState } from "../_ngrx/app.state";
import { FetchFileFacetsRequestAction } from "./_ngrx/file-facet-list/file-facet-list.actions";
import { FileFacetSelectedEvent } from "./file-facets/file-facet.events";
import { EntitySelectAction } from "app/files/_ngrx/table/table.actions";
import { Subscription } from "rxjs/Subscription";
import EntitySpec from "./shared/entity-spec";
import QueryStringFacet from "./shared/QueryStringFacet";


@Component({
    selector: "bw-files",
    templateUrl: "files.component.html",
    styleUrls: ["files.component.scss"]
})
export class FilesComponent implements OnInit, OnDestroy {

    // Public variables
    public fileFacets$: Observable<FileFacet[]>;
    public projectDetail;
    public selectFileSummary$: Observable<FileSummary>;
    public selectedFileFacets$: Observable<FileFacet[]>;
    public entities$: Observable<EntitySpec[]>;
    public selectedEntity$: Observable<EntitySpec>;
    public noScroll: boolean;
    private actionsSubscription: Subscription;
    private facetsSubscription: Subscription;


    /**
     * Parse queryParams into file filters
     */
    private selectedFacetsSubscription: Subscription;

    /**
     * @param route {ActivatedRoute}
     * @param store {Store<AppState>}
     */
    constructor(private elementRef: ElementRef,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private store: Store<AppState>) {

        this.projectDetail = false;

        // this.actionsSubscription = activatedRoute.params
        //     .pipe(map((params) => {
        //
        //         let tab = activatedRoute.snapshot.url[0].path
        //         return new EntitySelectAction(tab);
        //
        //     }))
        //     .subscribe(store);
    }


    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
        this.facetsSubscription.unsubscribe();
    }

    /**
     * Public API
     */

    public getProjectDetailTabs() {
        return ["Projects"];
    }

    /**
     * Sets up element by id
     */
    public getComponentElementById() {

        // Set up component HTML reference
        this.hcaStickyOverlay = document.getElementById("hcaStickyOverlay");
        this.hcaExplore = document.getElementById("hcaExplore");
        this.hcaFilterWrapper = document.getElementById("hcaFilterWrapper");
        this.hcaTab = document.getElementById("hcaTab");
        this.hcaFileSummary = document.getElementById("hcaFileSummary");
    }

    /**
     * Remove scroll on body when menu is open
     *
     * @param value
     */
    public isMenuOpen(value) {

        this.noScroll = value;
        this.preventScroll();
    }

    /**
     * Prevent scroll on body when menu is open
     */
    public preventScroll() {

        let nativeElement = this.elementRef.nativeElement;
        let openedMenu = nativeElement.classList.contains("noScroll");
        if ( this.noScroll && !openedMenu ) {
            nativeElement.classList.add("noScroll");
        }
        else if ( !this.noScroll && openedMenu ) {
            nativeElement.classList.remove("noScroll");
        }
    }

    public onTabSelected(tab) {

        // this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
        this.router.navigate(["/" + tab.key]);
        this.store.dispatch(new EntitySelectAction(tab.key));
    }


    /**
     * Life cycle hooks
     */

    /**
     * Dispatch action to request updated manifest summary (ie summary counts, file sizes etc)
     */
    public requestManifestSummary() {

        this.store.dispatch(new FetchFileManifestSummaryRequestAction());
    }

    /**
     * Life cycle hooks
     */

    /**
     * Set up selectors and request initial data set.
     */
    public ngOnInit() {

        // File Summary
        this.selectFileSummary$ = this.store.select(selectFileSummary);

        // File Facets
        this.fileFacets$ = this.store.select(selectFileFacetsFileFacets);

        this.selectedFileFacets$ = this.store.select(selectSelectedFileFacets);

        this.entities$ = this.store.select(selectEntities);
        this.selectedEntity$ = this.store.select(selectSelectedEntity);

        // Initialize the filter state from the params in the route.
      //  this.initQueryParams();

        // Sets up element by id
        this.getComponentElementById();

        // Return component heights for sticky header
        if (!this.projectDetail) {
            this.getComponentHeight();
        }

        // Setup to write the browser address bar when the selected facets change.
        this.selectedFacetsSubscription = this.selectedFileFacets$.do((selectedFacets) => {

                let tab = this.activatedRoute.snapshot.url[0].path;

                let queryStringFacets: QueryStringFacet[] = selectedFacets.map((facet) => {
                    return {
                        facetName: facet.name,
                        terms: facet.selectedTerms.map((term) => {
                            return term.name;
                        })
                    } as QueryStringFacet;
                });

                // only add the query string if there are selected facdts.
                if (queryStringFacets.length) {
                    this.router.navigate(["/" + tab], { queryParams: { filter: JSON.stringify(queryStringFacets) } });
                }
                else {
                    this.router.navigate(["/" + tab]);
                }

            }
        ).subscribe();
    }
}

