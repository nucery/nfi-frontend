import { contract, init } from '../common';
import Web3 from 'web3';

const web3 = new Web3();

init();

export const getRewardRate = (tokenName) => {
  if (contract[tokenName]) {
    return contract[tokenName].pool.methods.rewardRate().call().then((result) => {
      return Promise.resolve(web3.fromWei(result, 'ether'));
    });
  } else {
    return Promise.resolve('0');
  }
};
