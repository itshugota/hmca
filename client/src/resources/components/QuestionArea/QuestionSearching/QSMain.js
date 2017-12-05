import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QSTitle} from 'QSTitle'
import {QSContainer} from 'QSContainer'

function getResultQuestionsJSON() {
    return {
        id: '',
        title: '',
        answers: Array(4).fill(''),
        correctAnswer: -1,
        explanation: '',
        isPrivate: -1,
        type: '',
        subject: '',
        author: ''
    }
}

function getInitialState() {
    return {
        content: '',
        type: '',
        subject: '',
        questions: Array(1).fill(getResultQuestionsJSON)
    }
}

export class QSMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = getInitialState();

        this.handleSearchEnter = this.handleSearchEnter.bind(this);
    }

    handleContentSearchChange(value) {
        this.setState({content: value})
    }

    handleTypeSearchChange(value) {
        this.setState({type: value})
    }

    handleSubjectSearchChange(value) {
        this.setState({subject: value})
    }

    handleSearchEnter() {
        let data = JSON.stringify(this.state);
        var jqxhr = $.ajax({
            type: 'POST',
            url: '../../server/php/questionArea/question-ad-search.php',
            contentType: 'application/json',
            dataType: 'json',
            data: data,
        });
        jqxhr.done(function(response) {
            this.setState({questions: response})
            console.log(response);
        }.bind(this));
        jqxhr.fail(function(xhr, textStatus, errorThrown) {
             console.log(<errorThrown></errorThrown> + " " + xhr + " " + textStatus);
             console.warn(xhr.responseText);
         });
        jqxhr.always(function() {
          //console.log(data);
        });
    }

    render() {
        return (
            <section className={"question-main animated " + this.props.display}>
                <QSTitle />
                <QSContainer searchResultQuestions={this.state.questions}
                onContentSearchChange={this.handleContentSearchChange.bind(this)}
                onTypeSearchChange={this.handleTypeSearchChange.bind(this)}
                onSubjectSearchChange={this.handleSubjectSearchChange.bind(this)}
                onSearchEnter={this.handleSearchEnter.bind(this)}
                />
            </section>
        );
    }
}
