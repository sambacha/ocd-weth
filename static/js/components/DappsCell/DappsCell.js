import {
    Link,
    routes
} from '@redwoodjs/router'

import Dapps from 'src/components/Dapps'

export const QUERY = gql `
  query DAPPS {
    dapps {
      id
      createdAt
      mnemonic
      name
      description
      abi
      network
      creatorId
    }
  }
`

export const Loading = () => < div > Loading... < /div>

export const Empty = () => {
    return ( <
        div className = "rw-text-center" > {
            'No dapps yet. '
        } <
        Link to = {
            routes.newDapp()
        }
        className = "rw-link" > {
            'Create one?'
        } <
        /Link> <
        /div>
    )
}

export const Success = ({
    dapps
}) => {
    return <Dapps dapps = {
        dapps
    }
    />
}