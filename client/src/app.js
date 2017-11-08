$(document).ready(() => {
    Foundation.Drilldown.defaults.backButton = '<li class="js-drilldown-back"><a>Quay trở lại</a></li>';
    $(document).foundation();
});
require("foundation-sites/dist/css/foundation.css");

import React from 'react'
import ReactDOM from 'react-dom'

import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'

import {MainApp} from 'MainApp'

import animateCSS from "animate.css"
import myInputRadioCSS from "myInputRadio.scss"
import mySelectBoxCSS from "mySelectBox.scss"
import MainAppCSS from "MainApp.css"
import mainCSS from "app.scss"

ReactDOM.render( <MainApp />, document.getElementById('root'));
