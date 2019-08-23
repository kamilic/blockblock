/**
 * @typedef {Object} BBSettings
 * @description Setting for creating Blockblock instance.
 * @property {number} max - Maximum value (for ```percentage(percent)``` method use)
 * @property {Array<string>} stepBlocks - Define different chars for represeting value (0 < value <= 1).
 * @example
 * "▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"
 * 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1
 *
 * 0 < value <= 1/8 => "▏"
 * 1/8 < value <= 2/8 => "▎"
 * ...
 * 7/8 < value <= 1 => "▎"
 *
 */
declare type BBSettings = {
    max: number;
    stepBlocks: Array<string>;
};
interface BB {
    value(v: number): string;
    percentage(p: number): string;
}
declare const conf: BBSettings;
declare function getDecimalPart(value: number): number;
declare function valueResolver(value: number, settings: BBSettings): string;
/**
 * @param {BBSetting} opt
 */
declare function f(opt: BBSettings): BB;
//# sourceMappingURL=index.d.ts.map