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
  const weekSeconds = 7 * 24 * 3600;
  return contract[tokenName].pool.methods.rewardRate().call().then((result) => {
    return Promise.resolve(web3.fromWei(result * weekSeconds, 'ether'));
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
    if (tokenName === 'usdt') {
      return Promise.resolve(web3.fromWei(result, 'mwei'));
    }
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const postGetReward = (tokenName, userWalletAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }
  return contract[tokenName].pool.methods
      .getReward()
      .send({ from: userWalletAddress });
};

export const postStake = (tokenName, userWalletAddress, amountAsString) => {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }

  // usdt decimal === 6
  let amount = web3.toWei(amountAsString, 'ether');
  if (tokenName === 'usdt') {
    amount = web3.toWei(amountAsString, 'mwei');
  }
  return contract[tokenName].pool.methods
      .stake(amount)
      .send({ from: userWalletAddress });
};

export const postWithdraw = (tokenName, userWalletAddress, amountAsString) => {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }
  // usdt decimal === 6
  let amount = web3.toWei(amountAsString, 'ether');
  if (tokenName === 'usdt') {
    amount = web3.toWei(amountAsString, 'mwei');
  }
  return contract[tokenName].pool.methods
      .withdraw(amount)
      .send({ from: userWalletAddress });
};

