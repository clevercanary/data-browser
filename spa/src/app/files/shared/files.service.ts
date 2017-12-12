import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FilesDAO } from "./files.dao";
import { FileSummary } from "../file-summary/file-summary";
import { Dictionary } from "../../shared/dictionary";
import { FileManifestSummary } from "../file-manifest-summary/file-manifest-summary";
import { FileFacet } from "./file-facet.model";
import { FileFacetMetadata } from "../file-facet-metadata/file-facet-metadata.model";
import { PaginationModel } from "../table/pagination.model";
import { TableModel } from "../table/table.model";

@Injectable()
export class FilesService {

    constructor(private fileDAO: FilesDAO) {}

    /**
     * Download File Manifest
     *
     * @param selectedFacets
     * @returns {any}
     */
    public downloadFileManifest(selectedFacets: FileFacet[]): Observable<any> {

        return this.fileDAO.downloadFileManifest(selectedFacets);
    }

    /**
     * Fetch File Facets
     *
     * @param selectedFacetsByName
     * @returns {Observable<FileFacet[]>}
     */
    public fetchOrderedFileFacets(selectedFacetsByName: Map<string, FileFacet>): Observable<FileFacet[]> {

        return this.fileDAO.fetchOrderedFileFacets(selectedFacetsByName);
    }

    public fetchFileTableData(selectedFacetsByName: Map<string, FileFacet>, pagination: PaginationModel): Observable<TableModel> {

        return this.fileDAO.fetchFileTableData(selectedFacetsByName, pagination);
    }


    /**
     * Fetch File Facet Metadata
     *
     * @returns {Observable<FileFacetMetadata[]>}
     */
    public fetchFileFacetMetadata(): Observable<FileFacetMetadata[]> {

        return this.fileDAO.fetchFileFacetMetadata();
    }


    /**
     * Fetch File Summary Observable
     *
     * @param selectedFacets
     * @returns {Observable<Action>}
     */
    public fetchFileSummary(selectedFacets: FileFacet[]): Observable<FileSummary> {
        return this.fileDAO
            .fetchFileSummary(selectedFacets);
    }

    /**
     * Fetch File Manifest Summary Observable
     *
     * @param selectedFacets
     * @returns {Observable<Action>}
     */
    public fetchFileManifestSummary(selectedFacets: FileFacet[]): Observable<Dictionary<FileManifestSummary>> {

        return this.fileDAO
            .fetchFileManifestSummary(selectedFacets);
    }

}
