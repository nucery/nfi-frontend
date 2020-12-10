const urlList = [
  {
    base: 'https://ocb.finance',
    ht: 'https://nuc.ocb.finance/#/farm/ht',
  },
  {
    base: 'https://test.ocb.finance',
    ht: 'https://test-nuc.ocb.finance/#/farm/ht',
  },
];

const url = () => {
  return (process.env.REACT_APP_ENV === 'production' ? urlList[0] : urlList[1]);
};

export { url };
