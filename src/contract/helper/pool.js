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

export const getRewardRate = (tokenName) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  return contract[tokenName].pool.methods.rewardRate().call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};
