const { flip, pancakeSort, max, getMaxIndex } = require("./index")

test("flip", () => {
  let arr = [5, 4, 3, 2, 1]
  let originalArr = arr
  expect(flip([5, 4, 3, 2, 1], 1)).toEqual([5, 4, 3, 2, 1])
  expect(originalArr).toEqual(arr)
  expect(flip([5, 4, 3, 2, 1], 2)).toEqual([4, 5, 3, 2, 1])
  expect(originalArr).toEqual(arr)
  expect(flip([5, 4, 3, 2, 1], 3)).toEqual([3, 4, 5, 2, 1])
  expect(originalArr).toEqual(arr)
  expect(flip([5, 4, 3, 2, 1], 4)).toEqual([2, 3, 4, 5, 1])
  expect(originalArr).toEqual(arr)
  expect(flip([5, 4, 3, 2, 1], 5)).toEqual([1, 2, 3, 4, 5])
  expect(originalArr).toEqual(arr)
})

test("simple example", () => {
  let arr = [5, 7, 8, 2]
  let pancake = pancakeSort([...arr])

  arr = arr.sort(function(a, b) {
    return a - b
  })

  expect(pancake).toEqual(arr)
})
test("pancakeSort", () => {
  for (let i = 0; i < 1000; i++) {
    let arr = []
    for (let x = 0; x < 100; x++) {
      arr.push(Math.floor(Math.random() * 100 + 1))
    }
    let pancake = pancakeSort([...arr])
    arr = arr.sort(function(a, b) {
      return a - b
    })
    expect(pancake).toEqual(arr)
  }
})

test("max", () => {
  expect(max([1, 2, 3, 4, 5, 5])).toEqual(5)
  expect(max([1, 2, 7, 4, 5])).toEqual(7)
  expect(max([1, 8, 3, 4, 5])).toEqual(8)
  expect(max([9, 2, 3, 4, 5])).toEqual(9)
  expect(max([1, 2, 3, 10, 5])).toEqual(10)
})

test("getMaxIndex", () => {
  expect(getMaxIndex([1, 2, 3, 4, 5, 5])).toEqual(4)
  expect(getMaxIndex([1, 2, 7, 4, 5])).toEqual(2)
  expect(getMaxIndex([1, 8, 3, 4, 5])).toEqual(1)
  expect(getMaxIndex([9, 2, 3, 4, 5])).toEqual(0)
  expect(getMaxIndex([1, 2, 3, 10, 5])).toEqual(3)
})
