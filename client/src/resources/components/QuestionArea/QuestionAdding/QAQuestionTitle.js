import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QAQuestionTitle extends React.Component {
    handleTitleChange(e) {
        this.props.onChange(this.props.questionI1 - 1, e.target.value);
    }

    render() {
        return (
            <div class="grid-x grid-padding-x question-title">
              <div class="small-12 cell">
                <label>
                  <span>Đề câu hỏi</span>
                  <textarea type="text" onChange={this.handleTitleChange.bind(this)} placeholder="Nhập đề câu hỏi ở đây" value={this.props.questionTitle} />
                  <span className="form-error">
                    Không được để trống đề câu hỏi!
                  </span>
                </label>
                <p class="help-text">Thử nhập đề câu hỏi theo mẫu sau: "She is _____ kindest woman I have ever met."</p>
              </div>
            </div>
        );
    }
}
