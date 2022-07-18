/**
 * Model of aggregated ("inner") biosample value returned from API endpoints other than /index/biosamples (for example,
 * /index/libraries).
 */
export interface BioSampleAggregatedResponse {
  anatomical_site: (string | null)[];
  biosample_type: (string | null)[];
}

/**
 * Model of aggregated ("inner") dataset value returned from API endpoints other than /index/datasets (for example,
 * /index/libraries).
 */
export interface DatasetAggregatedResponse {
  dataset_id: string[];
  title: string[];
}

/**
 * Model of response returned from the /index/libraries API endpoint.
 */
export interface LibrariesResponse {
  biosamples: BioSampleAggregatedResponse[];
  datasets: DatasetAggregatedResponse[];
  entryId: string;
  libraries: LibraryEntityResponse[]; // Singleton array
}

/**
 * Model of aggregated ("inner") library value returned from API endpoints other than /index/libraries (for example,
 * /index/files).
 */
export interface LibraryAggregatedResponse {
  prep_material_name: string[];
}

/**
 * Model of core library value returned from the /index/libraries API endpoint.
 */
export interface LibraryEntityResponse {
  library_id: string;
  prep_material_name: string;
}