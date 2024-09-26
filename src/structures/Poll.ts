interface PollSendOptions {
    allowMultipleAnswers?: boolean;
    messageSecret?: Array<number>;
}

/** Represents a Poll on WhatsApp */
export class Poll {
    pollName: string;
    pollOptions: Array<{name: string, localId: number}>
    options: PollSendOptions;

    /**
     * @param {string} pollName
     * @param {Array<string>} pollOptions
     * @param {PollSendOptions} options
     */
    constructor(pollName: string, pollOptions: Array<string>, options: PollSendOptions = {}) {
        /**
         * The name of the poll
         * @type {string}
         */
        this.pollName = pollName.trim();

        /**
         * The array of poll options
         * @type {Array.<{name: string, localId: number}>}
         */
        this.pollOptions = pollOptions.map((option, index) => ({
            name: option.trim(),
            localId: index
        }));

        /**
         * The send options for the poll
         * @type {PollSendOptions}
         */
        this.options = {
            allowMultipleAnswers: options.allowMultipleAnswers === true,
            messageSecret: options.messageSecret
        };
    }
}
