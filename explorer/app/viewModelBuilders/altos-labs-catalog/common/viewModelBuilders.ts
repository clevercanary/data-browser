import { AltosLabsCatalogEntity } from "../../../apis/catalog/altos-labs-catalog/common/entities";
import * as C from "../../../components";
import { METADATA_KEY } from "../../../components/Index/common/entities";
import { getPluralizedMetadataLabel } from "../../../components/Index/common/indexTransformer";
import { ANCHOR_TARGET } from "../../../components/Links/common/entities";

/**
 * Build props for DOI cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the DOI cell.
 */
export const buildDOI = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Link> => {
  return {
    label: altosLabsCatalogEntity.doi,
    target: ANCHOR_TARGET.BLANK,
    url: altosLabsCatalogEntity.doi,
  };
};

/**
 * Build props for shorthand cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the shorthand cell.
 */
export const buildShorthand = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: altosLabsCatalogEntity.shorthand,
  };
};

/**
 * Build props for species cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the species cell.
 */
export const buildSpecies = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.SPECIES),
    values: altosLabsCatalogEntity.species,
  };
};

/**
 * Build props for tissue cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the tissue cell.
 */
export const buildTissue = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.TISSUE),
    values: altosLabsCatalogEntity.tissue,
  };
};

/**
 * Build props for title cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the title cell.
 */
export const buildTitle = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: altosLabsCatalogEntity.title,
  };
};
