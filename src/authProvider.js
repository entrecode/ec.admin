import { Session, Accounts } from 'ec.sdk';

export default (env = 'stage', clientID = 'rest') => {
  const session = new Session(env);
  const accounts = new Accounts(env);
  let userIdentity; // https://marmelab.com/blog/2020/10/07/react-admin-october-update.html#user-menu-improvements
  session.setClientID(clientID);
  return {
    login: async ({ username, password }) => {
      const token = await session.login(username, password);
      accounts.setToken(token);
      const { accountID, name /* , email */ } = await accounts.me();
      userIdentity = { id: accountID, fullName: name };
      session.timeToRefresh();
    },
    logout: async () => {
      await session.logout();
    },
    getIdentity: () => {
      return userIdentity;
    },
    checkAuth: () => {
      return session.hasToken() ? Promise.resolve() : Promise.reject(/* { redirectTo: 'no-access' } */);
    },
    checkError: (error) => Promise.resolve(),
    getPermissions: (params) => Promise.resolve(),
    /* getIdentity: () => Promise.resolve(), */
  };
};
