import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QAQuestionAnswer extends React.Component {
    handleChange(e) {
        this.props.onAnswerChange(this.props.questionI1 - 1, this.props.questionAnswerI, e.target.value);
    }

    render() {
        return (
            <div className="grid-x grid-padding-x question-answer">
              <div className="small-12 cell">
                  <label>
                      <span>{this.props.title}</span>
                      <input type="radio" className="option-input radio" name={this.props.questionI1} id={this.props.id}/>
                      <label for={this.props.id}>Đáp án đúng</label>
                      <input type="text" onChange={this.handleChange.bind(this)} value={this.props.value} required />
                      <span className="form-error">
                          {this.props.warning}
                      </span>
                  </label>
              </div>
            </div>
        );
    }
}
