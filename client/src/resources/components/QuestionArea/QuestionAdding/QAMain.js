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
            questionN: 1,
            questionAddN: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    @keydown('ctrl+z')
    toggleHello() {
        console.log("Hello");
    }

    handleClick() {
        let newValue = parseInt(this.state.questionN) + parseInt(this.state.questionAddN);
        this.setState({questionN: newValue});
        NotificationManager.success(this.state.questionAddN + " câu hỏi mới đã được thêm vào cuối", "Thêm câu hỏi thành công!", 5000, () => {document.getElementById("slide-to").scrollIntoView()});
    }

    handleChange(e) {
        this.setState({questionAddN: e.target.value});
    }

    handleDelete() {
        let newValue = parseInt(this.state.questionN) - 1;
        this.setState({questionN: newValue});
    }

    render() {
        return (
            <section class="question-main animated">
                <QATitle questionAddN={this.state.questionAddN}
                 onClick={() => this.handleClick()} onChange={this.handleChange} />
                <QAForm questionN={this.state.questionN} answerN={4}
                onDelete={this.handleDelete.bind(this)}/>
            </section>
        );
    }
}
