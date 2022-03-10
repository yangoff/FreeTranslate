﻿### Features

- Translate to any lang, all free;
- To change lang main go to translator.js and change method

# Translate API

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png)

**How to**

### Links

By @yangoff

### Pre API Translate Free

#### Install

`$ npm install`

#### Start

`$ nodemon start`

#### To change lang base, change attribute 'PT' in

```javascript
module.exports.translater = async (words) => {
  try {
    const res = await translate(words, { to: "pt" });
    console.log(res.from.language.iso);
    return res.text;
  } catch (error) {
    console.error("LOGANDO : ", error);
    return error;
  }
};
```
    

### Functions


| Function name | Description                    |
| ------------- | ------------------------------ |
| `translater(word :string)`      | Async function to translate.       |

| Method                | Params    |Headers      |
| -------------         | ----------|-------------|
| `GET /translate`      |  `?text=` |`auth:`      |


#### Enjoy
##### Using @vitalets/google-translate-api
##### This fork of matheuss/google-translate-api
