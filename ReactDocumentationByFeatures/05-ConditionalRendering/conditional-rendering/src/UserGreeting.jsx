//    if(props.isLoggedIn){
//        return <h2>Welcome {props.username}</h2>
//    }
//    return <h2>Please Log in to continue</h2>

import PropTypes from 'prop-types';

function UserGreetings(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username} </h2>

    const loginPrompt = <h2 className="login-prompt">Please Log in to continue</h2>

    
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
    

}

UserGreetings.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreetings