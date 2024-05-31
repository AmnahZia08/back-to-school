import { ReactNode } from "react";

export type Item = {
  moved: boolean;
  hidden: boolean;
  component: ReactNode;
};

export enum ItemName {
  PENCIL = "pencil",
  NOTEBOOK = "notebook",
  BOOK = "book",
  BOTTLE = "bottle",
  SANDWICH = "sandwich",
  SPORT = "sport",
}
