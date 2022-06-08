import BaseAction from "./actions/BaseAction";
import GenisisAction from "./actions/GenisisAction";
import Block from "./block";
import { user } from "../gun/index";
import SEA from "gun/sea";

export default class BlockChain {
    public static instance = new BlockChain(); 

    public currentSession: [string, string] = ["", ""];
    public latestHash: string = "";
    // private chain: Block[];

    constructor() {
        // if (user.is === undefined) throw new UserNotLoggedInError();

        // this.chain = [new Block(null, new GenisisAction([user.is.pub], 1500, true))];
    }

    async joinSession(userPub: string, genisisHash: string, latestHash: string) {
        return gun.get("#sessions").get(userPub + "#" + genisisHash).get("#" + latestHash).once(async data => {
            if (data === undefined) console.error("Data for joinSession not found");
            else console.log("Data for joinSession found");
        })
    }

    async createSession() {
        if (user.is === undefined) throw new UserNotLoggedInError();

        const genisisBlock = new Block(null, new GenisisAction(getIndexedObjectFromArray([user.is.pub]), 1500, true));
        this.currentSession = [user.is.pub, await genisisBlock.hash];
        // console.log(await genisisBlock.hash === await SEA.work(genisisBlock.plainObjectString, null, null, {"name": "SHA-256"}))

        return gun.get("#sessions").get("player" + this.currentSession[0]).get("chain" + await genisisBlock.hash).get("blocks#" + await genisisBlock.hash).put(genisisBlock.plainObjectString)
            .once(async () => this.latestHash = await genisisBlock.hash);
    }

    async addAction(action: BaseAction) {
        if (user.is === undefined) throw new UserNotLoggedInError();
        const block = new Block(this.currentSession[1], action);

        return gun.get("#sessions").get(this.currentSession[0]).get(this.currentSession[1]).get("blocks#" + await block.hash).put(block.plainObjectString).once(async () => this.latestHash = await block.hash);
    }
}

if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    window.BlockChain = BlockChain;
}