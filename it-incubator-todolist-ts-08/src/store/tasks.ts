export const sum = (a: number, b: number) => a + b
export const sub = (a: number, b: number) => a - b
export const mult = (a: number, b: number) => a * b
export const div = (a: number, b: number) => a / b

const SUM = 'SUM'
const SUB = 'SUB'
const MULT = 'MULT'
const DIV = 'DIV'

export type ActionType = {
    type: "SUM" | "SUB" | "MULT" | "DIV"
    num: number
}

export const numberReducer = (state: number, action: ActionType) => {
    switch (action.type) {
        case "SUM":
            return state + action.num;
        case "SUB":
            return state - action.num;
        case "MULT":
            return state * action.num;
        case "DIV":
            return state / action.num;
        default:
            return state;
    }
}