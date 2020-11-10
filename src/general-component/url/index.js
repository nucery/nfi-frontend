const urlList = [
  {
    base: 'https://ocb.finance',
    nuc: 'https://nuc.ocb.finance/#/farm/nuc',
  },
  {
    base: 'https://test.ocb.finance',
    nuc: 'https://test-nuc.ocb.finance/#/farm/nuc',
  },
];

const url = () => {
  return (process.env.REACT_APP_ENV === 'production' ? urlList[0] : urlList[1]);
};

export { url };
