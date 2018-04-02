const getElementsArray = (res, arr, len, k) => {
  for (let i = 0; i < len; i++) {
    res[k] = arr[i];
    k += 2;
  }
  return res;
}

const getTailArray = (arr, len) => {
  if (arr.length > len) {
    return arr.slice(len);
  } else {
    return [];
  }
}

//TODO: переделать без изменяемого res и передачи его внуть другой ф-ции
const union = (arr1, arr2) => {
  let res = [];
  let len = Math.min(arr1.length, arr2.length);

  res = getElementsArray(res, arr1, len, 0);
  res = getElementsArray(res, arr2, len, 1);
  
  res = res.concat(getTailArray(arr1, len));
  res = res.concat(getTailArray(arr2, len));

  return res;
}

module.exports = union;