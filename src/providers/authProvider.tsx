import { Session, Accounts } from 'ec.sdk';

export default (env: 'stage' | 'live' = 'stage', clientID = 'rest') => {
  const session = new Session(env);
  const accounts = new Accounts(env);
  session.setClientID(clientID);
  async function requestUserIdentity() {
    const me = await accounts.me();
    const { accountID, name } = me;
    return { id: accountID, fullName: name, me };
  }
  return {
    login: async ({ username, password }) => {
      const token = await session.login(username, password);
      accounts.setToken(token);
      session.timeToRefresh();
    },
    logout: async () => {
      await session.logout();
    },
    getIdentity: () => {
      // https://marmelab.com/blog/2020/10/07/react-admin-october-update.html#user-menu-improvements
      return requestUserIdentity();
    },
    checkAuth: async () => {
      if (session.hasToken()) {
        return Promise.resolve()
      }
      return Promise.reject(/* { redirectTo: 'no-access' } */);
    },
    checkError: (error) => Promise.resolve(),
    getPermissions: (params) => Promise.resolve()
  };
};


