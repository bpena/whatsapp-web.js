import { GroupChat, PrivateChat } from "src/structures";
import { Client } from "../Client";

export class ChatFactory {
    static create(client: Client, data: any) {
        if(data.isGroup) {
            return new GroupChat(client, data);
        }

        return new PrivateChat(client, data);
    }
}