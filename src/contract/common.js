import Contract from 'web3-eth-contract';
import Web3 from 'web3';

import erc20 from './abi/erc20.json';
import pool from './abi/pool.json';

const uint256Max = `0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`;

const data = { pool, erc20 };

const chainList = [
  // {
  //   // yarn build => Ethereum Mainnet
  //   id: 1,
  //   networkName: 'Mainnet',
  //   rpcUrl: 'https://mainnet.eth.aragon.network/',
  // },
  {
    // yarn build => Ethereum Mainnet
    id: 256,
    networkName: 'heco',
    // rpcUrl: 'https://kovan.eth.aragon.network/',
    rpcUrl: 'https://http-testnet.hecochain.com',
  },
  {
    // yarn start => Ethereum Testnet Kovan
    id: 256,
    networkName: 'heco-test',
    // rpcUrl: 'https://kovan.eth.aragon.network/',
    rpcUrl: 'https://http-testnet.hecochain.com',
  },
];

// POOL_START_TIME = 1605096000
// UTC+8 2020-11-11 20:00:00
const addressList = [
  {
    // yarn build => HECO Mainnet
    ht: {
      erc20: '', // !!!!!!! no need
      pool: '0x805730A173d4F495F8B4C9Bf32d1ec44c78ca558', // !! Deployed by 0x2a9CA2F570e74470BBA26a2B022d53895726c432
    },

    // reward token, supply 1500000 * 1e18
    pnt: {
      erc20: '0xE3d9Dc7D08B0725429226e761c914a1E510F662b', // !! deployed by 0x2a9CA2F570e74470BBA26a2B022d53895726c432
    },
  },
  {
    // yarn build => HECO Testnet
    ht: {
      erc20: '', // !!!!!!! no need
      pool: '0x805730A173d4F495F8B4C9Bf32d1ec44c78ca558', // !! Deployed by 0x2a9CA2F570e74470BBA26a2B022d53895726c432
    },

    // reward token, supply 1500000 * 1e18
    pnt: {
      erc20: '0xE3d9Dc7D08B0725429226e761c914a1E510F662b', // !! deployed by 0x2a9CA2F570e74470BBA26a2B022d53895726c432
    },
  },
];

const chain = (process.env.REACT_APP_ENV === 'production' ? chainList[0] : chainList[1]);

const address = (process.env.REACT_APP_ENV === 'production' ? addressList[0] : addressList[1]);

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
