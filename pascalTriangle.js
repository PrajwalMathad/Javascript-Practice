/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const pascalTriangle = (numRows) => {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        row[0] = 1;
        row[i] = 1;
        for(let j =1 ; j<i; j++) {
            row[j] = result[i-1][j-1] + result[i-1][j];
        }
        result.push(row);
    }
    return result;
}

console.log(pascalTriangle(5));