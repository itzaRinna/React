// conditional rendering = allows you to control what gets rendered
//                         in your application base on certain conditions
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx";

function App() {
    return(
        <>
            <UserGreeting isLoggedIn={true} username="BroCode"/>
        </>
    );
}

export default App
