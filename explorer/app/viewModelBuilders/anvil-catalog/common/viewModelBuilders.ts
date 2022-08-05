import {
  getStudyName,
  getConsortia,
  getDisease,
  getDataType,
  getIndication,
  getParticipantCount,
  getStudyDesign,
} from "../../../apis/anvil-catalog/common/transformers";
import * as C from "../../../components";
import { AnvilSourceItem } from "../../../apis/anvil/common/entities";

const createColumn = (
  value: string | number = ""
): React.ComponentProps<typeof C.Text> => ({
  children: value,
  customColor: "ink",
  variant: "text-body-400",
});

/**
 * Build props for study name cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildStudyName = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(getStudyName(source));

/**
 * Build props for consortia cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildConsortia = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(getConsortia(source));

/**
 * Build props for disease cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildDisease = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(getDisease(source));

/**
 * Build props for data type cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildDataType = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(getDataType(source));

/**
 * Build props for indication cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildIndication = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(getIndication(source));

/**
 * Build props for study design cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildStudyDesign = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(getStudyDesign(source));

/**
 * Build props for participant count cell component from the given study in the Anvil catalog.
 * @param source - Study row in the Anvil catalog TSV.
 * @returns Model to be used as props for the platform cell.
 */
export const buildParticipantCount = (
  source: AnvilSourceItem
): React.ComponentProps<typeof C.Text> =>
  createColumn(getParticipantCount(source));
