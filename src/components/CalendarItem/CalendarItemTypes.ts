import { SxProps, Theme } from "@mui/material";

export type ICalendarItemProps = {
  icon?: string;
  title: string;
  text: string;
  task: string;
  ball?: string;
  colorBg: string;
  sx?: SxProps<Theme>;
  id: string;
};
