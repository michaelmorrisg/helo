import React, {Component} from 'react'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()
        this.state = {
            search: '',
            allPosts: [],
            userposts: true
        }
    }
    componentDidMount(){
        axios.get(`/api/posts?myposts=${this.state.userposts}&filter=${this.state.search}`).then(response=>{
            this.setState({
                allPosts: response.data
            })
            console.log(response)
        })
    }
    handleSearch(input){
        this.setState({
            search: input
        })
    }
    handleClicky(){
        this.setState({
            userposts: !this.state.userposts
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e)=>this.handleSearch(e.target.value)}placeholder="search stuff"/>
                <button>Search</button>
                <button>Reset</button>
                <input onClick={()=>{this.handleClicky()}} type="checkbox" name="Include My Posts" />Include my posts
                {this.state.allPosts.map((element)=>{
                    return (
                        <div>{element.title}{element.content}{element.name}</div>
                    )
                })}
            </div>
        )
    }
}
export default Dashboard
