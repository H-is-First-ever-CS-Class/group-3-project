import { BaseActionType } from "./BaseAction";
import GenisisAction from "./GenisisAction";
import MoveAction from "./MoveAction";

const actionMappings = {
    [BaseActionType.genisis]: GenisisAction,
    [BaseActionType.move]: MoveAction,
    [BaseActionType.transferFunds]: TransferFundsAction
}

export default actionMappings;