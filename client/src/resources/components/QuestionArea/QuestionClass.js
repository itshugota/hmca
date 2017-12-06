class Question {
    constructor() {
        // A '_' means that the property is private (?)
        this._id = '';
        this._author = '';
        this._title = '';
        this._answers = Array(4).fill('');
        this._correctAnswer = 0;
        this._explanation = '';
        this._subject = '';
        this._type = '';
        this._isPrivate = 1; // Each question is private by default
        this.getJSONData = this.getJSONData.bind(this);
        this.setFromJSONData = this.setFromJSONData.bind(this);
    }

    getJSONData() {
        let jsonData = {
            id: this._id,
            author: this._author,
            title: this._title,
            answers: this._answers,
            correctAnswer: this._correctAnswer,
            explanation: this._explanation,
            subject: this._explanation,
            type: this._type,
            isPrivate: this._isPrivate
        }
        return jsonData;
    }

    setFromJSONData(jsonData) {
        if (jsonData.hasOwnProperty('id')) this._id = jsonData.id;
        if (jsonData.hasOwnProperty('author')) this._author = jsonData.author;
        if (jsonData.hasOwnProperty('title')) this._title = jsonData.title;
        if (jsonData.hasOwnProperty('answers')) this._answers = jsonData.answers;
        if (jsonData.hasOwnProperty('correctAnswer')) this.correctAnswer = jsonData.correctAnswer;
        if (jsonData.hasOwnProperty('explanation')) this._explanation = jsonData.explanation;
        if (jsonData.hasOwnProperty('subject')) this._subject = jsonData.subject;
        if (jsonData.hasOwnProperty('type')) this._type = jsonData.type;
        if (jsonData.hasOwnProperty('isPrivate')) this._isPrivate = jsonData.isPrivate;
    }

    get id() {
        return this._id;
    }

    set id(newID) {
        this._id = newID;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get answers() {
        return this._answers;
    }

    set answers(newAnswers) {
        this._answers = newAnswers;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    set correctAnswer(newCorrectAnswer) {
        this._correctAnswer = newCorrectAnswer;
    }

    get explanation() {
        return this._explanation;
    }

    set explanation(newExplanation) {
        this._explanation = newExplanation;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }

    get type() {
        return this._type;
    }

    set type(newType) {
        this._type = newType;
    }

    get isPrivate() {
        return this._isPrivate;
    }

    set isPrivate(newIsPrivate) {
        if (newIsPrivate !== 0 && newIsPrivate !== 1) {
            this._isPrivate = 1;
        } else {
            this._isPrivate = newIsPrivate;
        }
    }
}
