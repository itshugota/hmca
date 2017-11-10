import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAFinalQuestion} from 'QAFinalQuestion'
import keydown, { Keys } from 'react-keydown';
import {NotificationContainer, NotificationManager} from 'react-notifications'

var undoStack = [], redoStack = [];
export class QAForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsData: Array(1).fill(
                {
                    questionTitle: '',
                    answers: Array(this.props.answerN).fill({content: ''}),
                    correctAnswer: 0,
                    privacy: 'private'
                }
            ),
            questionN: 1,
        }

        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
        this.snapShot = this.snapShot.bind(this);
    }

    @keydown('ctrl+b')
    undo() {
        let prevState = undoStack.pop();
        if (prevState) {
            let tmpState = {
                questionsData: this.state.questionsData,
                questionN: this.state.questionN
            }
            redoStack.push(tmpState);
            const diff = parseInt(this.state.questionN) - parseInt(prevState.questionN);
            this.setState({questionsData: prevState.questionsData, questionN: prevState.questionN});
            NotificationManager.success("", "Hủy bỏ thao tác thành công!", 2000);
        } else {
            NotificationManager.error("Không có thao tác gì gần đây để hủy bỏ", "Không thể hủy bỏ thao tác!", 2000);
        }
    }

    @keydown('ctrl+y')
    redo() {
        let lastState = redoStack.pop();
        if (lastState) {
            let tmpState = {
                questionsData: this.state.questionsData,
                questionN: this.state.questionN
            }
            undoStack.push(tmpState);
            const diff = Math.abs(parseInt(this.state.questionN) - parseInt(lastState.questionN));
            this.setState({questionsData: lastState.questionsData, questionN: lastState.questionN});
            NotificationManager.success("", "Thực hiện lại thao tác thành công!", 2000);
        } else {
            NotificationManager.error("Không có thao tác gì gần đây để thực hiện lại", "Không thể thực hiện lại thao tác!", 2000);
        }
    }

    snapShot() {
        let tmpState = {
            questionsData: this.state.questionsData,
            questionN: this.state.questionN
        }
        undoStack.push(tmpState);
        redoStack.length = 0;
    }

    handlePrivacyChange(i, privacy) {
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy[i].privacy = privacy;
        this.setState({questionsData: questionsDataCopy});
    }

    handleTitleChange(i, value) {
        // i: Question No. i + 1
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy[i].questionTitle = value;
        this.setState({questionsData: questionsDataCopy});
    }

    handleAnswerChange(i, j, value) {
        // i: Question No. i + 1
        // j: Question's Answer No. i + 1
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy[i].answers[j] = {answerContent: value};
        this.setState({questionsData: questionsDataCopy});
    }

    handleTickCorrectAnswer(i, value) {
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy[i].correctAnswer = value;
        this.setState({questionsData: questionsDataCopy});
        console.log(this.state.questionsData[i].correctAnswer);
    }

    handleDelete(i) {
        // i: Question No. i + 1
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy = questionsDataCopy.filter((s, _i) => _i != i);
        let newQuestionN = this.state.questionN - 1;
        this.snapShot();
        this.setState({questionsData: questionsDataCopy, questionN: newQuestionN});
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.needUpdate) { // Number of Questions should change
            let newValue = parseInt(this.state.questionN) + parseInt(nextProps.questionAddN);
            this.snapShot();
            this.setState({questionN: newValue});
            this.props.onFinishChange();
            NotificationManager.success(this.props.questionAddN + " câu hỏi mới đã được thêm vào cuối", "Thêm câu hỏi thành công!", 2000, () => {document.getElementById("slide-to").scrollIntoView()});
        }
    }

    render() {
        let questionsDataCopy = this.state.questionsData;
        let isUpdateNeeded = false;
        [...Array(this.state.questionN)].map((x, i) => {
                if (i >= this.state.questionsData.length) {
                    isUpdateNeeded = true;
                    questionsDataCopy[i] =
                    {
                        questionTitle: '',
                        answers: Array(this.props.answerN).fill({content: ''}),
                        correctAnswer: 0,
                        privacy: 'private'
                    };
                }
            }
        );
        if (isUpdateNeeded) this.setState({questionsData: questionsDataCopy});

        const questionList = [...Array(this.state.questionN)].map((x, i) => {
                return <QAFinalQuestion questionN={this.state.questionN} questionI1={i + 1} questionTitle={this.state.questionsData[i].questionTitle} answerN={this.props.answerN} answers={this.state.questionsData[i].answers} correctAnswer={this.state.questionsData[i].correctAnswer}
                privacy={this.state.questionsData[i].privacy}
                onTitleChange={this.handleTitleChange.bind(this)} onPrivacyChange={this.handlePrivacyChange.bind(this)}
                onAnswerChange={this.handleAnswerChange.bind(this)} onTickCorrectAnswer={this.handleTickCorrectAnswer.bind(this)}
                onDelete={this.handleDelete.bind(this)}/>
            }
        );

        return(
            <form className="question-form" data-abide novalidate>
              <div className="grid-x grid-padding-x">
                <div className="small-12 cell">
                  <div data-abide-error className="alert callout" style={{display: 'none'}}>
                    <p><i className="fi-alert"></i> There are some errors in your form.</p>
                  </div>
                </div>
              </div>
              {questionList}
              <div className="grid-x grid-padding-x" id="slide-to">
                <fieldset className="small-6 cell animated bounceInRight">
                  <button className="button" type="submit" value="Submit">Submit</button>
                </fieldset>
                <fieldset className="small-6 cell animated bounceInRight">
                  <button className="button" type="reset" value="Reset">Reset</button>
                </fieldset>
              </div>
            </form>
        );
    }
}
