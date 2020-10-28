import { initContracts, initContractsSend } from './lib/common';

export const stakePool = function(account) {
  console.log(1);
  const contractSend = initContractsSend();
  const amount = 65432222222;
  console.log("before send");
  return contractSend['nux'].pool.methods.stake(amount)
    .send({ from: account, gas: 200000 });
}


export const getBalance = function (tokenName, account) {
  const contract = initContracts()
  console.log("account", account);
  return contract["nux"].erc20.methods.balanceOf(account)
    .call();
}

//
// this.contract[this.xCoin].erc20.methods.balanceOf(this.address).call().then(result => {
//   this.coinBalance = keepDecimalsDown(new BigNumber(result).div(this.decimals), 4);
//   this.coinBalanceStr = result;
// }).catch(err => {
//   errorHandler(err);
// });
