import { host } from "./constants"

export const GET_CATEGORIES = (uid: string | undefined) => `${host}/${uid}/expenseCategories/uid`
export const GET_EXPENSES = (uid: string | undefined) => `${host}/${uid}/expenses/uid`
export const GET_EXPENSES_BY_CATEGORY_ID = (uid: string | undefined, categoryId: number | string | undefined) => `${host}/${uid}/expenses/category/${categoryId}`