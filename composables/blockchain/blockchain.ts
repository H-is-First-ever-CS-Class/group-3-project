import GenisisAction from "./actions/GenisisAction";
import Block from "./block";

class BlockChain {
    public static instance = new BlockChain(); 

    chain: Block[];

    constructor() {
        this.chain = [new Block(null, new GenisisAction())]
    }
}