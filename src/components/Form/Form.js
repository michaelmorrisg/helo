import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Form extends Component{
    constructor() {
        super()
        this.state = {
            title: '',
            image: '',
            content: '',
            toDashboard: false
        }
    }

    handleTitle(input){
        this.setState({
            title: input
        })
    }
    handleImage(input){
        this.setState({
            image: input
        })
    }
    handleContent(input){
        this.setState({
            content: input
        })
    }
    addPost(){
        axios.post(`/api/newpost`,{title:this.state.title,image:this.state.image,content: this.state.content})
        .then(res=>{
            this.setState({
                toDashboard: true
            })
        })
    }

    render(){
        if(this.state.toDashboard===false){
        return (
            <div>
                <input onChange={(e)=>this.handleTitle(e.target.value)} placeholder="title"/>
                <input onChange={(e)=>this.handleImage(e.target.value)} placeholder="image"/>
                <input onChange={(e)=>this.handleContent(e.target.value)} placeholder="content"/>
                <button onClick={()=>this.addPost()}>Post</button>
            </div>
        )} else{
            return(
                <Redirect to="/dashboard"/>
            )
        }
    }
}
function mapStateToProps(state){
    const {id} = state
    return {id}
}
export default connect(mapStateToProps)(Form)