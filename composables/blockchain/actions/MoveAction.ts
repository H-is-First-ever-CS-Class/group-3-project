import { BaseActionData, BaseActionType } from "./BaseAction";

export interface MoveActionData extends BaseActionData {
    who: string,
    howMuch: number,
}

export default class MoveAction extends BaseAction<MoveActionData> {
    constructor(who: string, howMuch: number) {
        super(BaseActionType.move, {
            who: who,
            howMuch: howMuch
        })
    }
}