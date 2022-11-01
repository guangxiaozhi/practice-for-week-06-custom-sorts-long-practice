function ageSort(users) {
  // Your code here
  return users.sort((a,b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      even.push(arr[i]);
    }else{
      odd.push(arr[i]);
    }
  }
  return [...odd.sort((a,b) => a - b),...even.sort((a,b) => a - b)];
}

function validAnagrams(s, t) {
  // Your code here
  if (s.sort === t.sort){
    return true;
  }
  return false;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    if(a.toString().length > b.toString().length) return -1;
    if(b.toString().length > a.toString().length) return 1;
    return a - b;
  })
}

function frequencySort(arr) {
  // Your code here
  let obj = {};
  for (let num of arr){
    if (!obj[num]){
      obj[num] = 1;
    }else{
      obj[num]++;
    }
  }
  return arr.sort((a,b) => {
    if (obj[a] > obj[b]) return 1;
    if (obj[b] > obj[a]) return -1;
    return b - a;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
