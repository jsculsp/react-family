const qiniu = {
  b: 'b',
  name: {
    first: 'Qi',
    last: 'Niu',
    a: {
      d: {
        e: 'e',
      },
      f: {
        g: 'g',
        h: {
          i: 'i',
        }
      }
    },
  }
}

function getDepth(obj) {
  return getDepthHelper(obj, 1)
}

function getDepthHelper(obj, depth) {
  let depthList = []
  for (let key in obj) {
    let value = obj[key]
    if (typeof value === 'object') {
      let newDepth = depth + 1
      depthList.push(getDepthHelper(value, newDepth))
    }
  }
  let maxDepth = depth
  for (let d of depthList) {
    if (d > maxDepth) {
      maxDepth = d
    }
  }
  return maxDepth
}

const result = getDepth(qiniu)
console.log(result)
