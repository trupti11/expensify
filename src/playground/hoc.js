// High order component (HOC) :  A component that renders other components
// Reuses code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privatse information, please don't share</p>}
            <WrappedComponent {...props}  />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <WrappedComponent {...props} />
                ) : (
                    <p>
                        You are not authenticated
                    </p>
                )}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuth={true} info="asfsffasf"/>, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="asfsffasf"/>, document.getElementById('app'));