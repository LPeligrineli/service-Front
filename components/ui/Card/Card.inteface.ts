import { ReactNode } from "react";

export interface ICard {
    children: ReactNode,
    onClick?: () => void,
}