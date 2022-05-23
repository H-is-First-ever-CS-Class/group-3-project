import gun from "./gun";

const user = gun.user();

const USER_IS = user.is;
const USER_IS_LOGGED_IN = () => USER_IS !== undefined;

const useUserIsLoggedIn = () => readonly(watch([USER_IS], USER_IS_LOGGED_IN));

/**
 * Create a new user
 * @param alias Alias/Username of the user
 * @param pass Password of the user
 */
const useUserCreate = (alias: string, pass: string) => user.create(alias, pass, (ack) => {
    console.log(ack)
});
/**
 * Authenticate the user into GUN
 * @param alias Alias/Username of the user
 * @param pass Password of the user
 */
const useUserAuth = (alias: string, pass: string) => user.auth(alias, pass)

export default user;
export {useUserIsLoggedIn, useUserCreate, useUserAuth};