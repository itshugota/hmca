import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'

export class QATitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuestionType: 'none',
            addDisableClass: 'disabled',
            selectColor: ''
        }
    }

    handleOptionChange(e) {
        let selectedQuestionType = e.target.value;
        if (selectedQuestionType == 'multiple-choice') {
            this.setState({addDisableClass: ''});
        }
        this.setState({selectedQuestionType: selectedQuestionType});
    }

    handleQuestionAddNChange(e) {
        let value = e.target.value;
        this.props.onChange(e.target.value);
        if (value && value != 0) {
            if (this.state.selectedQuestionType != 'none') {
                this.setState({addDisableClass: ''});
            }
        }
        else {
            this.setState({addDisableClass: 'disabled'});
        }
    }

    handleClick() {
        if (this.state.addDisableClass != 'disabled') {
            if (this.state.selectedQuestionType == 'multiple-choice') {
                this.props.onClick(this.state.selectedQuestionType);
            }
        }
    }

    render() {
        return (
            <div className="grid-x qa-title animated slideInDown">
                <div className="small-1 cell">
                    <i className="fa fa-server" aria-hidden="true"></i>
                </div>
                <div className="small-4 cell">THÊM CÂU HỎI</div>
                <div className="small-7 cell">
                    <div>
                        <button className={"button " + this.state.addDisableClass} onClick={this.handleClick.bind(this)}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <form data-abide="data-abide" novalidate="novalidate">
                            <input type="text" placeholder="Số câu" maxlength="2" required="required" pattern="number" value={this.props.questionAddN} onChange={this.handleQuestionAddNChange.bind(this)} />
                            <select value={this.state.selectedQuestionType} className={"custom-select-box " + this.state.selectColor} required="required" onChange={this.handleOptionChange.bind(this)}>
                                <option value="none" disabled={true}>&#xf059; Dạng câu hỏi</option>
                                <option value="multiple-choice">&#xf009; &nbsp;Trắc nghiệm thường</option>
                                <option value="multiple-choice--pronunciation" disabled={true}>&#xf03a; &nbsp;Trắc nghiệm phát âm</option>
                                <option value="multiple-choice--paragraph" disabled={true}>&#xf15c; &nbsp;Trắc nghiệm đoạn văn</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
