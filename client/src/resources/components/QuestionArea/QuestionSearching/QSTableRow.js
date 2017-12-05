import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QSTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete() {
        this.props.onDelete(this.props.number);
    }

    handleEdit() {
        this.props.onEdit(this.props.id);
    }

    render() {
        return (
            <div>
                <div className="grid-x animated slideInDown search-table">
                    <div className="small-1 cell">
                      {this.props.number}
                    </div>
                    <div className="small-4 cell">
                      {this.props.questionTitle}
                    </div>
                    <div className="small-2 cell">
                      {this.props.questionType}
                    </div>
                    <div className="small-1 cell">
                      {this.props.questionSubject}
                    </div>
                    <div className="small-2 cell">
                      {this.props.questionAuthor}
                    </div>
                    <div className="small-2 cell qs-actions">
                        <a href="javascript:void(0)" className="button green"><i className="fa fa-cart-plus"></i></a>
                        <a href="javascript:void(0)" className="button" onClick={this.handleEdit.bind(this)}><i className="fa fa-pencil-square-o"></i></a>
                        <a href="javascript:void(0)" className="button red" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i></a>
                    </div>
                </div>

            </div>
        );
    }
}
