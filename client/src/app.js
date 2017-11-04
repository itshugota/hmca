$(document).ready(() => {
    Foundation.Drilldown.defaults.backButton = '<li class="js-drilldown-back"><a>Quay trở lại</a></li>';
    $(document).foundation();
});
require("foundation-sites/dist/css/foundation.css");

import React from 'react'
import ReactDOM from 'react-dom'
import {MainApp} from 'MainApp'

import animateCSS from "animate.css"
import MainAppCSS from "MainApp.css"
import mainCSS from "app.scss"

ReactDOM.render( <MainApp />, document.getElementById('root'));
/*
var swap = false;
setInterval( () => {
    if (swap) {
        ReactDOM.render( <Navbar2 />, document.getElementById('root'));
        swap = false;
    } else {

    }
}, 2000);*/
