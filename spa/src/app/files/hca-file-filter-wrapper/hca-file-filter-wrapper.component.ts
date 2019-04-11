/**
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Wrapper component for filtering of facet terms by name, wraps filter and result.
 */

// Core dependencies
import { Component, EventEmitter, Input, Output } from "@angular/core";

// App dependencies
import { FileFacet } from "../shared/file-facet.model";
import { SearchTerm } from "../search/search-term.model";

@Component({
    selector: "hca-file-filter-wrapper",
    templateUrl: "./hca-file-filter-wrapper.component.html",
    styleUrls: ["./hca-file-filter-wrapper.component.scss"],
})

export class HCAFileFilterWrapperComponent {

    // Inputs
    @Input() fileFacets: FileFacet[];
    @Input() searchTerms: SearchTerm[];

    // Output
    @Output() menuOpen = new EventEmitter<boolean>();

    /**
     * Public API
     */

    /**
     * Event emitted when filtering menus are open - to prevent body scroll.
     */
    public isMenuOpen(value) {
        this.menuOpen.emit(value);
    }
}
