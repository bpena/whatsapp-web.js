declare global {
    interface Window {
        mR: any;
        originalError: any;
        AuthStore: any;
        Debug: { VERSION: string };
        Store: any;
        WWebJS: any;
        compareWwebVersions: (lOperand: string, operator: string, rOperand: string) => boolean;
        injectToFunction: (target, callback) => any;
        onAddMessageCiphertextEvent: (messageModel) => any;
        onAddMessageEvent: (messageModel) => any;
        onAppStateChangedEvent: (state) => any;
        onAppStateHasSyncedEvent: () => any;
        onAuthAppStateChangedEvent: (event) => any;
        onArchiveChatEvent: (chatModel, currState, prevState) => any;
        onBatteryStateChangedEvent: (event) => any;
        onChangeMessageEvent: (messageModel) => any;
        onChangeMessageTypeEvent: (messageModel) => any;
        onChatUnreadCountEvent: (chat) => any;
        onEditMessageEvent: (messageModel, newBody, prevBody) => any;
        onIncomingCall: (call) => any;
        onLogoutEvent: () => any;
        onMessageAckEvent: (msg, ack) => any;
        onMessageMediaUploadedEvent: (messageModel) => any;
        onOfflineProgressUpdateEvent: (event) => any;
        onPollVoteEvent: (pollVoteModel) => any;
        onQRChangedEvent: (qrEvent) => any;
        onReaction: (args) => any;
        onRemoveChatEvent: (chatModel) => any;
        onRemoveMessageEvent: (messageModel) => any;
    }
}

export { }; // Esto convierte el archivo en un módulo y permite usar 'declare global'