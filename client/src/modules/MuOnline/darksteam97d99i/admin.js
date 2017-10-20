const ADMIN_SET_ACTIVE_ACCOUNT = 'darksteam97d99i/ADMIN_SET_ACTIVE_ACCOUNT';

const ADMIN_GET_ACCOUNTS_START = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_START';
const ADMIN_GET_ACCOUNTS_SUCCESS = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_SUCCESS';
const ADMIN_GET_ACCOUNTS_FAIL = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_FAIL';

export const adminSetActiveAccount = account => ({ type: ADMIN_SET_ACTIVE_ACCOUNT, account });

export const adminGetAccounts = query =>
  actionCreator(
    ADMIN_GET_ACCOUNTS_START,
    ADMIN_GET_ACCOUNTS_SUCCESS,
    ADMIN_GET_ACCOUNTS_FAIL,
    darksteam97d99i.adminGetAccounts,
    query
  )();

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
