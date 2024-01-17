import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col h-screen justify-center items-center" id="error-page">
            <h1 className="text-4xl text-indigo-500">Oops!</h1>
            <p className="text-2xl text-indigo-500 my-4">Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-2xl text-red-600">{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;