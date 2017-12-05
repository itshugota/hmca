require("foundation-sites/dist/css/foundation.css");

import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QSTableRow} from 'QSTableRow'
import {QSConfirmingDelete} from 'QSConfirmingDelete'
import {QSUpdatingQuestion} from 'QSUpdatingQuestion'

export class QSTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteAt: -1,
            id: ''
        }
    }

    handleDelete(i) {
        this.setState({deleteAt: i, deleteID: this.props.searchResultQuestions[i - 1].id});
        $('#delete-confirm').foundation('open');
    }

    handleEdit(id) {
        $('#update-question').foundation('open');
    }

    render() {
        const questionList = this.props.searchResultQuestions.map((question, i) => {
            return <QSTableRow id={this.state.id} number={i + 1} questionTitle={question.title} questionType={question.type}
                    questionSubject={question.subject} questionAuthor={question.author}
                    questionAnswers={question.answers} questionCorrectAnswer={question.correctAnswer}
                    questionIsPrivate={question.isPrivate} questionExplanation={question.explanation}
                    onDelete={this.handleDelete.bind(this)} onEdit={this.handleEdit.bind(this)}/>
        });

        return (
            <div>
                <QSConfirmingDelete deleteAt={this.state.deleteAt} deleteID={this.state.id} research={() => this.props.research()}/>
                <QSUpdatingQuestion id={this.state.id} />
                <div className="grid-x animated slideInDown">
                    KẾT QUẢ TÌM KIẾM
                </div>
                <div className="grid-x animated slideInDown search-table">
                    <div className="small-1 cell">
                      TT
                    </div>
                    <div className="small-4 cell">
                      Nội dung câu hỏi
                    </div>
                    <div className="small-2 cell">
                      Dạng
                    </div>
                    <div className="small-1 cell">
                      Môn
                    </div>
                    <div className="small-2 cell">
                      Tác giả
                    </div>
                    <div className="small-2 cell">
                      Thao tác
                    </div>
                </div>
                {questionList}
            </div>
        );
    }
}
