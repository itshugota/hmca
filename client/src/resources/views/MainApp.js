import React from 'react'
import ReactDOM from 'react-dom'
import {SidebarMenu} from 'SidebarMenu'
import {Titlebar} from 'Titlebar'
import {QAMain} from 'QAMain'
import {QSMain} from 'QSMain'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class MainApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DashboardDisplay: 'displayed',
            QAMainDisplay: 'hidden',
            QSMainDisplay: 'hidden'
        }

        this.refreshDisplay = this.refreshDisplay.bind(this);
    }

    refreshDisplay() {
        this.setState({
            DashboardDisplay: 'hidden',
            QAMainDisplay: 'hidden',
            QSMainDisplay: 'hidden'
        });
    }

    handleClick(id) {
        this.refreshDisplay();
        if (id == 'sb-wall') {
            this.setState({DashboardDisplay: 'displayed'});
        } else if (id == 'sb-question-add') {
            this.setState({QAMainDisplay: 'displayed'})
        } else if (id == 'sb-question-search') {
            this.setState({QSMainDisplay: 'displayed'})
        }
    }

    render() {
        return (
            <div id="outer-container" style={{height: 100 + '%'}}>
                <SidebarMenu onClick={this.handleClick.bind(this)}/>
                <main id="page-wrap" className="page-wrap">
                    <Titlebar />
                    <section id="main-content">
                        <QAMain display={this.state.QAMainDisplay}/>
                        <QSMain display={this.state.QSMainDisplay}/>
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
