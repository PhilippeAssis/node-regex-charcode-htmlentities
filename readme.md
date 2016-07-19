#Regex CharCode HtmlEntities Generator

Inspired by [diacritics-regex](https://www.npmjs.com/package/diacritic-regex) and [htmlentities](https://www.npmjs.com/package/htmlentities), create a regex with the term indicated by changing each character for a regex expression with variaves of charCode and Html Entities

```javascript
var regex = require('../src/regex.js')

console.log(regex('maçã'))
/*
/m([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atilde;|&atilde;|&Auml;|&auml;)
([CcÇç]|Cc&Ccedil;|&ccedil;)([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atild
e;|&atilde;|&Auml;|&auml;)/i
*/

console.log(regex('maçã','g'))
/*
/m([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atilde;|&atilde;|&Auml;|&auml;)
([CcÇç]|Cc&Ccedil;|&ccedil;)([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atild
e;|&atilde;|&Auml;|&auml;)/g
*/

console.log(regex('maçã', false))
/*
m([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atilde;|&atilde;|&Auml;|&auml;)
([CcÇç]|Cc&Ccedil;|&ccedil;)([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atild
e;|&atilde;|&Auml;|&auml;)
*/
```
