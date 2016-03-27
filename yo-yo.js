module.exports = function Yoyo(h, update) {

  function yoyo() {
    return h.apply(null, arguments)
  }
  yoyo.update = update
  return yoyo;

}

