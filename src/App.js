import './App.css';
import { Component } from "react";
import ClientForm from "./components/ClientForm";
import ClientTable from "./components/ClientTable";
import ClientData from "./data/ClientData";

class App extends Component {

    constructor(props) {
        super(props);
        this.clientService = new ClientData();
    }

    render() {
        return (
            <main className="container__main">
                <ClientForm add={ this.clientService.add.bind(this.clientService) }
                            subscribe={ this.clientService.subscribeEdit.bind(this.clientService) }
                            unsubscribe={ this.clientService.unsubscribeEdit.bind(this.clientService) }
                />

                <ClientTable edit={ this.clientService.edit.bind(this.clientService) }
                             delete={ this.clientService.delete.bind(this.clientService) }
                             subscribe={ this.clientService.subscribe.bind(this.clientService) }
                             unsubscribe={ this.clientService.unsubscribe.bind(this.clientService) }
                />
            </main>
        );
    }
}

export default App;
