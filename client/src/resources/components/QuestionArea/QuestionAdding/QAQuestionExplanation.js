import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QAQuestionExplanation extends React.Component {
    handleExplanationChange(e) {
        this.props.onChange(this.props.questionI1 - 1, e.target.value);
    }

    render() {
        return (
            <div class="grid-x grid-padding-x question-title">
              <div class="small-12 cell">
                <label>
                  <span>Giải thích</span>
                  <textarea type="text" onChange={this.handleExplanationChange.bind(this)} placeholder="Nhập giải thích cho câu hỏi ở đây" value={this.props.questionExplanation} />
                  <span className="form-error">
                    Không được để trống giải thích câu hỏi!
                  </span>
                </label>
                <p class="help-text"></p>
              </div>
            </div>
        );
    }
}
