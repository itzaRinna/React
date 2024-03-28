// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]

import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter'

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default App;
