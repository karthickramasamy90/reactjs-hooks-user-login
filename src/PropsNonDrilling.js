import React, { useState, useContext } from 'react';

let context = React.createContext(null);
function PropsNonDrilling() {
        const [firstName, setFirstNmae] = useState("Karthick");
        const [lastName, setLastName] = useState("Ramasamy");

        return(
            <context.Provider value={{ firstName, lastName }} >
                <p>This content is rendered from parent component</p>
                <ChildA />
            </context.Provider>
        )
    }

    const ChildA = () => {
        return(
            <>
                <p>This content is rendered from ChildA</p>
                <ChildB />
            </>
        )
    }

    const ChildB = () => {
        return(
            <>
                <p>This content is rendered from ChildB</p>
                <ChildC />
            </>
        )
    }

    const ChildC = () => {
        const { firstName, lastName } = useContext(context);
        return(
            <>
                <p>This content is rendered from ChildC</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
            </>
        )
    }

export default PropsNonDrilling