/*
IBM OA
Given a string and a K value, decrypt it in the following way.
Each character should be replaced with a charater K places behind it in the alpbhabets.
The alphabets are circular. i.e, Z comes after A. A <-> Z 
*/

let decodeString = (input = "", k) => {
    let result = "";
    k = k % 26;
    for(let i = 0; i< input.length; i++) {
        let c = input.charCodeAt(i) - k;
        if (c < 'A'.charCodeAt(0)) {
            c += 26;
        }
        result += String.fromCharCode(c);
    }
    return result;
}

console.log(decodeString("ABC", 28));