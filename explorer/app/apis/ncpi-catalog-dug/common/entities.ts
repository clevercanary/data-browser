/**
 * Response from Dug API call
 */

export interface DugVariableResponse {
    "status": string,
    "results": DugVariableResponse[];
}

export interface DugVariableResponseElement {
    "dbGap Id": string
}