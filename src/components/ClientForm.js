import React, {Component} from "react";
import {v4 as uuidv4} from "uuid";

class ClientForm extends Component {

    initialState = {
        id: "",
        name: "",
        age: 0,
        email: ""
    }

    constructor(props) {
        super(props);
        this.state = this.initialState
    }

    componentDidMount() {
        this.props.subscribe(this._setClientForm.bind(this))
    }

    _setClientForm(client) {
        this.setState({ ...this.state, id: client.id, name: client.name, age: client.age, email: client.email })
    }

    handleSubmit(e) {
        e.preventDefault()

        const st = this.state;

        if (!st.id) {
            st.id = uuidv4();
        }

        this.props.add(st);

        this.setState(this.initialState);
    }

    validate() {
        return this.state.name.length <= 0 || this.state.email.length <= 0 || this.state.age < 0;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h1>Form register client</h1>
                <div className="field-client">
                    <label>Name: </label>
                    <input
                        placeholder="Name of client"
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({ ...this.state, name: e.target.value })} />
                </div>

                <div className="field-client">
                    <label>Age: </label>
                    <input
                        placeholder="Age of client"
                        type="number"
                        value={this.state.age}
                        onChange={e => this.setState({ ...this.state, age: parseInt(e.target.value) })}/>
                </div>

                <div className="field-client">
                    <label>Email: </label>
                    <input
                        placeholder="Email of client"
                        type="email"
                        value={this.state.email}
                        onChange={e => this.setState({ ...this.state, email: e.target.value })}/>
                </div>

                <div className="button-client">
                    <input
                        type="submit"
                        value="Send"
                        disabled={ this.validate() } />
                </div>

            </form>
        )
    }
}

export default ClientForm
