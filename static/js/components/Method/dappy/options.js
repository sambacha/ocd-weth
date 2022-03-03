/* eslint-disable i18next/no-literal-string */
import {
    WalletUnlockLoading,
    WalletUnlockError,
    WalletUnlockInstall,
    Web3TxCheckoutRejected,
    WalletUnlockPrompt,
} from '@dappy/feather'

const PendingDefault = () => ( <
    div className = "" > Submitted to chain.Waiting
    for confirmation... < /div>
)
const PendingFailed = () => < div className = "" > Transaction Failed < /div>
const PendingSuccess = () => < div className = "" > Success! < /div>
const WalletUnlockNetwork = ({
    networkName
}) => ( <
    div className = "" > Wrong network.Please
    switch to {
        networkName
    } < /div>
)

const NETWORK = 'goerli'

const walletList = [{
        name: 'Metamask',
        iconName: 'metamask',
        iconColor: '#F58C25',
        id: 'metamask',
    },
    {
        name: 'Coinbase Wallet',
        iconName: 'coinbase-wallet',
        iconColor: '#2F5CE2',
        id: 'walletLink',
    },
    {
        name: 'Mobile Wallet',
        iconName: 'mobile-wallet',
        iconColor: '#3B99FC',
        id: 'walletConnect',
        subText: 'Trust, Argent, Rainbow, Others',
    },
]

const options = {
    stepOrder: ['unlock', 'checkout', 'pending'],
    stepDetails: {
        unlock: {
            category: 'wallet',
            type: 'unlock',
            skippable: true, // defaults to false
            network: NETWORK,
            substeps: {
                default: {
                    component: WalletUnlockPrompt,
                    props: {
                        walletList
                    }
                },
                error: {
                    component: WalletUnlockError
                },
                network: {
                    component: WalletUnlockNetwork,
                    props: {
                        networkName: NETWORK
                    },
                },
                install: {
                    component: WalletUnlockInstall
                },
            },
        },
        checkout: {
            category: 'web3',
            type: 'tx',
            substeps: {
                default: {
                    component: WalletUnlockLoading
                },
                rejected: {
                    component: Web3TxCheckoutRejected
                },
            },
        },
        pending: {
            category: 'web3',
            type: 'pending',
            substeps: {
                default: {
                    component: PendingDefault
                },
                success: {
                    component: PendingSuccess
                },
                failed: {
                    component: PendingFailed
                },
            },
        },
    },
}

export default options