import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser,updateUserInfo} from '../../ducks/reducer'
import axios from 'axios'
import {withRouter} from 'react-router'

class Nav extends Component{

    componentDidMount(){
        axios.get('/api/auth/me').then((res)=>{
            console.log('care about me',res)
            if(res.data[0]){
            this.props.updateUserInfo(res.data[0].id,res.data[0].name,res.data[0].profile_pic)
        } else {
            this.props.updateUserInfo(null,null,null)
        }})
    }

    logOut(){
        axios.post('/api/auth/logout').then(res=>{
            this.props.logoutUser()
        })
    }

    render(props){
        console.log(this.props.location.pathname)
        if(this.props.location.pathname != '/'){
    return(
        <div>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/new"><button>New Post</button></Link>
            <Link to="/"><button onClick={()=>this.logOut()}>Logout</button></Link>
            <div>{this.props.username}</div>
            <div><img src={this.props.profilePicture}/></div>
        </div>
    )} else {
        return (
            <div></div>
        )
    }
}
}
function mapStateToProps(state){
    const {username,profilePicture} = state
    return {username,profilePicture}
}
export default withRouter(connect(mapStateToProps, {logoutUser,updateUserInfo})(Nav))