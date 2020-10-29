import Contract from 'web3-eth-contract';

import erc20 from './abi/erc20.json';
import pool from './abi/pool.json';

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
    id: 42,
    networkName: 'Kovan',
    rpcUrl: 'https://kovan.eth.aragon.network/',
  },
];

const addressList = [
  {
    // yarn build => Ethereum Mainnet
  },
  {
    // yarn start => Ethereum Testnet Kovan
    nuc: {
      erc20: '',
      pool: '',
    },
    nux: {
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a',
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820',
    },
    eth: {
      erc20: '',
      pool: '',
    },
    usdt: {
      erc20: '',
      pool: '',
    },
    uni: {
      erc20: '',
      pool: '',
    },
  },
];

const chain = (process.env.NODE_ENV === 'production' ? chainList[0] : chainList[1]);

const address = (process.env.NODE_ENV === 'production' ? addressList[0] : addressList[1]);

let contract = null;

const init = () => {
  if (contract !== null) {
    return;
  }
  Contract.setProvider(window.ethereum || chain.rpcUrl);
  contract = Object.keys(address).map((key) => {
    return Object.create(
        key,
        Object.keys(address[key]).map((key1) => {
          return Object.create(
              key1,
              new Contract(data[key1], address[key][key1]),
          );
        }),
    );
  });
};

export { address, chain, contract, init };
