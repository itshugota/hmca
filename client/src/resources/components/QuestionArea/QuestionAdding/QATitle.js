import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QATitle extends React.Component {
    render() {
        return (<div className="grid-x qa-title animated slideInDown">
            <div className="small-1 cell">
                <i className="fa fa-server" aria-hidden="true"></i>
            </div>
            <div className="small-4 cell">THÊM CÂU HỎI</div>
            <div className="small-7 cell">
                <div>
                    <button className="button" onClick={this.props.onClick}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <form data-abide="data-abide" novalidate="novalidate">
                        <input type="text" placeholder="Số câu" maxlength="3" required="required" pattern="number" value={this.props.qNumAdd} onChange={this.props.onChange}/>
                        <select id="select" className="custom-select-box" required="required" >
                            <option value="" disabled="disabled" selected="selected">&#xf059; Dạng câu hỏi</option>
                            <option value="multiple-choice">&#xf009; &nbsp;Trắc nghiệm thường</option>
                            <option value="multiple-choice--pronunciation">&#xf03a; &nbsp;Trắc nghiệm phát âm</option>
                            <option value="multiple-choice--paragraph">&#xf15c; &nbsp;Trắc nghiệm đoạn văn</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>);
    }
}
