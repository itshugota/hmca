import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QSTitle} from "QSTitle"
import {QSContainer} from "QSContainer"

export class QSMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchContent: ''
        }
    }

    handleSearchChange(value) {
        this.setState({searchContent: value})
    }

    render() {
        return (
            <section className={"question-main animated " + this.props.display}>
                <QSTitle />
                <QSContainer onSearchChange={this.handleSearchChange.bind(this)}/>
            </section>
        );
    }
}
