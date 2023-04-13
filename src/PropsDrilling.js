import React, { useState } from 'react';

function ParentComponent () {
    // let firstName = "Karthick";
    // let lastName = "Ramasamy";

    const [firstName] = useState("Karthick");
    const [lastName] = useState("Ramasamy");

    return (
        <div>
            <p>This is parent component.</p>
            <ChildA firstName={firstName} lastName={lastName} />
        </div>
    )

    function ChildA(props) {
        const { firstName, lastName } = props;
        return(
            <div>
                <p>This is childA component</p>
                <ChildB firstName={firstName} lastName={lastName} />
            </div>
        )
    }

    function ChildB(props) {
        const { firstName, lastName } = props;
        return(
            <div>
                <p>This is childB component</p>
                <ChildC firstName={firstName} lastName={lastName} />
            </div>
        )
    }

    function ChildC(props) {
        const { firstName, lastName } = props;
        return(
            <div>
                <p>This is childC component</p>
                <p>Peops Drilling sample componenet, Hello {firstName} {lastName} </p>
            </div>
        )
    }
}

export default ParentComponent