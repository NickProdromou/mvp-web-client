import React from 'react';
import ErrorPage from './NotFound.style';

const NotFound = (props) => (
    <ErrorPage>
        <h1>404</h1>
        <p>Sorry, the page you're trying to find doesn't exist.</p>
        <span> ¯\_(ツ)_/¯</span>
    </ErrorPage>
);


export default NotFound;
