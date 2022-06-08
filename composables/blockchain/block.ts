import SEA from "gun/sea";
import BaseAction, { BaseActionData, BaseActionType } from "./actions/BaseAction";

// const textEncoder = new TextEncoder();

// https://stackoverflow.com/a/40031979
// const arbuf2hex = (buffer: ArrayBuffer) => {
//     return [...new Uint8Array(buffer)]
//         .map(x => x.toString(16).padStart(2, '0'))
//         .join('');
// }

export class HashingError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

export default class Block {
    constructor(
        public prevHash: string | null,
        public action: BaseAction,
        public ts = Date.now(),
    ) {}

    get plainObject() {
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

    static async stringToBlock(serializedObject: string) {
        const parsed: {prevHash: string | null, action: BaseActionData, ts: number, type: BaseActionType} = JSON.parse(serializedObject);

        const names = parsed.type.toLowerCase().split("_");
        // name[0].toUpperCase();
        const formattedName = names.map((name) => {
            const splitName = name.split("");
            splitName[0] = splitName[0].toUpperCase();
            return splitName;
        }).join("");

        const action: BaseAction = (await import(`./actions/${formattedName}Action`)).default;
        return new Block(parsed.prevHash, action, parsed.ts);
    }
}