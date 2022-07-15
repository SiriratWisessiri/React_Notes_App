const nums = [1, 2, 3, 4]
function findNum() {
    return nums.filter((num) =>  {
        return num%2!==0
    })
}
console.log(findNum())