import { Dispatch } from "react";

export interface ITaskModalProps {
  openModal: boolean;
  modalClose: () => void;
  title: string;
  task: string;
  ball?: string;
  setCompleted?: Dispatch<React.SetStateAction<boolean>>;
  id: string;
}
