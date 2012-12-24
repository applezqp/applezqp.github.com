/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    CryptoJS.hotp = function(key, counter, format) {

		function hotp_movingfactortohex(count) {
			// count is the moving factor in OTP to be converted in bytes
			v = decimaltohex(count, 16);
			var decb = new Array();
			lhex = hexToBytes(v);
			for (var i = 0; i < lhex.length; i++) {
				decb[i] = String.fromCharCode(lhex[i]);
			}
			var retval = new String();
			retval = decb.join('');
			return retval;
		}

		function decimaltohex(d, padding) {
			// d is the decimal value
			// padding is the padding to apply (O pad)
			var hex = Number(d).toString(16);
			padding = typeof(padding) === "undefined" || padding === null ? padding = 2 : padding;
			while (hex.length < padding) {
				hex = "0" + hex;
			}
			return hex;
		}

		function hexToBytes(hex) {
			for (var bytes = [], c = 0; c < hex.length; c += 2)
				bytes.push(parseInt(hex.substr(c, 2), 16));
			return bytes;
		}

		function truncatedvalue(h, p) {
			// h is the hash value
			// p is precision
			offset = h[19] & 0xf;
			v = (h[offset] & 0x7f) << 24 | (h[offset + 1] & 0xff) << 16 | (h[offset + 2] & 0xff) << 8 | (h[offset + 3] & 0xff);
			v = "" + v;
			v = v.substr(v.length - p, p);
			return v;
		}

		var hash = CryptoJS.HmacSHA1(CryptoJS.enc.Latin1.parse(hotp_movingfactortohex(counter)), CryptoJS.enc.Hex.parse(key));

		var hmacBytes = hash.toString(CryptoJS.enc.Hex);
		
		if (format == "hex40") {
			return hmacBytes.substring(0, 10);
		} else if (format == "dec6") {
			return truncatedvalue(hexToBytes(hmacBytes), 6);
		} else if (format == "dec7") {
			return truncatedvalue(hexToBytes(hmacBytes), 7);
		} else if (format == "dec8") {
			return truncatedvalue(hexToBytes(hmacBytes), 8);
		}
		else {
			return "unknown format";
		}
	}

}());
