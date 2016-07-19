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

console.log(regex('maçã',false))
/*
m([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atilde;|&atilde;|&Auml;|&auml;)
([CcÇç]|Cc&Ccedil;|&ccedil;)([AaÀàÁáÂâÃãÄä]|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atild
e;|&atilde;|&Auml;|&auml;)
*/
