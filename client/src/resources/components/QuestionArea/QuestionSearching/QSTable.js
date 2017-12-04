import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QSTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="grid-x animated slideInDown">
                    KẾT QUẢ TÌM KIẾM
                </div>
                <div className="grid-x animated slideInDown search-table">
                    <div className="small-1 cell">
                      TT
                    </div>
                    <div className="small-6 cell">
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
                </div>
            </div>
        );
    }
}
