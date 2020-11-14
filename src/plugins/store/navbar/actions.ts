import { Dispatch } from "redux";
import { Action, TYPES } from "./types";

export const toggleNavbarDrop = () => (dispath: Dispatch<Action>) => {
    dispath({ type: TYPES.TOGGLE_NAVBAR_DROP });
};
