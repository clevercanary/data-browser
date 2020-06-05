/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Action triggered when link to analysis protocol is clicked.
 */

// Core dependencies
import { Action } from "@ngrx/store";

// App dependencies
import { TrackingAction } from "../analytics/tracking.action";
import { GACategory } from "../../../shared/analytics/ga-category.model";
import { GADimension } from "../../../shared/analytics/ga-dimension.model";
import { GAEvent } from "../../../shared/analytics/ga-event.model";
import { GAAction } from "../../../shared/analytics/ga-action.model";
import { GASource } from "../../../shared/analytics/ga-source.model";

export class ViewAnalysisProtocolAction implements Action, TrackingAction {
    public static ACTION_TYPE = "ANALYSIS_PROTOCOL.VIEW";
    public readonly type = ViewAnalysisProtocolAction.ACTION_TYPE;

    /**
     * @param {string} workflow
     * @param {string} url
     * @param {GASource} source
     * @param {string} currentQuery
     */
    constructor(public workflow: string,
                public url: string,
                public source: GASource,
                public currentQuery: string) {}

    /**
     * Return the clear action as a GA event.
     *
     * @returns {GAEvent}
     */
    public asEvent(): GAEvent {

        return {
            category: GACategory.PORTAL_LINK,
            action: GAAction.CLICK,
            label: this.workflow,
            dimensions: {
                [GADimension.CURRENT_QUERY]: this.currentQuery,
                [GADimension.ENTITY_URL]: this.url,
                [GADimension.SOURCE]: this.source
            }
        };
    }
}
