export enum BaseActionType {
    transferFunds = "TRANSFER_FUNDS",
    addFunds = "ADD_FUNDS",
    removeFunds = "REMOVE_FUNDS",
    buy = "PROPERTY_BUY",
    gotoJail = "GOTO_JAIL",
    genisis = "GENISIS",
    move = "MOVE"
}

export type PossibleJSONType = string | number | boolean | null | object;

export interface BaseActionData {
    [key: string]: PossibleJSONType
}

export default class BaseAction<T extends BaseActionData = BaseActionData> {
    private _type: BaseActionType;
    private _data: T;

    /**
     * @param type Enum detailing the type of action it is
     * @param data Data that can be serialized with JSON
     */
    constructor(type: BaseActionType, data: T) {
        this._data = data;
        this._type = type;
    }

    get type(): BaseActionType {
        return this._type;
    }

    get data(): T {
        return this._data;
    }

    toString() {
        return JSON.stringify(this.data);
    }
}