function getVariance(numbers){
    const total = numbers.reduce((sum, current)=>{
        return sum+ Math.pow(current,2)
    },0)
    return Math.sqrt(total);
}
const numbers = [23,12,44,2,4,11,7,34];
console.log(getVariance (numbers));
