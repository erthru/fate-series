export enum TYPES {
    TOGGLE_NAVBAR_DROP = "TOGGLE_NAVBAR_DROP",
}

export type State = {
    isNavbarDropShown: boolean;
};

export type Action = {
    type: TYPES;
};
