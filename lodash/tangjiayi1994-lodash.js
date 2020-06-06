var tangjiayi1994 = {
  compact: function (ary) {
    return ary.filter(it => it)
  },
  difference: function (array, values = []) {
    var map = {}
    if (arguments.length > 2) values = Array.from(arguments).reduce((res, it) => {
      return res.concat(it), res
    }, [])
    if (values.length == 0) return array.slice()
    values.forEach(it => map[it] = true)
    return array.reduce((res, it) => {
      return it in map ? 1 : res.push(it), res
    }, [])
  },
}