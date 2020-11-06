import Contract from 'web3-eth-contract';
import Web3 from 'web3';

import erc20 from './abi/erc20.json';
import pool from './abi/pool.json';

const uint256Max = `0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`;

const data = { pool, erc20 };

const chainList = [
  {
    // yarn build => Ethereum Mainnet
    id: 1,
    networkName: 'Mainnet',
    rpcUrl: 'https://mainnet.eth.aragon.network/',
  },
  {
    // yarn start => Ethereum Testnet Kovan
    id: 100,
    networkName: 'Nuc',
    // rpcUrl: 'https://kovan.eth.aragon.network/',
    rpcUrl: 'http://106.75.22.48:7121/',
  },
];

const addressList = [
  {
    // yarn build => Ethereum Mainnet
    nuc: {
      erc20: '0x9eE4c8FF9a76aD0892b5A985cEf67E20A9bEFAc0', // TODO
      pool: '0x2E28f78ef7D585407229F180F9de031f741b4bA4', // TODO
    },
    nux: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    eth: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    usdt: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    uni: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
  },
  {
    // yarn start => Ethereum Testnet Kovan
    nuc: {
      erc20: '0x9eE4c8FF9a76aD0892b5A985cEf67E20A9bEFAc0', // TODO
      pool: '0x2E28f78ef7D585407229F180F9de031f741b4bA4', // TODO
    },
    nux: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820',
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a',
    },
    eth: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    usdt: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    uni: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
  },
];

const chain = (process.env.NODE_ENV === 'production' ? chainList[0] : chainList[1]);

const address = (process.env.NODE_ENV === 'production' ? addressList[0] : addressList[1]);

const web3 = window.web3 ?
  new Web3(window.web3.currentProvider) :
  new Web3(new Web3.providers.HttpProvider(chain.rpcUrl));

let contract = null;

const init = () => {
  if (contract !== null) {
    return;
  }
  Contract.setProvider(window.ethereum || chain.rpcUrl);
  contract = JSON.parse(JSON.stringify(address));
  // eslint-disable-next-line array-callback-return
  Object.keys(contract).map((key) => {
    // eslint-disable-next-line array-callback-return
    Object.keys(contract[key]).map((key1) => {
      contract[key][key1] = new Contract(data[key1], (address[key])[key1]);
    });
  });
};

const recept = (transactionHash) => {
  return new Promise((resolve) => {
    if (!transactionHash) {
      resolve(null);
    }
    web3.eth.getTransactionReceipt(transactionHash, (_, data) => {
      resolve(data);
    });
  });
};

export { address, chain, contract, init, recept, uint256Max, web3 };
