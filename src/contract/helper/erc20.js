import { address, contract, init, uint256Max, web3 } from '../common';

init();

export const isAllowed = (tokenName, userWalletAddress, poolAddress) => {
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

export const getUserBalance = (tokenName, userWalletAddress) => {
  console.log('getBalance nuc for ${userWalletAddress} 1');
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  if (!userWalletAddress) {
    return Promise.resolve('0');
  }
  if (tokenName.toLowerCase() === 'nuc') {
    console.log('getBalance nuc for ${userWalletAddress} 2');
    return new Promise((resolve, reject) => {
      web3.eth.getBalance(userWalletAddress, null, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  return contract[tokenName].erc20.methods.balanceOf(userWalletAddress).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const getTotalBalanceOfPool = (tokenName) => {
  if (!contract[tokenName]) {
    return Promise.resolve('0');
  }
  return contract[tokenName].erc20.methods.balanceOf(address[tokenName].pool).call().then((result) => {
    return Promise.resolve(web3.fromWei(result, 'ether'));
  });
};

export const postAllowance = (tokenName, userWalletAddress) => {
  if (!contract[tokenName]) {
    return Promise.resolve(null);
  }
  if (!userWalletAddress) {
    return Promise.resolve(null);
  }
  return contract[tokenName].erc20.methods
      .approve(address[tokenName].pool, uint256Max)
      .send({ from: userWalletAddress });
};
