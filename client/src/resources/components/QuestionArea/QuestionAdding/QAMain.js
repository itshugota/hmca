import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAForm} from 'QAForm'
import {QATitle} from "QATitle"
import {NotificationContainer, NotificationManager} from 'react-notifications'
import keydown, { Keys } from 'react-keydown';

export class QAMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needUpdate: false,
            questionAddN: 1
        }
        this.handleNOQChange = this.handleNOQChange.bind(this);
    }

    @keydown('ctrl+z')
    toggleHello() {
        console.log("Hello");
    }

    handleClick() {
        this.setState({needUpdate: true});
        NotificationManager.success(this.state.questionAddN + " câu hỏi mới đã được thêm vào cuối", "Thêm câu hỏi thành công!", 5000, () => {document.getElementById("slide-to").scrollIntoView()});
    }

    handleNOQChange(e) {
        this.setState({questionAddN: e.target.value});
    }

    handleDataChange() {
        this.setState({needUpdate: false});
    }

    render() {
        return (
            <section class="question-main animated">
                <QATitle questionAddN={this.state.questionAddN}
                 onClick={() => this.handleClick()} onChange={this.handleNOQChange} />
                <QAForm needUpdate={this.state.needUpdate} answerN={4} questionAddN={this.state.questionAddN}
                onFinishChange={this.handleDataChange.bind(this)}/>
            </section>
        );
    }
}
