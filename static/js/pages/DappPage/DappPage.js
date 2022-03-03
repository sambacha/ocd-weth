import DappLayout from 'src/layouts/DappLayout'
import DappCell from 'src/components/DappCell'

const DappPage = ({
    mnemonic
}) => {
    return ( <
        DappLayout >
        <
        DappCell mnemonic = {
            mnemonic
        }
        /> <
        /DappLayout>
    )
}

export default DappPage