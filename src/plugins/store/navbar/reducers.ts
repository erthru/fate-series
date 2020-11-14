import { Action, State, TYPES } from "./types";

const initialState: State = {
    isNavbarDropShown: false,
};

const reducers = (state = initialState, { type }: Action): State => {
    switch (type) {
        case TYPES.TOGGLE_NAVBAR_DROP:
            return { ...state, isNavbarDropShown: !state.isNavbarDropShown };

        default:
            return state;
    }
};

export default reducers;
