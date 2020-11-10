const contentList = {
  en: {
    generalComponent: {
      connectorMask: {
        component: {
          card: {
            index: {
              connect: 'connect',
            },
          },
        },
        index: {
          title: 'Select a wallet provider',
          cancel: 'cancel',
        },
      },
      footer: {
        index: {
          left: 'One-Stop Crypto Bank',
          right: '@ 2020 One-Stop Crypto Bank',
        },
      },
      header: {
        index: {
          brand: 'One-Stop Crypto Bank',
          home: 'HOME',
          farm: 'FARM',
          vault: 'VAULT',
          lend: 'LEND',
          faq: 'FAQ',
        },
        component: {
          statusBar: {
            index: {
              connectWallet: 'Connect Wallet',
              disconnectWallet: 'Disconnect Wallet',
              language: 'English',
            },
          },
        },
      },
    },
    page: {
      farmTokenName: {
        component: {
          depositWithdrawMask: {
            component: {
              card: {
                index: {
                  titleDeposit: 'Deposit',
                  titleWithdraw: 'Withdraw',
                  totalDeposited: 'Total Deposited',
                  myDeposited: 'My Deposited',
                  input: 'Input',
                  myBalance: 'My Balance:',
                  buttonDeposit: 'Deposit',
                  buttonWithdraw: 'Withdraw',
                  buttonProcessing: 'Processing ...',
                  buttonCancel: 'Cancel',
                },
              },
            },
          },
        },
        index: {
          nfiEarned: 'NFI earned',
          harvest: 'Harvest',
          deposit: 'Deposit',
          withdraw: 'Withdraw',
          walletAuthorization: 'Wallet Authorization',
          processing: 'Processing ...',
        },
      },
    },
  },
  'zh-Hans': {
    generalComponent: {
      connectorMask: {
        component: {
          card: {
            index: {
              connect: '连接',
            },
          },
        },
        index: {
          title: '选择钱包',
          cancel: '取消',
        },
      },
      footer: {
        index: {
          left: 'One-Stop Crypto Bank',
          right: '@ 2020 One-Stop Crypto Bank',
        },
      },
      header: {
        index: {
          brand: 'One-Stop Crypto Bank',
          home: 'HOME',
          farm: 'FARM',
          vault: 'VAULT',
          lend: 'LEND',
          faq: 'FAQ',
        },
        component: {
          statusBar: {
            index: {
              connectWallet: '连接钱包',
              disconnectWallet: '断开连接',
              language: '中文',
            },
          },
        },
      },
    },
    page: {
      farmTokenName: {
        component: {
          depositWithdrawMask: {
            component: {
              card: {
                index: {
                  titleDeposit: '存入',
                  titleWithdraw: '提现',
                  totalDeposited: 'Total Deposited',
                  myDeposited: 'My Deposited',
                  input: 'Input',
                  myBalance: 'My Balance:',
                  buttonDeposit: '存入',
                  buttonWithdraw: '提现',
                  buttonProcessing: '处理中 ...',
                  buttonCancel: '取消',
                },
              },
            },
          },
        },
        index: {
          nfiEarned: '可领取',
          harvest: '收获',
          deposit: '存入',
          withdraw: '提现',
          walletAuthorization: '钱包授权',
          processing: '处理中 ...',
        },
      },
    },
  },
};

const i18n = (rfc4646) => {
  return contentList[rfc4646] ? contentList[rfc4646] : contentList.en;
};

export { i18n };
