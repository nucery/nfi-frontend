import { contract, init, web3 } from '../common';

init();

export const getEarned = (tokenName, userWalletAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  if (!userWalletAddress) {
    return Promise.resolve('0');
  }
  return contract[tokenName].pool.methods.earned(userWalletAddress).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const getIsOpen = (tokenName) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  return contract[tokenName].pool.methods.isOpen().call();
};


export const getRewardRate = (tokenName) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  return contract[tokenName].pool.methods.rewardRate().call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const getUserBalanceInPool = (tokenName, userWalletAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  if (!userWalletAddress) {
    return Promise.resolve('0');
  }
  return contract[tokenName].pool.methods.balanceOf(userWalletAddress).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const postStake = (tokenName, userWalletAddress, amountAsString) => {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }
  return contract[tokenName].erc20.methods
      .stake(web3.toWei(amountAsString, 'ether'))
      .send({ from: userWalletAddress });
};

export const postWithdraw = (tokenName, userWalletAddress, amountAsString) => {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }
  return contract[tokenName].erc20.methods
      .withdraw(web3.toWei(amountAsString, 'ether'))
      .send({ from: userWalletAddress });
};

