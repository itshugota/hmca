import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAQuestionTitle} from 'QAQuestionTitle'
import {QAQuestionAnswer} from 'QAQuestionAnswer'
import {QAQuestionExplanation} from 'QAQuestionExplanation'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class QAFinalQuestion extends React.Component {
    constructor(props) {
        super(props);
        var displayClass = '';
        if (props.simplified) {
            displayClass = 'hidden';
        }
        this.state = {
            animation: 'animated bounceInLeft',
            deleteBtnClass: displayClass
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
            }.bind(this), 400);
        }
    }

    handlePrivacyChange(e) {
        this.props.onPrivacyChange(this.props.questionI1 - 1, e.target.value);
    }

    handleTypeChange(e) {
        this.props.onTypeChange(this.props.questionI1 - 1, e.target.value);
    }

    render() {
        console.log(this.props.simplified);

        const n = this.props.answerN;
        const answerList = (new Array(n).fill(null)).map((x, i) => {
                return <QAQuestionAnswer title={"Đáp án " + (i + 1)} questionAnswerI={i} questionI1={this.props.questionI1}
                warning={"Bạn quên chưa điền vào đáp án này."} value={this.props.answers[i].content} correctAnswer={this.props.correctAnswer}
                onAnswerChange={this.props.onAnswerChange} onTickCorrectAnswer={this.props.onTickCorrectAnswer}/>
            }
        );
        let questionNumberTitle = 'Câu hỏi ';
        if (this.props.simplified) {
            questionNumberTitle += 'số ' + this.props.questionI1;
        } else {
            questionNumberTitle += this.props.id;
        }

        return (
            <div className={"grid-x grid-padding-x question-container " + this.state.animation}>
                <img src="./images/logo.svg" className="background-logo"/>
                <div className="small-12 cell">
                    <div className="grid-x centered">
                        <div className="small-11 cell">
                            <div className="grid-x">
                                    <div className="medium-4 small-12 cell">
                                        <img src="./images/speech-bubble.svg" />
                                        <h5>{questionNumberTitle}</h5>
                                        <input type="radio" className="option-input teal xcheck radio" name={"privacy" + this.props.questionI1} id={"private" + this.props.questionI1} value={"private"} onChange={this.handlePrivacyChange.bind(this)} checked={this.props.privacy=='private'}/>
                                        <label for={"private" + this.props.questionI1}>Riêng tư</label>
                                        <input type="radio" className="option-input teal xcheck radio" name={"privacy" + this.props.questionI1} id={"public" + this.props.questionI1} value="public" onChange={this.handlePrivacyChange.bind(this)} checked={this.props.privacy=='public'}/>
                                        <label for={"public" + this.props.questionI1}>Công khai</label>
                                    </div>
                                    <div className="medium-5 small-12 cell">
                                        <input type="text" onChange={this.handleTypeChange.bind(this)} placeholder="Nhập dạng câu hỏi ở đây" value={this.props.questionType} required />
                                    </div>
                            </div>
                        </div>
                        <div className={"small-1 cell trash-button-container " + this.state.deleteBtnClass}>
                            <a href="javascript:void(0)" className="button" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i></a>
                        </div>
                    </div>
                    <QAQuestionTitle questionTitle={this.props.questionTitle} questionI1={this.props.questionI1}
                    warning={"Bạn quên chưa điền đề của câu hỏi này."}
                    onChange={this.props.onTitleChange} />
                    {answerList}
                    <QAQuestionExplanation questionExplanation={this.props.questionExplanation} questionI1={this.props.questionI1}
                    onChange={this.props.onExplanationChange} />
                </div>
            </div>
        );
    }
}
