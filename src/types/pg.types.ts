export type PGQueryResult = {
    command: string;
    rowCount: number;
    oid: number;
    rows: Array<{ email: string; password: string }>;
    fields: Array<any>;
    _parsers?: Array<Function>;
    _types?: any;
    _notice?: Function;
}
