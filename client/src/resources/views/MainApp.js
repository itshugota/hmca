import React from 'react'
import ReactDOM from 'react-dom'
import {SidebarMenu} from 'SidebarMenu'
import {Titlebar} from 'Titlebar'
import {QAMain} from 'QAMain'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class MainApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DashboardDisplay: 'displayed',
            QAMainDisplay: 'hidden',
            QEMainDisplay: 'hidden'
        }

        this.refreshDisplay = this.refreshDisplay.bind(this);
    }

    refreshDisplay() {
        this.setState({
            DashboardDisplay: 'hidden',
            QAMainDisplay: 'hidden',
            QEMainDisplay: 'hidden'
        });
    }

    handleClick(id) {
        this.refreshDisplay();
        if (id == 'sb-wall') {
            this.setState({DashboardDisplay: 'displayed'});
        } else if (id == 'sb-question-add') {
            this.setState({QAMainDisplay: 'displayed'})
        } else if (id == 'sb-question-search') {
            this.setState({QEMainDisplay: 'dispalyed'})
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
