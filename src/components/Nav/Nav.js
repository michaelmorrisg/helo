import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/reducer'

function Nav(props){

    return(
        <div>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/new"><button>New Post</button></Link>
            <Link to="/"><button onClick={()=>props.logoutUser()}>Logout</button></Link>
            <div>{props.username}</div>
            <div><img src={props.profilePicture}/></div>
        </div>
    )
}
function mapStateToProps(state){
    const {username,profilePicture} = state
    return {username,profilePicture}
}
export default connect(mapStateToProps, {logoutUser})(Nav)