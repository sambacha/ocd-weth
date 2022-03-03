import Dapp from 'src/components/Dapp'

export const QUERY = gql `
  query FIND_DAPP_BY_MNEMONIC($mnemonic: String!) {
    dapp: dapp(mnemonic: $mnemonic) {
      id
      createdAt
      mnemonic
      name
      description
      abi
      network
      creatorId
      updatedAt
      contract
    }
  }
`

export const Loading = () => < div > Loading... < /div>

export const Empty = () => < div > Dapp not found < /div>

export const Success = ({
    dapp
}) => {
    return <Dapp dapp = {
        dapp
    }
    />
}