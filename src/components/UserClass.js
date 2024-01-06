import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                "photo": "dummy",
                "name": 'ccc',
                "location": 'dummy'
            }
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/rahul-priyatham-99')
        const response = await data.json();
        this.setState({
            userInfo: response
        }) 
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is called")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="avatar"></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: +919494971743</h4>
            </div>
        )
    }
}

export default UserClass;

