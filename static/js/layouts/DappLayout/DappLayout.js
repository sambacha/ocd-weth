import {
    Link,
    routes
} from '@redwoodjs/router'
import {
    Flash
} from '@redwoodjs/web'

const DappLayout = (props) => {
    return ( <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 mt-5" >
        <
        Flash timeout = {
            4000
        }
        /> <
        main > {
            props.children
        } < /main> <
        /div>
    )
}

export default DappLayout