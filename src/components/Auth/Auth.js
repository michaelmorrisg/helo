import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUserInfo} from '../../ducks/reducer'

class Auth extends Component{
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            toDashboard: false,
            photo: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?cs=srgb&dl=animal-pet-cute-126407.jpg&fm=jpg',
            id: 0
        }
    }
    handleUserChange(input){
        this.setState({
            userName: input
        })
    }
    handlePassChange(input){
        this.setState({
            password: input
        })
    }
    addUser(){
        axios.post('/api/newuser',{username:this.state.userName,password:this.state.password})
        .then((res)=>{
            console.log(res)
            this.props.updateUserInfo(res.data[0].id,this.state.userName,this.state.photo);
            this.setState({
                toDashboard: true
            });
        });
    }

    logUser(){
        axios.get(`/api/finduser/${this.state.userName}/${this.state.password}`)
        .then(res=>{
            if(res.data[0]){
                console.log(res.data)
                this.props.updateUserInfo(res.data[0].id,this.state.userName,this.state.photo);
                this.setState({
                    toDashboard: true
                })
            } else{
                alert('wrong username/password!')
            }
        })
    }

    render(){
        if(this.state.toDashboard===false){
        return (
            <div>
                <input onChange={(e)=>this.handleUserChange(e.target.value)} placeholder="username"/>
                <input onChange={(e)=>this.handlePassChange(e.target.value)} placeholder="password"/>
                <button onClick={()=>this.logUser()}>Login</button>
                <button onClick={()=>this.addUser()}>Register</button>
            </div>
        )} else{
            return (
                <Redirect to="/dashboard"/>
            )
        }
    }
}
export default connect(null,{updateUserInfo})(Auth)