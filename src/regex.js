/**
    Regex charCode Html Entities
    Created by Philippe assis <assis@sophiware.com>
 **/
module.exports = function(input, flags) {

    var charCode = {
        'a': String.fromCharCode(65, 97, 192, 224, 193, 225, 194, 226, 195, 227, 196, 228),
        'e': String.fromCharCode(69, 101, 200, 232, 201, 233, 202, 234, 203, 235),
        'i': String.fromCharCode(73, 105, 204, 236, 205, 237, 206, 238, 207, 239),
        'o': String.fromCharCode(79, 111, 210, 242, 211, 243, 212, 244, 213, 245, 214, 246),
        'n': String.fromCharCode(78, 110, 209, 241),
        'u': String.fromCharCode(85, 117, 217, 249, 218, 250, 219, 251, 220, 252),
        'c': String.fromCharCode(67, 99, 199, 231),
        'y': String.fromCharCode(89, 121, 221, 253, 159, 255)
    }

    var charCodeFull = {
        a: '([' + charCode.a + ']|Aa&Agrave;|&agrave;|&Aacute;|&aacute;|&Acirc;|&acirc;|&Atilde;|&atilde;|&Auml;|&auml;)',
        e: '([' + charCode.e + ']|Ee&Egrave;|&egrave;|&Eacute;|&eacute;|&Ecirc;|&ecirc;|&Euml;|&euml;)',
        i: '([' + charCode.i + ']|Ii&Igrave;|&igrave;|&Iacute;|&iacute;|&Icirc;|&icirc;|&Iuml;|&iuml;)',
        o: '([' + charCode.o + ']|Oo&Ograve;|&ograve;|&Oacute;|&oacute;|&Ocirc;|&ocirc;|&Otilde;|&otilde;|&Ouml;|&ouml;)',
        n: '([' + charCode.n + ']|Nn&Ntilde;|&ntilde;)',
        u: '([' + charCode.u + ']|Uu&Ugrave;|&ugrave;|&Uacute;|&uacute;|&Ucirc;|&ucirc;|&Uuml;|&uuml;)',
        c: '([' + charCode.c + ']|Cc&Ccedil;|&ccedil;)',
        y: '([' + charCode.y + ']|Yy&Yacute;|&yacute;|&yuml;)'
    }

    var exp = input.split('').map((char) => {
        if (charCodeFull[char]) {
            char = charCodeFull[char]
        } else {
            for (var e in charCode) {
                if (charCode[e].indexOf(char) > -1) {
                    char = charCodeFull[e]
                }
            }
        }

        return char;
    }).join('')

    if (typeof flags == 'undefined') {
        flags = 'i'
    }

    if (flags === false) {
		return exp
	} else {
		return RegExp(exp, flags);
	}

}
