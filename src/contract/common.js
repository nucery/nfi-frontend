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
    id: 42,
    networkName: 'Kovan',
    rpcUrl: 'https://kovan.eth.aragon.network/',
  },
];

// POOL_START_TIME = 1605096000
// UTC+8 2020-11-11 20:00:00
const addressList = [
  {
    // yarn build => Ethereum Mainnet
    nuc: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    nux: {
      erc20: '0x55bC1a7cbca22CFD83B4395FDEcF97a40EDfAc0c', // !! Deployed by 0x7F5c96fBE5b3Fc5f667CF25c2AED8905689A1910
      pool: '0x9781a0c6246a7C0Ace9E5Ee1219123fF1363e2Ae', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    eth: {
      erc20: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // !! Mainnet WETH address
      pool: '0x2E0C79399d3188B0860eF75925Bc910802c33c72', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    uni: {
      erc20: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // !! Mainnet UNI
      pool: '0xFeC839caD60f3933544780F90C83f4B081f1F211', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    usdt: {
      erc20: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // !! Mainnet USDT by Tether USD (USDT)
      pool: '0xd0dBe49173fc85e211048FeB714Ff6066058F08a', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },

    // reward token, supply 1500000 * 1e18
    nfi: {
      erc20: '0x2CE41ACEcBb817D7307D6D6b38C643b269F5580E', // !! deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
  },
  {
    // yarn start => Ethereum Testnet Kovan
    nuc: {
      erc20: '0xaf7Cd0D0D1D55f17C1B65368dcdCC8A07708C820', // TODO
      pool: '0x9e05e22Bdde4f81A668448656e045898ABd9373a', // TODO
    },
    nux: {
      erc20: '0x55bC1a7cbca22CFD83B4395FDEcF97a40EDfAc0c', // !! Deployed by 0x7F5c96fBE5b3Fc5f667CF25c2AED8905689A1910
      pool: '0x9781a0c6246a7C0Ace9E5Ee1219123fF1363e2Ae', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    eth: {
      erc20: '0xd0A1E359811322d97991E03f863a0C30C2cF029C', // !!~~ KOVAN WETH, different from Mainnet
      pool: '0x2E0C79399d3188B0860eF75925Bc910802c33c72', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    uni: {
      erc20: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // !! KOVAN UNI
      pool: '0xFeC839caD60f3933544780F90C83f4B081f1F211', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    usdt: {
      erc20: '0xD1a4E819393D4b5dE5dFFFB9Dd064CE0AffC2876', // !! KOVAN USDT, different from Mainnet
      pool: '0xd0dBe49173fc85e211048FeB714Ff6066058F08a', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },

    // reward token, supply 1500000 * 1e18
    nfi: {
      erc20: '0x2CE41ACEcBb817D7307D6D6b38C643b269F5580E', // !! deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
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
