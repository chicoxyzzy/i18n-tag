# i18n tag

Simple i18n tagged template strings.
Inspired by [Jack Hsu's blog post](http://jaysoo.ca/2014/03/20/i18n-with-es6-template-strings/).

### Installation

```
npm install --save i18n-tag
```

### Usage

__i18n.js__
```javascript
import createI18n from 'i18n';

const vocabulary_ru = {
  '{0} parrots': '{0} попугаев'
};

export default createI18n(vocabulary_ru);
```

__index.js__
```javascript
import i18n from './i18n';

const n = 38;

console.log(i18n`${n} parrots`);
```