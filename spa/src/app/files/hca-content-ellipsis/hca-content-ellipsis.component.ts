/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Styles for hca content ellipsis component.
 */

// Core dependencies
import { Component, ElementRef, Input, ViewChild } from "@angular/core";

// App dependencies
import { HCATooltipComponent } from "../hca-tooltip/hca-tooltip.component";
import { HCAEllipsisTextComponent } from "./hca-ellipsis-text.component";

@Component({
    selector: "hca-content-ellipsis",
    templateUrl: "./hca-content-ellipsis.component.html",
    styleUrls: ["./hca-content-ellipsis.component.scss"]
})

export class HCAContentEllipsisComponent {

    // View child/ren
    @ViewChild(HCAEllipsisTextComponent, {read: ElementRef}) textElementRef: ElementRef;
    @ViewChild(HCATooltipComponent, {read: ElementRef}) tooltipElementRef: ElementRef;

    /**
     * Returns the text content of the element of interest.
     *
     * @returns {string}
     */
    public getTooltipContent(): string {

        // Return empty string if there is no text child
        if ( !this.textElementRef ) {
            return "";
        }

        // Grab the content of the text child
        return this.textElementRef.nativeElement.textContent;
    }

    /**
     * Returns true (disable tooltip) if the width of the element of interest is less than its parent container.
     * If false, an ellipsis has been applied to the text and on hover, a tooltip will reveal the element's content.
     *
     * @returns {boolean}
     */
    public isTooltipDisabled(): boolean {

        // Return false if we didn't find a tooltip child or a text child
        if ( !this.tooltipElementRef || !this.textElementRef ) {
            return false;
        }

        // Grab the width of the text to be displayed
        const contentWidth = this.textElementRef.nativeElement.getBoundingClientRect().width;

        // We can use the tooltip to determine the width available
        const containerWidth = this.tooltipElementRef.nativeElement.getBoundingClientRect().width;

        // The tooltip is only enabled if the width of the ellipsis content is wider than the container width
        return contentWidth <= containerWidth;
    }
}
