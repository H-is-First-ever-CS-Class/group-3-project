import gun from "./gun";

const user = gun.user();

/**
 * Create a new user
 * @param alias Alias/Username of the user
 * @param pass Password of the user
 * @param refreshCallback A function that returns void that will be called to force update the component
 */
const useUserCreate = (alias: string, pass: string, refreshCallback: () => void) => user.create(alias, pass, (ack) => {
    console.log(ack);
    refreshCallback();
});
/**
 * Authenticate the user into GUN
 * @param alias Alias/Username of the user
 * @param pass Password of the user
 * @param refreshCallback A function that returns void that will be called to force update the component
 */
const useUserAuth = (alias: string, pass: string, refreshCallback: () => void) => user.auth(alias, pass, (ack) => {
    console.log(ack);
    BlockChain.instance.createSession();
    refreshCallback();
});
/**
 * Return true if the user is NOT logged in
 */
const useShowLoginPrompt = () => user.is === undefined;

// I get UserNotLoggedInError is already defined for some strange reason
class RenamedUserNotLoggedInError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        const fmtMessage = `The application tried performing an action which requires authentication when the user is not logged in.${message !== undefined ? " Further details; " + message : "No further details were provided."}`;

        super(fmtMessage, options);
    }
}

export default user;
export { useUserCreate, useUserAuth, useShowLoginPrompt, RenamedUserNotLoggedInError as UserNotLoggedInError };