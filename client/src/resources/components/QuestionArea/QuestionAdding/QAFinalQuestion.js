import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAQuestionTitle} from 'QAQuestionTitle'
import {QAQuestionAnswer} from 'QAQuestionAnswer'

export class QAFinalQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: 'animated bounceInLeft'
        };
    }

    handleDelete() {
        this.setState({animation: 'animated bounceOutRight'});
        setTimeout(function() {
            this.props.onDelete(this.props.questionI1 - 1);
            this.setState({animation: 'animated bounceInUp'});
            console.log
        }.bind(this), 400);
    }

    render() {
        const n = this.props.answerN;
        const answerList = (new Array(n).fill(null)).map((x, i) => {
                return <QAQuestionAnswer title={"Đáp án " + (i + 1)} questionAnswerI={i} questionI1={this.props.questionI1}
                warning={"Bạn quên chưa điền vào đáp án này."}
                onAnswerChange={this.props.onAnswerChange} value={this.props.answers[i].answerContent} />
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
                            <input type="radio" className="option-input teal xcheck radio" name={"privacy" + this.props.questionI1} id={"private" + this.props.questionI1} checked/>
                            <label for={"private" + this.props.id}>Riêng tư</label>
                            <input type="radio" className="option-input teal xcheck radio" name={"privacy" + this.props.questionI1} id={"public" + this.props.questionI1}/>
                            <label for={"public" + this.props.id}>Công khai</label>
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
