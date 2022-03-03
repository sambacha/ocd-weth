import {
    useMutation,
    useFlash
} from '@redwoodjs/web'
import {
    Link,
    routes
} from '@redwoodjs/router'
import {
    filterEvents
} from 'src/utils/contracts'
import {
    truncate as truncateCustom
} from 'src/utils/helpers'
import {
    QUERY
} from 'src/components/DappsCell'
import {
    formattedDate
} from 'src/utils/helpers'

const DELETE_DAPP_MUTATION = gql `
  mutation DeleteDappMutation($id: String!) {
    deleteDapp(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
    let output = text
    if (text && text.length > MAX_STRING_LENGTH) {
        output = output.substring(0, MAX_STRING_LENGTH) + '...'
    }
    return output
}

const jsonTruncate = (obj) => {
    return truncate(JSON.stringify(obj, null, 2))
}

const checkboxInputTag = (checked) => {
    return <input type = "checkbox"
    checked = {
        checked
    }
    disabled / >
}

const DappsList = ({
    dapps
}) => {
    const {
        addMessage
    } = useFlash()
    const [deleteDapp] = useMutation(DELETE_DAPP_MUTATION, {
        onCompleted: () => {
            addMessage('Dapp deleted.', {
                classes: 'rw-flash-success'
            })
        },
        // This refetches the query on the list page. Read more about other ways to
        // update the cache over here:
        // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
        refetchQueries: [{
            query: QUERY
        }],
        awaitRefetchQueries: true,
    })

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete dapp ' + id + '?')) {
            deleteDapp({
                variables: {
                    id
                }
            })
        }
    }

    return ( <
        div className = "rw-segment rw-table-wrapper-responsive" >
        <
        table className = "rw-table" >
        <
        thead >
        <
        tr >
        <
        th > Name < /th> <
        th > Description < /th> <
        th > Mnemonic < /th> <
        th > Network < /th> <
        th > Created < /th> <
        th > Abi < /th> <
        th > & nbsp; < /th> <
        /tr> <
        /thead> <
        tbody > {
            dapps.map((dapp) => ( <
                tr key = {
                    dapp.id
                } >
                <
                td > {
                    truncate(dapp.name)
                } < /td> <
                td > {
                    truncate(dapp.description)
                } < /td> <
                td > {
                    truncate(dapp.mnemonic)
                } < /td> <
                td > {
                    truncate(dapp.network)
                } < /td> <
                td > {
                    formattedDate(dapp.createdAt)
                } < /td> <
                td > {
                    truncateCustom(
                        filterEvents(JSON.parse(dapp.abi)).reduce(
                            (acc, item) => `${acc}${item.name}, `,
                            ''
                        ),
                        100
                    )
                } <
                /td> <
                td >
                <
                nav className = "rw-table-actions" >
                <
                Link to = {
                    routes.dapp({
                        mnemonic: dapp.mnemonic
                    })
                }
                title = {
                    'Show dapp ' + dapp.mnemonic + ' detail'
                }
                className = "rw-button rw-button-small" >
                View <
                /Link> <
                /nav> <
                /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    )
}

export default DappsList