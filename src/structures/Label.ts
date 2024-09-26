import { Client } from "../Client";
import { Base } from "./Base";

/**
 * WhatsApp Business Label information
 */
export class Label extends Base {
    id: string;
    name: string;
    hexColor: string;
    
    /**
     * @param {Base} client
     * @param {object} labelData
     */
    constructor(client: Client, labelData: any){
        super(client);

        if(labelData) {
            this._patch(labelData);
        }
    }

    _patch(labelData: any){
        /**
         * Label ID
         * @type {string}
         */
        this.id = labelData.id;

        /**
         * Label name
         * @type {string}
         */
        this.name = labelData.name;

        /**
         * Label hex color
         * @type {string}
         */
        this.hexColor = labelData.hexColor;
    }
    /**
     * Get all chats that have been assigned this Label
     * @returns {Promise<Array<Chat>>}
     */
    async getChats(){
        return this.client.getChatsByLabelId(this.id);
    }

}