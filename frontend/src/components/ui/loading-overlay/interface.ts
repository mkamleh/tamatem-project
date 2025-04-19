import { ReactNode } from "react";

export interface IFetchData {
  isLoading?: boolean;
  itemNotFound?: boolean;
  children?: ReactNode;
  itemType?: "product" | "order";
}
