import { Client } from "../Client";
import { Base } from "./Base";

export class ProductMetadata extends Base {
    id: any;
    retailer_id: any;
    name?: string;
    description?: string;

    constructor(client: Client, data: any) {
        super(client);

        if (data) this._patch(data);
    }

    _patch(data: any) {
        /** Product ID */
        this.id = data.id;
        /** Retailer ID */
        this.retailer_id = data.retailer_id;
        /** Product Name  */
        this.name = data.name;
        /** Product Description */
        this.description = data.description;

        return super._patch(data);
    }

}