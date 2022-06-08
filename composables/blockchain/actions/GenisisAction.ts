import BaseAction, { BaseActionType, BaseActionData } from "./BaseAction";

export interface GenisisActionDataV1 extends BaseActionData {
    /**
     * An array of public keys containing the users that play
     */
    users: object,
    startingAmount: number,
    firstRoundNoBuy: boolean,
}

export default class GenisisAction extends BaseAction<GenisisActionDataV1> {
    constructor(users: object, startingAmount = 1500, firstRoundNoBuy = false) {
        super(BaseActionType.genisis, {
            users,
            startingAmount,
            firstRoundNoBuy
        })
    }
}