import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QSTitle} from "QSTitle"
import {QSTable} from "QSTable"

export class QSContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleContentSearchChange(e) {
        this.props.onContentSearchChange(e.target.value);
    }

    handleTypeSearchChange(e) {
        this.props.onTypeSearchChange(e.target.value);
    }

    handleSubjectSearchChange(e) {
        this.props.onSubjectSearchChange(e.target.value);
    }

    handleSearchEnter(e) {
        e.preventDefault();
        this.props.onSearchEnter();
    }

    render() {
        return (
            <form className="question-form search-form" data-abide novalidate>
              <div className="grid-x">
                  <div className="small-3 medium-1 cell">
                    <span>Nội dung câu hỏi</span>
                  </div>
                <div className="small-9 medium-11 cell">
                  <input type="text" onChange={this.handleContentSearchChange.bind(this)} placeholder="Nhập nội dung câu hỏi cần tìm kiếm ở đây" value={this.props.questionTitle} required />
                </div>
              </div>
              <div className="grid-x">
                  <div className="small-3 medium-1 cell">
                    <span>Dạng câu hỏi</span>
                  </div>
                <div className="small-9 medium-11 cell">
                  <input type="text" onChange={this.handleTypeSearchChange.bind(this)} placeholder="Nhập dạng câu hỏi cần tìm kiếm ở đây" value={this.props.questionTitle} required />
                </div>
              </div>
              <div className="grid-x">
                  <div className="small-3 medium-1 cell">
                    <span>Môn</span>
                  </div>
                <div className="small-9 medium-11 cell">
                  <input type="text" onChange={this.handleSubjectSearchChange.bind(this)} placeholder="Nhập môn cho câu hỏi cần tìm kiếm ở đây" value={this.props.questionTitle} required />
                </div>
              </div>
              <div className="grid-x">
                  <fieldset className="small-4 cell animated bounceInRight">
                    <button className="button search-button" type="submit" value="Submit" onClick={this.handleSearchEnter.bind(this)}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        Tìm kiếm
                    </button>
                  </fieldset>
              </div>
              <QSTable searchResultQuestions={this.props.searchResultQuestions}
              research={() => this.props.onSearchEnter()}/>
            </form>
        );
    }
}
