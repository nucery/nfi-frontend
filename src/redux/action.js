export const type = {
  userId: 'userId',
  connectionMask: 'connectionMask',
  connectionToUrl: 'connectionToUrl',
  depositWithdrawMask: 'depositWithdrawMask',
  deposit: 'deposit',
  language: 'language',
};

export const creator = (type, value) => {
  return {
    type,
    value,
  };
};
