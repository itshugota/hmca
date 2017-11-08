import React from 'react'
import ReactDOM from 'react-dom'
import {SidebarMenu} from 'SidebarMenu'
import {Titlebar} from 'Titlebar'
import {QAMain} from 'QAMain'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class MainApp extends React.Component {
    render() {
        return (
            <div id="outer-container" style={{height: 100 + '%'}}>
                <SidebarMenu />
                <main id="page-wrap">
                    <Titlebar />
                    <section id="main-content">
                        <QAMain />
                    </section>
                </main>
                <NotificationContainer/>
            </div>
        );
    }
}

$(document).ready(() => {
    $(".bm-burger-button").addClass("animated slideInDown");
});
