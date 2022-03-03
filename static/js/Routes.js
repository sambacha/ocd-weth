// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import {
    Router,
    Route,
    Private
} from '@redwoodjs/router'

// <Route path="/users" page={UsersPage} name="users" />
const Routes = ({
    useAuth
}) => {
    return ( <
        Router useAuth = {
            useAuth
        } >
        <
        Route path = "/"
        page = {
            HomePage
        }
        name = "home" / >
        <
        Route path = "/login"
        page = {
            LoginPage
        }
        name = "login" / >
        <
        Route path = "/dapps"
        page = {
            DappsPage
        }
        name = "dapps" / >
        <
        Private unauthenticated = "login" >
        <
        Route path = "/users/{id}/edit"
        page = {
            EditUserPage
        }
        name = "editUser" / >
        <
        Route path = "/users/{id}"
        page = {
            UserPage
        }
        name = "user" / >
        <
        Route path = "/new"
        page = {
            NewDappPage
        }
        name = "newDapp"
        whileLoading = {
            () => 'Loading...'
        }
        /> <
        Route path = "/{mnemonic}/edit"
        page = {
            EditDappPage
        }
        name = "editDapp" / >
        <
        /Private> <
        Route path = "/{mnemonic}"
        page = {
            DappPage
        }
        name = "dapp" / >
        <
        Route notfound page = {
            NotFoundPage
        }
        /> <
        /Router>
    )
}

export default Routes