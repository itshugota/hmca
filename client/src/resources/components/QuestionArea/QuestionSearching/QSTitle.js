import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QSTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-x qa-title animated slideInDown">
                <div className="small-1 cell">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="small-11 cell">TÌM KIẾM CÂU HỎI NHANH</div>
            </div>
        );
    }
}
