import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing expense record:  {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;