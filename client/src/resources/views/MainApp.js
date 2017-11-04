import React from 'react'
import ReactDOM from 'react-dom'
import {SidebarMenu} from 'SidebarMenu'
import {Titlebar} from 'Titlebar'
import {Titlebar} from 'Titlebar'

export class MainApp extends React.Component {
    render() {
        return (
            <div id="outer-container" style={{height: 100 + '%'}}>
                <SidebarMenu />
                <main id="page-wrap">
                    <Titlebar />
                    <section id="main-content">
                        //Table
                    </section>
                </main>
            </div>
        );
    }
}
