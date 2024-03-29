let ans = [];

function stringChop(str, size) {
  if(str==='' || str===null){
	return [];
  }
  for (let i = 0; i < str.length; i += size) {
    slice(str, i, i + size);
  }

  return ans;
}

function slice(str, start, end) {
  let sliced = str.slice(start, end);
  ans.push(sliced);
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
