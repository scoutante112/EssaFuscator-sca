import { option } from "./types";
export declare class EssaFuscator implements option {
    apikey: string;
    constructor(apikey: string);
    obfuscate(script: string, watermark: string, encodingTypes: "emoji" | "arabic", callback: FileCallback): void;
}
//# sourceMappingURL=index.d.ts.map