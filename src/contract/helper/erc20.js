import { address, contract, init } from '../common';
import Web3 from 'web3';

const web3 = new Web3();

init();

export const getBalance = (tokenName, walletAddress) => {
  if (contract[tokenName]) {
    return contract[tokenName].erc20.methods.balanceOf(walletAddress).call();
  } else {
    return Promise.resolve('0');
  }
};

export const getTotalBalance = (tokenName) => {
  if (contract[tokenName]) {
    return contract[tokenName].erc20.methods.balanceOf(address[tokenName].pool).call().then((result) => {
      return Promise.resolve(web3.fromWei(result, 'ether'));
    });
  } else {
    return Promise.resolve('0');
  }
};
