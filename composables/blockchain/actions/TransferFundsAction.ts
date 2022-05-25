import BaseAction, { BaseActionType, BaseActionData } from "./BaseAction";

export interface TransferFundsActionData extends BaseActionData {
    from: string,
    to: string,
    amount: number
}

export default class TransferFundsAction extends BaseAction<TransferFundsActionData> {
    /**
     * @param from The sender's public key
     * @param to The receiver's public key
     * @param amount The amount of money to transfer
     */
    constructor(from: string, to: string, amount: number) {
        super(BaseActionType.transferFunds, {
            from,
            to,
            amount
        });
    }
}