import Big from 'big.js';
function output(input) {
    let SumResult = new Big(0)
    let MulResult = new Big(1)
    let SortedInputs = []
    let i = 0
    for (let item of input.Sums) {
        SumResult = Big(SumResult).plus(Big(item))
        SortedInputs[i] = item
        i++
    }
    SumResult = Big(SumResult).times(Big(input.K))
    SumResult = Big(SumResult).toFixed(2)
    for (let item of input.Muls) {
        MulResult *= item
        SortedInputs[i] = item
        i++
    }
    SortedInputs.sort((a, b) => a - b)
    return {
        SumResult, MulResult, SortedInputs
    }
}
export { output }