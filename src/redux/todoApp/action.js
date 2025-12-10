import { ADDITEM, DELETEITEM, EDITITEM } from "./actionType"

export const addItem = (info) => {
    return {
        type: ADDITEM,
        payload: info,
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETEITEM,
        payload: id,
    }
}

export const editItem = (updateInfo) => {
    return {
        type: EDITITEM,
        payload: updateInfo,
    }
}