function pancakeSort(arr = []) {
  let solid = arr.length - 1
  while (solid !== 0) {
    let maxIndex = getMaxIndex([...arr].slice(0, solid + 1))

    if (maxIndex === solid) {
      solid--
      continue
    }

    let flipped = flip(arr, maxIndex + 1)

    arr = flip(flipped, solid + 1)

    solid--
  }
  return arr
}

function getMaxIndex(arr) {
  let maxNum = max(arr)

  return arr.findIndex(value => value === maxNum)
}
function max(arr) {
  let max = Number.MIN_VALUE
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}

function flip(arr, k) {
  let newArr = [...arr]
  let arr2 = [...arr].slice(0, k).reverse()
  for (let i = 0; i < arr2.length; i++) {
    newArr[i] = arr2[i]
  }

  return newArr
}

module.exports = {
  pancakeSort,
  flip,
  max,
  getMaxIndex
}
