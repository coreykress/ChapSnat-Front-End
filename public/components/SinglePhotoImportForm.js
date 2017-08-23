import React from 'react';
import axios from 'axios';
import FormData from 'form-data';

class SinglePhotoImportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.data = new FormData;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let file = event.target.files[0];
        this.state.value = file.name;
        console.log(file.name);
        this.data.append('file', file);
    }

    handleSubmit(event) {
        axios.post('http://localhost:3000/new', this.data)
        .then((response) => {
            console.log(response);
        })
        .catch (function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Photo:
                    <input type="file" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    };
}

export default SinglePhotoImportForm;
