import SEA from "gun/sea";
import BaseAction, { BaseActionData, BaseActionType } from "./actions/BaseAction";
import actionMappings from "./actions/actionMappings";

export class HashingError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

type previousHash = string | null;

type timestamp = number;

interface BlockPlainObject {
    prevHash: previousHash,
    type: BaseActionType,
    data: BaseActionData,
    ts: timestamp
}

export default class Block {
    constructor(
        public prevHash: previousHash,
        public action: BaseAction,
        public ts: timestamp = Date.now(),
    ) {}

    get plainObject(): BlockPlainObject {
        return {
            prevHash: this.prevHash,
            type: this.action.type,
            data: this.action.data,
            ts: this.ts
        };
    }

    get plainObjectString() {
        return JSON.stringify(this.plainObject);
    }

    get hash() {
        const hash = SEA.work(this.plainObjectString, null, null, {name: "SHA-256"});
        if (typeof hash === "undefined") throw new HashingError("Hashing error caused by SEA when producing a SHA-256 hash");

        return hash as Promise<string>;
    }

    // static async stringToBlock(serializedObject: string) {
    //     const parsed: BlockPlainObject = JSON.parse(serializedObject);

    //     const params = Object.values(parsed.data);
    //     const action = new (actionMappings[parsed.type])(...(Object.values(parsed.data)))

    //     // const names = parsed.type.toLowerCase().split("_");
    //     // // name[0].toUpperCase();
    //     // const formattedName = names.map((name) => {
    //     //     const splitName = name.split("");
    //     //     splitName[0] = splitName[0].toUpperCase();
    //     //     return splitName;
    //     // }).join("");

    //     // const action: BaseAction = (await import(`./actions/${formattedName}Action`)).default;
    //     // return new Block(parsed.prevHash, action, parsed.ts);
    // }
}