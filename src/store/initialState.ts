import { IStore } from '~/models/InterfaceStore';

export const initialState: IStore = {
    todos: {
        ids: [],
        byId: {},
    },
};