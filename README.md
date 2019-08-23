# blockblock
Representing values use chars.

Usage
### default
```javascript
const BB = require('blockblock');
const b = BB();
b.value(10); // ██████████
b.value(10.1); // ██████████
b.value(10.126) // ██████████
b.value(10.25); // ██████████▎
b.percentage(10) // ██████████
```

### custom emoji blockblock
```javascript
const BB = require('blockblock');
const b = BB();
b.value(10); // ██████████
b.value(10.1); // ██████████
b.value(10.126) // ██████████
b.value(10.25); // ██████████▎
b.percentage(10) // ██████████
```