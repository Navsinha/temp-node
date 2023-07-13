const _=require('lodash')
const arr=[4,[3,[24,[6]]]]
const a=_.flattenDeep(arr);
console.log(a)