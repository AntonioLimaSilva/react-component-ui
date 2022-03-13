import {Component} from "react";

class ClientTable extends Component {

    constructor(props) {
        super(props);
        this.state = { clients: [] }
        this._listClients = this._listClients.bind(this); // passando a mesma referencia para os metodos (componentDidMount,componentWillUnmount)
    }

    componentDidMount() {
        this.props.subscribe(this._listClients);
    }

    componentWillUnmount() {
        this.props.unsubscribe(this._listClients);
    }

    _listClients(clients) {
        this.setState({ ...this.state, clients })
    }

    _delete(client) {
        const clients = [...this.state.clients];

        const index = clients.indexOf(client);

        clients.splice(index, 1);

        this.setState({...this.state, clients})

        this.props.delete(client);
    }

    _edit(client) {
        this.props.edit(client);
    }

    render() {
        return (
            <div className="table__main">
                <h1>Table of Clients register</h1>
                <table>
                    <thead>
                        <tr className="header_table">
                            <th className="column__name">Name</th>
                            <th className="column__age">Age</th>
                            <th className="column__email">E-mail</th>
                            <th className="column__actions">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.clients.map((client, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{client.name}</td>
                                        <td>{client.age}</td>
                                        <td>{client.email}</td>
                                        <td>
                                            <button className="button__edit" onClick={() => this._edit(client)}>Edit</button>
                                            <button className="button__delete" onClick={() => this._delete(client)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ClientTable;
