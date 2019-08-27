[![npm version](https://badge.fury.io/js/%40kamilic%2Fblockblock.svg)](https://badge.fury.io/js/%40kamilic%2Fblockblock) [![Build Status](https://dev.azure.com/kamilic/blockblock/_apis/build/status/kamilic.blockblock?branchName=master)](https://dev.azure.com/kamilic/blockblock/_build/latest?definitionId=1&branchName=master) [![codecov](https://codecov.io/gh/kamilic/blockblock/branch/master/graph/badge.svg)](https://codecov.io/gh/kamilic/blockblock)
# blockblock
Representing values use chars.

## Usage
### install
```bash
npm install @kamilic/blockblock
```

### default
```javascript
const BB = require('@kamilic/blockblock');
const b = BB();
b.value(10); // ██████████
b.value(10.1); // ██████████
b.value(10.126); // ██████████
b.value(10.25); // ██████████▎

b.percentage(10); // ██████████
```

### custom emoji blockblock
```javascript
const F = require('@kamilic/blockblock');
const b = F({
    max: 12,
    stepBlocks: ["😞", "😔", "😟", "😢", "😑", "😐", "😏", "🙂", "😀", "😆"]
});
b.value(10); // "😆😆😆😆😆😆😆😆😆😆"
b.value(10.125); // "😆😆😆😆😆😆😆😆😆😆😞"
b.value(10.2); // "😆😆😆😆😆😆😆😆😆😆😔"

b.precentage(100) // "😆😆😆😆😆😆😆😆😆😆😆😆"
```

## Options
```javascript
const F = require('@kamilic/blockblock');
const bb = F({
    // Maximum value
    max: 100,
    // Define different chars for represeting value (0 < value <= 1)
    // "▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"
    // 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 8/8
    stepBlocks: ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"]
});
```

## Methods
- `bb.value(value: number): string` - get blockblock string.
- `bb.percentage(percent: number): string` - get blockblock string using percentage based on provided `max`.
