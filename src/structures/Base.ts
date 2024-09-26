import { Client } from "src/Client";

/**
 * Represents a WhatsApp data structure
 */
export class Base {

    /**
     * The client that instantiated this
     * @readonly
     */
    readonly client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }

    _patch(data: any) { return data; }
}