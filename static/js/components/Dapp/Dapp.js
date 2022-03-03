import {
    useState
} from 'react'
import {
    useMutation,
    useFlash
} from '@redwoodjs/web'
import {
    Link,
    routes,
    navigate
} from '@redwoodjs/router'
import {
    useAuth
} from '@redwoodjs/auth'
import {
    formattedDate,
    truncate
} from 'src/utils/helpers'
import {
    getWriteMethods,
    filterEvents,
    getViewMethods,
} from 'src/utils/contracts'

import {
    getMethodDisplayName
} from 'src/utils/contracts'

import Method from 'src/components/Method'

import {
    QUERY
} from 'src/components/DappsCell'

const Dapp = ({
    dapp
}) => {
    const {
        currentUser
    } = useAuth()
    const {
        addMessage
    } = useFlash()

    const [tab, setTab] = useState('view')

    const abi = JSON.parse(dapp.abi)

    const [selectedMethod, setSelectedMethod] = useState(getViewMethods(abi)[0])

    const MethodButton = ({
        method
    }) => ( <
        button className = "m-2 block"
        onClick = {
            () => setSelectedMethod(method)
        } > {
            getMethodDisplayName(method)
        } <
        /button>
    )

    const methodButtons =
        tab === 'view' ?
        getViewMethods(abi).map((method, index) => ( <
            MethodButton key = {
                method.name
            }
            method = {
                method
            }
            />
        )) :
        getWriteMethods(abi).map((method, index) => ( <
            MethodButton key = {
                method.name
            }
            method = {
                method
            }
            />
        ))

    return ( <
        >
        <
        div className = "lg:flex lg:items-center lg:justify-between" >
        <
        div className = "flex-1 min-w-0" >
        <
        h2 className = "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate" > {
            dapp.name
        } <
        /h2> <
        div className = "mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6" >
        <
        div className = "mt-2 flex items-center text-sm text-gray-500" >
        <
        svg className = "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 20 20"
        fill = "currentColor"
        aria - hidden = "true" >
        <
        path fillRule = "evenodd"
        d = "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule = "evenodd" /
        >
        <
        /svg> {
            dapp.network ? dapp.network : '(no network)'
        } <
        /div> <
        div className = "mt-2 flex items-center text-sm text-gray-500" >
        <
        svg className = "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 20 20"
        fill = "currentColor"
        aria - hidden = "true" >
        <
        path fillRule = "evenodd"
        d = "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule = "evenodd" /
        >
        <
        /svg>
        Created {
            formattedDate(dapp.createdAt)
        } <
        /div> <
        /div> <
        /div> <
        div className = "flex mt-5 lg:mt-0 lg:ml-4" > {
            currentUser ? .id === dapp.creatorId && ( <
                button className = "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type = "button"
                onClick = {
                    () =>
                    navigate(routes.editDapp({
                        mnemonic: dapp.mnemonic
                    }))
                } >
                <
                svg className = "-ml-1 mr-2 h-5 w-5 text-gray-500"
                xmlns = "http://www.w3.org/2000/svg"
                viewBox = "0 0 20 20"
                fill = "currentColor"
                aria - hidden = "true" >
                <
                path d = "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" / >
                <
                /svg>
                Edit <
                /button>
            )
        } <
        button type = "button"
        onClick = {
            () => navigate(routes.newDapp())
        }
        className = "ml-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
        +New Dapp <
        /button> <
        /div> <
        /div> <
        div className = "mt-4 bg-white shadow  overflow-hidden sm:rounded-lg " >
        <
        div >
        <
        dl >
        <
        div className = "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
        <
        dt className = "text-sm font-medium text-gray-500" > Contract < /dt> <
        dd className = "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" > {
            dapp.contract
        } <
        /dd> <
        /div> <
        div className = "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
        <
        dt className = "text-sm font-medium text-gray-500" > ABI < /dt> <
        dd className = "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" > {
            truncate(
                filterEvents(abi).reduce(
                    (acc, item) => `${acc}${item.name}, `,
                    ''
                ),
                100
            )
        } <
        /dd> <
        /div> <
        /dl> <
        /div> <
        /div> <
        div className = "flex mt-5 w-full" >
        <
        div className = "w-1/2" >
        <
        div className = "flex justify-center" >
        <
        button type = "button"
        onClick = {
            () => setTab('view')
        }
        className = "px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
        Read <
        /button> <
        button type = "button"
        onClick = {
            () => setTab('write')
        }
        className = "ml-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
        Write <
        /button> <
        /div> <
        div className = "mt-4" > {
            methodButtons
        } < /div> <
        /div> <
        div className = "w-1/2 justify-center" >
        <
        Method method = {
            selectedMethod
        }
        network = {
            dapp.network
        }
        contractAddress = {
            dapp.contract
        }
        /> <
        /div> <
        /div> <
        />
    )
}

export default Dapp