// The internal position value that will keep track of the player on the board
const position = ref(0);

/**
 * A function that returns a readonly value of the position
 */
export const usePosition = () => readonly(position);

/**
 * Function that will increment the internal position value
 * @param movements Amount to increment by
 */
export const useMove = (movements: number) => position.value += movements;

/**
 * A function that returns a readonly value of the player's position on the board. Useful for calculating which tile the player is on
 */
export const useBoardPosition = () => readonly(computed(() => position.value % 40));

/**
 * Calculates the board's rotation
 */
export const useBoardRotation = () => readonly(computed(() => {
    const boardPosition = useBoardPosition();
    if (boardPosition.value >= 30) return "rotate(90deg)";
    else if (boardPosition.value >= 20) return "rotate(180deg)";
    else if (boardPosition.value >= 10) return "rotate(270deg)";
    else if (boardPosition.value >= 0) return "rotate(0deg)";
}))