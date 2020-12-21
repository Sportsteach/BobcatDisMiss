import React, { Component } from 'react'
import axios from 'axios'

export default class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTeacher = this.onChangeTeacher.bind(this);
        this.onChangeSiblings = this.onChangeSiblings.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            teacher: '',
            siblings: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeTeacher(e) {
        this.setState({
            teacher: e.target.value
        });
    }
    onChangeSiblings(e) {
        this.setState({
            siblings: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            teacher: this.state.teacher,
            siblings: this.state.siblings
        }
        axios.post('https://dismissle.herokuapp.com/allstudents', student)
            .then(res => console.log(window.location = `yournumber/${res.data._id}`));
        this.setState({
            firstName: '',
            lastName: '',
            teacher: '',
            siblings: ''
        })
    }


    render() {
        return (
            <div>
                <h3>Create New Car Rider Family</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Teacher: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.teacher}
                            onChange={this.onChangeTeacher}
                        />
                    </div>
                    <div className="form-group">
                        <label>Siblings: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.siblings}
                            onChange={this.onChangeSiblings}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Car Rider Family" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}