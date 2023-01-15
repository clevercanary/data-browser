export const FILE_NAME_TYPE = {
  PERTURBATIONAL: "altos-catalog/files/public-datasets-perturbational.tsv",
  REPROGRAMMING: "altos-catalog/files/public-datasets-reprogramming.tsv",
};

export const FILES_SOURCE_FIELD_KEY = {
  FILE_PATH: "s3path",
  FILE_TYPE: "type",
  SHORTHAND: "shorthand",
};

export const FILES_SOURCE_FIELD_TYPE = {
  FILE_PATH: "string",
  FILE_TYPE: "string",
  SHORTHAND: "string",
};

export const FILES_SOURCE_FIELD_PROPERTY = {
  FILE_PATH: "filePath",
  FILE_TYPE: "fileType",
  SHORTHAND: "shorthand",
};

export const SOURCE_FIELD_KEY = {
  ASSAY: "Readout",
  DOI: "DOI",
  NCBI_TAXONOMY_ID: "Taxonomy ID",
  SHORTHAND: "Shorthand",
  SPECIES: "Species",
  TISSUE: "Tissue",
  TITLE: "Title",
};

export const SOURCE_FIELD_TYPE = {
  ASSAY: "array",
  DOI: "string",
  NCBI_TAXONOMY_ID: "array",
  SHORTHAND: "string",
  SPECIES: "array",
  TISSUE: "array",
  TITLE: "string",
};

export const SOURCE_FIELD_PROPERTY = {
  ASSAY: "assay",
  DOI: "doi",
  NCBI_TAXONOMY_ID: "NCBITaxonomyID",
  SHORTHAND: "shorthand",
  SPECIES: "species",
  TISSUE: "tissue",
  TITLE: "title",
};
