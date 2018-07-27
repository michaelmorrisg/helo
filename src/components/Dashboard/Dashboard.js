import React, {Component} from 'react'

class Dashboard extends Component{
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                <input placeholder="search stuff"/>
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}
export default Dashboard
