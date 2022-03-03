import React from 'react'
import Dappy from '@dappy/dappy'

import {
    ThemeProvider
} from '@dappy/feather'
import options from './options'

const DappyMethod = ({
    onSubmit,
    checkoutComponent,
    network,
    onSubmitCustomFunction,
    id,
}) => {
    const optionsCopy = Object.assign({}, options)
    optionsCopy.stepDetails.checkout.substeps.default = {
        component: checkoutComponent,
    }
    optionsCopy.stepDetails.checkout.onSubmitCustomFunction = onSubmitCustomFunction
    optionsCopy.stepDetails.unlock.network = network
    optionsCopy.stepDetails.unlock.substeps.network.props = {
        networkName: network,
    }
    optionsCopy.id = id

    return ( <
        ThemeProvider >
        <
        Dappy options = {
            optionsCopy
        }
        infuraKey = {
            process.env.INFURA_ENDPOINT_KEY
        }
        debug /
        >
        <
        /ThemeProvider>
    )
}

export default DappyMethod