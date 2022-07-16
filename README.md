
# Lord of the rings SDK

A This is an sdk for lord of the rings movies


## Installation

Install this sdk with npm or yarn

```bash
  npm install chukwudi-sdk --save-dev
  or
  yarn add chukwudi-sdk
```
    
## Usage/Examples

```javascript
const sdk = require('chukwudi-sdk')

const { books } = sdk;

await books.run();
```

- If you want to limit your request you can chain the limit function

```javascript
await books.limit(100).run();
```

- For request that require API key 
```javascript
const sdk = require('chukwudi-sdk')

const { chapters } = sdk;

chapters.init(apikey);
await chapters.run();
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```