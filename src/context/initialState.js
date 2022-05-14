import { fatchUser } from "../utils/fatchLocalStorageData";

const userInfo = fatchUser();

export const initialState = {
    user : userInfo,
};