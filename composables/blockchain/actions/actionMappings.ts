import { BaseActionType } from "./BaseAction";
import GenisisAction from "./GenisisAction";
import MoveAction from "./MoveAction";

const mappings = {
    [BaseActionType.genisis]: GenisisAction,
    [BaseActionType.move]: MoveAction,
    [BaseActionType.transferFunds]: TransferFundsAction
}

export default mappings;