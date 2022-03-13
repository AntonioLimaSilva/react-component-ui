class ClientData {

    constructor() {
        this.client = {}
        this.clients = [];
        this._subscribes = [];
        this._subscribesEdit = [];
    }

    add(newClient) {
        this.delete(newClient);

        this.clients.push(newClient);

        this._notify();
    }

    delete(client) {
        const index = this.clients.findIndex(cl => cl.id === client.id);

        if (index !== -1) {
            this.clients.splice(index, 1);
        }
    }

    edit(editClient) {
        this.client = editClient;

        this._notifyEdit();
    }

    subscribe(func) {
        this._subscribes.push(func);
    }

    subscribeEdit(func) {
        this._subscribesEdit.push(func);
    }

    unsubscribe(func) {
        this._subscribes = this._subscribes.filter(f => f !== func);
    }

    unsubscribeEdit(func) {
        this._subscribesEdit = this._subscribesEdit.filter(f => f !== func);
    }

    _notify() {
        this._subscribes.forEach(func => func(this.clients));
    }

    _notifyEdit() {
        this._subscribesEdit.forEach(func => func(this.client));
    }
}

export default ClientData;
