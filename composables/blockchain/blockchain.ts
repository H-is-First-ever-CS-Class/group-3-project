import BaseAction from "./actions/BaseAction";
import GenisisAction from "./actions/GenisisAction";
import Block from "./block";
import { user } from "../gun/index";
import SEA from "gun/sea";

export default class BlockChain {
    public static instance = new BlockChain(); 

    public currentSession: [string | undefined, string | undefined] = [undefined, undefined];
    public latestHash: string | undefined = undefined;

    async joinSession(userPub: string, genisisHash: string/* , latestHash: string */) {
        return gun.get("#sessions").get("player" + userPub).get("chain" + genisisHash)/* .get("blocks#" + latestHash) */.load(async data => {
            if (data === undefined) console.error("Data for joinSession not found");
            else console.log("Data for joinSession found");

            this.currentSession = [userPub, genisisHash];
        })
    }

    async createSession() {
        if (user.is === undefined) throw new UserNotLoggedInError();

        const genisisBlock = new Block(null, new GenisisAction(getIndexedObjectFromArray([user.is.pub]), 1500, true));
        this.currentSession = [user.is.pub, await genisisBlock.hash];

        return gun.get("#sessions").get("player" + this.currentSession[0]).get("chain" + await genisisBlock.hash).get("blocks#" + await genisisBlock.hash).put(genisisBlock.plainObjectString)
            .once(async () => {
                if (user.is === undefined) throw new UserNotLoggedInError();
                this.currentSession = [user.is.pub, await genisisBlock.hash];
                this.latestHash = await genisisBlock.hash
            });
    }

    static async sortChain(rawChain: string[]) {

    }

    async addAction(action: BaseAction) {
        if (user.is === undefined) throw new UserNotLoggedInError();
        if (this.currentSession[1] === undefined) throw new Error("")
        const block = new Block(this.currentSession[1], action);

        return gun.get("#sessions").get("player" + this.currentSession[0]).get("chain" + this.currentSession[1]).get("blocks#" + await block.hash).put(block.plainObjectString).once(async () => this.latestHash = await block.hash);
    }
}

if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    window.BlockChain = BlockChain;
}

const useBlockChainIsInChain = () => BlockChain.instance.currentSession[0] !== undefined && BlockChain.instance.currentSession[1] !== undefined && BlockChain.instance.latestHash !== undefined;

export { useBlockChainIsInChain };