import { useMove } from "./position";

/**
 * A function that will simulate when a player rolls a dice
 */
export const useRollDice = () => {
    useMove(Math.ceil(Math.random() * 6))
};