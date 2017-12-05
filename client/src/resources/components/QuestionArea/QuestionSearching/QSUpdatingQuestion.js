import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAForm} from 'QAForm'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class QSUpdatingQuestion extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="reveal question-modal" id="update-question" data-reveal>
                <img className="header-logo" src="images/logo.svg"/>
                <h4>Sửa câu hỏi</h4>
                <QAForm simplified={1} id={this.props.id}/>
            </div>
        );
    }
}
