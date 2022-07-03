// Core dependencies
import { ChipProps, Popover } from "@mui/material";
import { ElementType, MouseEvent, ReactNode, useState } from "react";

interface Props {
  PopoverContent: ReactNode;
  TagElType: ElementType<ChipProps>;
}

export const NTag = ({
  PopoverContent,
  TagElType: Tag,
}: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);

  /**
   * Sets ntag element as popover anchor element (and therefore opens popover).
   * @param mouseEvent - Mouse event "onMouseEnter".
   */
  const onOpenNTag = (mouseEvent: MouseEvent<HTMLDivElement>): void => {
    setAnchorEl(mouseEvent.currentTarget);
  };

  /**
   * Sets anchorEl to null (and therefore closes popover).
   */
  const onCloseNTag = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tag onMouseEnter={onOpenNTag} onMouseLeave={onCloseNTag} />
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: "center",
          vertical: -14, // 14px from top of target
        }}
        onClose={onCloseNTag}
        open={open}
        PaperProps={{ variant: "ntag" }}
        sx={{ pointerEvents: "none" }}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        transitionDuration={150}
      >
        {PopoverContent}
      </Popover>
    </>
  );
};
