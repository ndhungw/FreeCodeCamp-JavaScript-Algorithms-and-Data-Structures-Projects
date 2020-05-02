function rot13(str) {
    const isAlphabeticCharacter = function (char) {
        return char >= "A" && char <= "Z";
    };

    let decodedStr = "";

    for (let i = 0; i < str.length; i++) {
        let decodedChar = str[i];

        if (isAlphabeticCharacter(decodedChar)) {
            let charCode = str.charCodeAt(i) - 13;
            let newCharCode = charCode >= 65 ? charCode : charCode + 26;
            decodedChar = String.fromCharCode(newCharCode);
        }

        decodedStr += decodedChar;
    }

    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));
