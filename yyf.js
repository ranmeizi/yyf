module.exports = function () {
  return get(wai) + get(wai) + get(aifu) + '.' + get(wai) + get(wai) + get(aifu) + '.' + get(xi) + get(ou) + get(aimu)
}

var wai = ['丫', 'y', 'Y', 'γ', 'У', 'Ч']
var aifu = ['F', 'f', 'ʃ']
var xi = ['C', 'c', '℃']
var ou = ['O', 'o', 'ō', 'ó', 'ǒ', 'ò', 'ð', 'σ']
var aimu = ['M', 'm', '']

function get(arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
}