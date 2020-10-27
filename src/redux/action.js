export const type = {
  userId: 'userId',
  connectionMask: 'connectionMask',
};

export const creator = (type, value) => {
  return {
    type,
    value,
  };
};
