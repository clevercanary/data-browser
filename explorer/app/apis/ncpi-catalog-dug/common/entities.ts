/**
 * Response from Dug API call
 */

export interface DugVariableResponse {
  results: DugVariableResponse[];
  status: string;
}

export interface DugVariableResponseElement {
  "dbGap Id": string;
}
