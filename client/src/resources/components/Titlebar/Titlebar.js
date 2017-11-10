import React from 'react'
import ReactDOM from 'react-dom'

export class Titlebar extends React.Component {
    render () {
        return (
            <div className="top-bar animated slideInDown" id="responsive-menu">
              <div className="top-bar-left">
                <ul className="menu">
                  <li><input type="search" placeholder="Trợ giúp từ Alex" /></li>
                  <li><button type="button" className="button">Yêu cầu</button></li>
                </ul>
              </div>
              <div className="top-bar-right">
                <img src="images/logo.svg" width="50px"/>
                <img src="images/logo-text.svg" width="90px"/>
              </div>
            </div>
        );
    }
}
