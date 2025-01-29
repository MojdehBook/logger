declare const _default: {
    base: {
        level: string;
        defaultMeta: {
            app: string;
        };
        exitOnError: boolean;
        format: import("logform").Format;
    };
    transports: {
        allToFile: {
            filename: string;
        };
        errToFile: {
            level: string;
            filename: string;
            handleExceptions: boolean;
            handleRejections: boolean;
        };
        console: {
            format: import("logform").Format;
            handleExceptions: boolean;
            handleRejections: boolean;
        };
    };
};
export default _default;
