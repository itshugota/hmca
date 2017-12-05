import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {NotificationContainer, NotificationManager} from 'react-notifications'

export class QSConfirmingDelete extends React.Component {
    constructor(props) {
        super(props);

        this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    }

    handleCancel() {
        $('#delete-confirm').foundation('close');
    }

    handleConfirmDelete() {
        let tmpJSON = {
            id: this.props.deleteID
        };
        let data = JSON.stringify(tmpJSON);
        var jqxhr = $.ajax({
            type: 'POST',
            url: '../../server/php/questionArea/question-delete.php',
            contentType: 'application/json',
            dataType: 'json',
            data: data,
        });
        jqxhr.done(function(response) {
            console.log(response);
        });
        jqxhr.fail(function(xhr, textStatus, errorThrown) {
             console.log(<errorThrown></errorThrown> + " " + xhr + " " + textStatus);
             console.warn(xhr.responseText);
         });
        jqxhr.always(function() {
            this.props.research();
        }.bind(this));
        NotificationManager.success("", "Xóa câu hỏi thành công!", 2000);
        $('#delete-confirm').foundation('close');
    }

    render() {
        return (
            <div className="reveal question-modal" id="delete-confirm" data-reveal>
                <img className="header-logo" src="images/logo.svg"/>
                <h4>Bạn có chắc chắn muốn xóa câu hỏi này?</h4>
                <div className="grid-x search-table">
                    <div className="small-6 cell">
                        <button className="button" onClick={this.handleConfirmDelete.bind(this)}>
                            Xác nhận
                        </button>
                    </div>
                    <div className="small-6 cell align-right">
                        <button className="button" onClick={this.handleCancel.bind(this)}>
                            Hủy bỏ
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
