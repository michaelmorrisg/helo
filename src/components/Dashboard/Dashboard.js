import React, {Component} from 'react'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()
        this.state = {
            search: '',
            allPosts: [],
            includeUserposts: false
        }
    }
    componentDidMount(){
        axios.get(`/api/postsfirst`).then(response=>{
            this.setState({
                allPosts: response.data
            })
            console.log(response)
        })
    }
    refreshSearch(){
        if(this.state.includeUserposts === true){
        console.log(this.state.userposts)
        axios.get(`/api/posts?myposts=${this.state.userposts}`)
        .then(response=>{
            this.setState({
                allPosts: response.data
            })
            console.log(this.state.allPosts)
        })
    } else{
        axios.get(`/api/posts`)
        .then(response=>{
            this.setState({
                allPosts: response.data
            })
        })
    }
}
    handleSearch(input){
        this.setState({
            search: input
        })
    }
    handleClicky(){
        this.setState({
            includeUserposts: !this.state.includeUserposts
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e)=>this.handleSearch(e.target.value)}placeholder="search stuff"/>
                <button onClick={()=>this.refreshSearch()}>Search</button>
                <button>Reset</button>
                <input onClick={()=>{this.handleClicky()}} type="checkbox" name="Include My Posts" />Don't Include my posts
                {this.state.allPosts.map((element)=>{
                    return (
                        <div><h2>{element.title}</h2>{element.content}<br/>-{element.name}</div>
                    )
                })}
            </div>
        )
    }
}
export default Dashboard
