// import { Component } from 'react'        //class component
// class Header extends Component {
//     render() {
//         return (
//             <h1>This is the header {this.props.data}</h1>
//         )
//     }
// }
function Header(props) {                             //functional component
    return(
        <h1>This is the header file {props.data}</h1>
    )
}

export default Header