import { Contact } from './Contact';

/**
 * Represents a Business Contact on WhatsApp
 * @extends {Contact}
 */
export class BusinessContact extends Contact {
    businessProfile: any;
    _patch(data: any) {
        /**
         * The contact's business profile
         */
        this.businessProfile = data.businessProfile;

        return super._patch(data);
    }

}