import React from 'react';
import ReactDOM from 'react-dom';
import ChapSnatApp from './ChapSnatApp';


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(ChapSnatApp),
        document.getElementById('root')
    );
});
