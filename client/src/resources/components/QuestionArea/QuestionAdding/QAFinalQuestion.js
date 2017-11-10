import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAQuestionTitle} from 'QAQuestionTitle'
import {QAQuestionAnswer} from 'QAQuestionAnswer'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class QAFinalQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: 'animated bounceInLeft'
        };
    }

    handleDelete() {
        if (this.props.questionN == 1) {
            NotificationManager.error("Không thể xóa câu hỏi duy nhất còn lại", "Không thể xóa câu hỏi này!", 2000);
        } else {
            this.setState({animation: 'animated bounceOutRight'});
            setTimeout(function() {
                this.props.onDelete(this.props.questionI1 - 1);
                this.setState({animation: 'animated bounceInUp'});
                console.log
            }.bind(this), 400);
        }
    }

    handlePrivacyChange(e) {
        this.props.onPrivacyChange(this.props.questionI1 - 1, e.target.value);
    }

    render() {
        const n = this.props.answerN;
        const answerList = (new Array(n).fill(null)).map((x, i) => {
                return <QAQuestionAnswer title={"Đáp án " + (i + 1)} questionAnswerI={i} questionI1={this.props.questionI1}
                warning={"Bạn quên chưa điền vào đáp án này."} value={this.props.answers[i].answerContent} correctAnswer={this.props.correctAnswer}
                onAnswerChange={this.props.onAnswerChange} onTickCorrectAnswer={this.props.onTickCorrectAnswer}/>
            }
        );

        return (
            <div className={"grid-x grid-padding-x question-container " + this.state.animation}>
                <img src="./images/logo.svg" className="background-logo"/>
                <div className="small-12 cell">
                    <div className="grid-x centered">
                        <div className="small-10 cell">
                            <img src="./images/speech-bubble.svg" />
                            <h5>Câu hỏi số {this.props.questionI1}</h5>
                            <input type="radio" className="option-input teal xcheck radio" name={"privacy" + this.props.questionI1} id={"private" + this.props.questionI1} value={"private"} onChange={this.handlePrivacyChange.bind(this)} checked={this.props.privacy=='private'}/>
                            <label for={"private" + this.props.questionI1}>Riêng tư</label>
                            <input type="radio" className="option-input teal xcheck radio" name={"privacy" + this.props.questionI1} id={"public" + this.props.questionI1} value="public" onChange={this.handlePrivacyChange.bind(this)} checked={this.props.privacy=='public'}/>
                            <label for={"public" + this.props.questionI1}>Công khai</label>
                        </div>
                        <div className="small-2 cell trash-button-container">
                            <a href="javascript:void(0)" className="button" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i></a>
                        </div>
                    </div>
                    <QAQuestionTitle questionTitle={this.props.questionTitle} questionI1={this.props.questionI1}
                    warning={"Bạn quên chưa điền đề của câu hỏi này."}
                    onChange={this.props.onTitleChange} />
                    {answerList}
                </div>
            </div>
        );
    }
}
