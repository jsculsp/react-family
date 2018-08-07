qiniu = {
  name: {
    first: 'Qi',
    last: 'Niu',
  }
}

function getDepth(obj) {
  return getDepthTemp(obj, 1)
}

function getDepthTemp(obj, depth) {
  // let depthList = []
  for (let key in obj) {
    let value = obj[key]
    if (typeof value === 'object') {
      depth += 1
      return getDepthTemp(value, depth)
    }
  }
  return depth
}

const result = getDepth(qiniu)
console.log(result)
