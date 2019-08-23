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
type BBSettings = {
  max: number;
  stepBlocks: Array<string>;
};

interface BB {
  value(v: number): string;
  percentage(p: number): string;
}

const conf: BBSettings = {
  max: 100,
  stepBlocks: ['▏', '▎', '▍', '▌', '▋', '▊', '▉', '█'],
};

function getDecimalPart(value: number): number {
  const part = value.toString().split('.')[1];
  return part ? parseFloat(`0.${part}`) : 0;
}

function valueResolver(value: number, settings: BBSettings): string {
  const { stepBlocks } = settings;
  const fullSteps = Math.floor(value);
  const fracStep = getDecimalPart(value);
  const lengthOfStepBlocks = stepBlocks.length;
  const onestepChar = stepBlocks[lengthOfStepBlocks - 1] || '';

  return Array(fullSteps)
    .fill(0)
    .map(() => onestepChar)
    .concat(
      fracStep > 1 / lengthOfStepBlocks
        ? stepBlocks.reduce((pre, value, index) => {
          return (index + 1) / lengthOfStepBlocks <= fracStep ? value : pre;
        })
        : ['']
    )
    .join('');
}

/**
 * @description Factory
 * @param {BBSetting} opt
 */
function f(opt: BBSettings): BB {
  const settings = Object.assign({}, conf, opt);

  return {
    value(value: number): string {
      return valueResolver(value, settings);
    },

    percentage(percent: number): string {
      const { max } = settings;
      return valueResolver((max * percent) / 100, settings);
    },
  };
}

module.exports = f;
