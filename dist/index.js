"use strict";
var conf = {
    max: 100,
    stepBlocks: ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"]
};
function getDecimalPart(value) {
    var part = value.toString().split(".")[1];
    return part ? parseFloat("0." + part) : 0;
}
function valueResolver(value, settings) {
    var stepBlocks = settings.stepBlocks;
    var fullSteps = Math.floor(value);
    var fracStep = getDecimalPart(value);
    var lengthOfStepBlocks = stepBlocks.length;
    var onestepChar = stepBlocks[lengthOfStepBlocks - 1] || "";
    return Array(fullSteps)
        .fill(0)
        .map(function () { return onestepChar; })
        .concat(fracStep > 1 / lengthOfStepBlocks
        ? stepBlocks.reduce(function (pre, value, index) {
            return (index + 1) / lengthOfStepBlocks <= fracStep ? value : pre;
        })
        : [""])
        .join("");
}
/**
 * @param {BBSetting} opt
 */
function f(opt) {
    var settings = Object.assign({}, conf, opt);
    return {
        value: function (value) {
            return valueResolver(value, settings);
        },
        percentage: function (percent) {
            var max = settings.max;
            return valueResolver((max * percent) / 100, settings);
        }
    };
}
module.exports = f;
//# sourceMappingURL=index.js.map