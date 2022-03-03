import {
    formatUnits
} from '@ethersproject/units'

const BigNumberHelper = ({
    bn
}) => {
    const [toggle, setToggle] = React.useState(false)

    const decimalString = Number(formatUnits(bn, 18)).toLocaleString()

    return ( <
        div className = "flex space-between" >
        <
        div className = "flex-auto" > {
            toggle ? decimalString : bn.toString()
        } < /div> <
        button className = "ml-4"
        onClick = {
            () => setToggle(!toggle)
        } >
        Toggle 18 decimals <
        /button> <
        /div>
    )
}

export default BigNumberHelper