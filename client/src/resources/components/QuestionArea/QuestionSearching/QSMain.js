import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAreaSCSS from 'QuestionArea.scss'
import {QSTitle} from 'QSTitle'
import {QSContainer} from 'QSContainer'
import {Question} from 'QuestionClass'

function getInitialState() {
    return {
        searchInfo: {
            content: '',
            type: '',
            subject: ''
        },
        questions: Array(1).fill((new Question()).getJSONData())
    }
}

export class QSMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = getInitialState();
        this.handleSearchEnter = this.handleSearchEnter.bind(this);
    }

    handleContentSearchChange(value) {
        let searchInfoCopy = this.state.searchInfo;
        searchInfo.content = value;
        this.setState({searchInfo: searchInfoCopy});
    }

    handleTypeSearchChange(value) {
        let searchInfoCopy = this.state.searchInfo;
        searchInfo.type = value;
        this.setState({searchInfo: searchInfoCopy});
    }

    handleSubjectSearchChange(value) {
        let searchInfoCopy = this.state.searchInfo;
        searchInfo.subject = value;
        this.setState({searchInfo: searchInfoCopy});
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
