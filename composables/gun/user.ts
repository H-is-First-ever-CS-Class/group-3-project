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
    refreshCallback();
});

const useShowLoginPrompt = () => user.is === undefined;

export default user;
export { useUserCreate, useUserAuth, useShowLoginPrompt };