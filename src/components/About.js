import User from "./User";
import UserClass from "./UserClass";
import React from 'react';
import UserContext from "./utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    Loggedin User: 
                    <UserContext.Provider value={{loggedInUser: "sai"}}>
                        <UserContext.Consumer>
                            {({ loggedInUser }) =>
                            (<h1>
                                {loggedInUser}
                            </h1>)
                            }
                        </UserContext.Consumer>
                    </UserContext.Provider>
                </div>
                <UserClass name={"Rahul Priyatham"} location={"Bangalore"} />
            </div>
        )
    }
}

// const About = () => {
//     return (
// <div>
//     <h1>About</h1>
//     {/* <User name={"Rahul Priyatham (as props to functional component)"}/> */}
//     <UserClass name={"Rahul Priyatham (as props to class based component)"} location={"Tirupati"}  />
// </div>
//     )
// }

export default About;