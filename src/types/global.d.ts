declare global {
    interface Window {
        mR: any;
        AuthStore: any;
        Debug: { VERSION: string };
        Store: any;
        WWebJS: any;
        compareWwebVersions: (lOperand: string, operator: string, rOperand: string) => boolean;
        injectToFunction: (target, callback) => void;
    }
}

export { }; // Esto convierte el archivo en un módulo y permite usar 'declare global'