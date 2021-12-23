import { host } from "./constants"

export const GET_CATEGORIES = (uid: string | undefined) => `${host}/${uid}/expenseCategories/uid`