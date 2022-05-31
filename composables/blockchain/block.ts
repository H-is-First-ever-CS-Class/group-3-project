import BaseAction from "./actions/BaseAction";

const textEncoder = new TextEncoder();

// https://stackoverflow.com/a/40031979
const arbuf2hex = (buffer: ArrayBuffer) => {
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
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

    get hash() {
        const str = JSON.stringify(this.plainObject);
        return crypto.subtle.digest("SHA-256", textEncoder.encode(str)).then((buffer) => arbuf2hex(buffer));
    }
}