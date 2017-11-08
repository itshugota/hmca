import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAFinalQuestion} from 'QAFinalQuestion'

export class QAForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsData: Array(1).fill(
                {
                    questionTitle: '',
                    answers: Array(this.props.answerN).fill({content: ''})
                }
            ),
            questionN: 1,
            undoStack: [],
            isAnUndoUpdate: false,
            redoStack: []
        }
    }

    handleTitleChange(i, value) {
        // i: Question No. i + 1
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy[i].questionTitle = value;
        this.setState({questionsData: questionsDataCopy, isAnUndoUpdate: false});
    }

    handleAnswerChange(i, j, value) {
        // i: Question No. i + 1
        // j: Question's Answer No. i + 1
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy[i].answers[j] = {answerContent: value};
        this.setState({questionsData: questionsDataCopy, isAnUndoUpdate: false});
    }

    handleDelete(i) {
        // i: Question No. i + 1
        let questionsDataCopy = this.state.questionsData;
        questionsDataCopy = questionsDataCopy.filter((s, _i) => _i != i);
        let newQuestionN = this.state.questionN - 1;
        this.setState({questionsData: questionsDataCopy, questionN: newQuestionN, isAnUndoUpdate: false});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.isAnUndoUpdate) {
            console.log("It's not an undo update");
            return false;
        }
        console.log("It's an undo update");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.needUpdate) { // Number of Questions should change
            let newValue = parseInt(this.state.questionN) + parseInt(nextProps.questionAddN);
            this.setState({questionN: newValue});
            this.props.onFinishChange();
        }
        if (!this.state.isAnUndoUpdate) {
            let undoStackCopy = this.state.undoStack;
            console.log(this.state.questionsData);
            undoStackCopy.push([this.state.questionsData, this.state.questionN]);
            this.setState({undoStack: undoStackCopy, isAnUndoUpdate: true});
        }
    }

    render() {
        let questionsDataCopy = this.state.questionsData;
        let isUpdateNeeded = false;
        [...Array(this.state.questionN)].map((x, i) => {
                if (i >= this.state.questionsData.length) {
                    isUpdateNeeded = true;
                    questionsDataCopy[i] = {
                        questionTitle: '',
                        answers: Array(this.props.answerN).fill({content: ''})
                    };
                }
            }
        );
        if (isUpdateNeeded) this.setState({questionsData: questionsDataCopy});

        const questionList = [...Array(this.state.questionN)].map((x, i) => {
                return <QAFinalQuestion questionI1={i + 1} questionTitle={this.state.questionsData[i].questionTitle} answerN={this.props.answerN} answers={this.state.questionsData[i].answers}
                onTitleChange={this.handleTitleChange.bind(this)} onAnswerChange={this.handleAnswerChange.bind(this)}
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
