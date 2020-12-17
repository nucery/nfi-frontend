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
    id: 100,
    networkName: 'Nuc',
    // rpcUrl: 'https://kovan.eth.aragon.network/',
    rpcUrl: 'http://106.75.22.48:7121/',
  },
  {
    // yarn start => Ethereum Testnet Kovan
    id: 100,
    networkName: 'Nuc',
    // rpcUrl: 'https://kovan.eth.aragon.network/',
    rpcUrl: 'http://106.75.22.48:7121/',
  },
];

// POOL_START_TIME = 1605096000
// UTC+8 2020-11-11 20:00:00
const addressList = [
  {
    // yarn build => Ethereum Mainnet
    nuc: {
      erc20: '0x9eE4c8FF9a76aD0892b5A985cEf67E20A9bEFAc0', // !!!!!!! no need
      pool: '0x85462dfAd7b5Ec34acdBE0f457d7c510CEc61599', // !! Deployed by 0x2Ccc5419B3eE3c0Fda1091a9ca75058f14d633ca
    },
    'lp-eth-nfi': {
      erc20: '0xf78f3FE99b6A391081AB5ae960866AeC2EF8DCDa',
      pool: '0xFD075482866b7834d08463E53C4dAD0F37244d09',
    },
    'lp-usdt-nfi': {
      erc20: '0x3c974e0332e7FB61F9e9dEC1338ba6DFe25dB8D6',
      pool: '0x8eAdB1B4416d22ECbC79FaB81eF62d112c268b6e',
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
      erc20: '0xD04fe38aCAFFE1aC4D45e710BfbFE8cB9aAd6adE', // !! deployed by 0x2Ccc5419B3eE3c0Fda1091a9ca75058f14d633ca
    },
  },
  {
    // yarn start => nuc test-net
    nuc: {
      erc20: '0x9eE4c8FF9a76aD0892b5A985cEf67E20A9bEFAc0', //   !!!!!!! no need
      pool: '0x85462dfAd7b5Ec34acdBE0f457d7c510CEc61599', // !! Deployed by 0x2Ccc5419B3eE3c0Fda1091a9ca75058f14d633ca
    },
    'lp-eth-nfi': {
      erc20: '0xf78f3FE99b6A391081AB5ae960866AeC2EF8DCDa',
      pool: '0xFD075482866b7834d08463E53C4dAD0F37244d09',
    },
    'lp-usdt-nfi': {
      erc20: '0x3c974e0332e7FB61F9e9dEC1338ba6DFe25dB8D6',
      pool: '0x8eAdB1B4416d22ECbC79FaB81eF62d112c268b6e',
    },
    nux: {
      erc20: '0x76941Ef602eE78Ca37F29EcA83BB491e3ec959d0', // !! Deployed by 0x7F5c96fBE5b3Fc5f667CF25c2AED8905689A1910
      pool: '0x8A5Bc632C1Dc8e6B03E874FA144eff35e114CCcc', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    eth: {
      erc20: '0xd0A1E359811322d97991E03f863a0C30C2cF029C', // !!~~ KOVAN WETH, different from Mainnet
      pool: '0x13e64b2b4941073F0065782A640Ce73503A13E4d', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    uni: {
      erc20: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // !! KOVAN UNI
      pool: '0x8d3476e113f847Ac1b76D5F71e5a7F54d834a459', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },
    usdt: {
      erc20: '0xD1a4E819393D4b5dE5dFFFB9Dd064CE0AffC2876', // !! KOVAN USDT, different from Mainnet
      pool: '0xe2C807C320644Aa9F22CF97BF4ea40Bc56Ff46C1', // !! Deployed by 0x2f2Ae9BB2E05BC4D25b21a55cd1A3Ccef9D57816
    },

    // reward token, supply 1500000 * 1e18
    nfi: {
      erc20: '0xD04fe38aCAFFE1aC4D45e710BfbFE8cB9aAd6adE', // !! deployed by 0x2Ccc5419B3eE3c0Fda1091a9ca75058f14d633ca
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
