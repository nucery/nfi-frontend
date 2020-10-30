import { address, contract, init, web3 } from '../common';
const MAX_UINT256 = `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`;
init();

export const isAllowed = (tokenName, userWalletAddress, poolAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve(false);
  }
  if (!userWalletAddress) {
    return Promise.resolve(false);
  }
  if (typeof poolAddress !== 'string') {
    return Promise.resolve(false);
  }
  return getAllowance(tokenName, userWalletAddress, poolAddress).then((result) => {
    return Promise.resolve(result !== '0');
  });
};

export const getAllowance = (tokenName, userWalletAddress, poolAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  if (!userWalletAddress) {
    return Promise.resolve('0');
  }
  if (typeof poolAddress !== 'string') {
    return Promise.resolve('0');
  }
  return contract[tokenName].erc20.methods.allowance(userWalletAddress, poolAddress).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const getBalance = (tokenName, userWalletAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  if (!userWalletAddress) {
    return Promise.resolve('0');
  }
  return contract[tokenName].erc20.methods.balanceOf(userWalletAddress).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const getTotalBalance = (tokenName) => {
  if (contract[tokenName]) {
    return Promise.resolve('0');
  }
  return contract[tokenName].erc20.methods.balanceOf(address[tokenName].pool).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const postAllowance = function(tokenName, userWalletAddress) {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }
  return contract[tokenName].erc20.methods
      .approve(address[tokenName].pool, MAX_UINT256)
      .send({ from: userWalletAddress });
};
