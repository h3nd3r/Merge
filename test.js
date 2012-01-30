
var merge = require('./merge.js');

function assert_equal(expected, result){
  console.log(expected);
  console.log(result);
  console.log("\n");
}

console.log("Merge:");

assert_equal([], merge.merge([], []));
assert_equal([0,1], merge.merge([0], [1]));

assert_equal([1,1],  merge.merge([1], [1]));
assert_equal([1,2],  merge.merge([2], [1]));

assert_equal([1,1,3,5],  merge.merge([1], [1, 3, 5]));
assert_equal([1,3,3,5],  merge.merge([3], [1, 3, 5]));
assert_equal([1,2,3,5],  merge.merge([2], [1, 3, 5]));
assert_equal([0,1,3,5], merge.merge([0], [1, 3, 5]));
assert_equal([1,1,2,3,5], merge.merge([1,2], [1, 3, 5]));
assert_equal([1,3,5,6], merge.merge([6], [1, 3, 5]));
assert_equal([1,3,4,5,6], merge.merge([4,6], [1, 3, 5]));

assert_equal([1,3,5,7],  merge.merge([1, 3, 5, 7],[]));
assert_equal([1,1,3,5,7],  merge.merge([1, 3, 5, 7],[1]));
assert_equal([1,2,3,3,5,7],  merge.merge([1, 3, 5, 7],[2,3]));
