import React from 'react';
import axios from 'axios';
import FormData from 'form-data';

class SinglePhotoImportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
                let data = new FormData;
                data.append('file', event.target.files[0]);

                axios.post('http://localhost:3000/new', data)
                .then((response) => {
                    console.log(response);
                })
                .catch (function (error) {
                    console.log(error);
                });
        // this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert(this.state.value);
        // event.preventDefault();

        let data = new FormData;
        data.append('file', event.target.files[0]);

        axios.post('http://localhost:3000/new', data, {"Access-Control-Allow-Origin": "*"})
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
                    <input type="file" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    };
}

export default SinglePhotoImportForm;
