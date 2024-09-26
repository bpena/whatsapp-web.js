import { BusinessContact, PrivateContact } from "src/structures";
import { Client } from "../Client";

export class ContactFactory {
    static create(client: Client, data: any) {
        if(data.isBusiness) {
            return new BusinessContact(client, data);
        }

        return new PrivateContact(client, data);
    }
}