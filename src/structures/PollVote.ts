import { Client } from "../Client";
import { Base } from "./Base";
import { Message } from "./Message";

interface SelectedPollOption {
    id: number;
    name: string;
}

/**
 * Represents a Poll Vote on WhatsApp
 * @extends {Base}
 */
export class PollVote extends Base {
    voter: string;
    selectedOptions: SelectedPollOption[];
    interractedAtTs: number;
    parentMessage: Message;

    constructor(client: Client, data: any) {
        super(client);

        if (data) this._patch(data);
    }

    _patch(data: any) {
        /**
         * The person who voted
         * @type {string}
         */
        this.voter = data.sender;

        /**
         * The selected poll option(s)
         * If it's an empty array, the user hasn't selected any options on the poll,
         * may occur when they deselected all poll options
         * @type {SelectedPollOption[]}
         */
        this.selectedOptions =
            data.selectedOptionLocalIds.length > 0
                ? data.selectedOptionLocalIds.map((e) => ({
                    name: data.parentMessage.pollOptions.find((x) => x.localId === e).name,
                    localId: e
                }))
                : [];

        /**
         * Timestamp the option was selected or deselected at
         * @type {number}
         */
        this.interractedAtTs = data.senderTimestampMs;

        /**
         * The poll creation message associated with the poll vote
         * @type {Message}
         */
        this.parentMessage = new Message(this.client, data.parentMessage);

        return super._patch(data);
    }
}

module.exports = PollVote;
