import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QAForm} from 'QAForm'
import {QATitle} from "QATitle"

export class QAMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needUpdate: false,
            questionAddN: 1,
        }
        this.handleNOQChange = this.handleNOQChange.bind(this);
    }

    handleClick(selectedQuestionType) {
        this.setState({needUpdate: true});
    }

    handleNOQChange(value) {
        this.setState({questionAddN: value});
    }

    handleDataChange() {
        this.setState({needUpdate: false});
    }

    render() {
        return (
            <section className={"question-main animated " + this.props.display}>
                <QATitle questionAddN={this.state.questionAddN}
                 onClick={() => this.handleClick()} onChange={this.handleNOQChange} />
                <QAForm needUpdate={this.state.needUpdate} answerN={4} questionAddN={this.state.questionAddN}
                onFinishChange={this.handleDataChange.bind(this)}/>
            </section>
        );
    }
}
