import BaseAction from "./actions/BaseAction";
import GenisisAction from "./actions/GenisisAction";
import Block from "./block";

export default class BlockChain {
    public static instance = new BlockChain(); 

    private chain: Block[];

    constructor() {
        if (user.is === undefined) throw new UserNotLoggedInError();

        this.chain = [new Block(null, new GenisisAction([user.is.pub], 1500, true))];
    }

    async addAction(action: BaseAction) {
        const prevHash = await this.chain[this.chain.length - 1].hash;
        const block = new Block(prevHash, action);

        this.chain.push(block);

        return block;
    }
}