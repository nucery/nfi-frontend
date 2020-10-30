export const type = {
  userId: 'userId',
  connectionMask: 'connectionMask',
  connectionToUrl: 'connectionToUrl',
};

export const creator = (type, value) => {
  return {
    type,
    value,
  };
};
