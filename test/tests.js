/*global Event*/

module.exports = function(yo, test) {

  test('event attribute gets updated', function (t) {
    t.plan(2)
    function a (ev) { t.equal(ev.target.dataset.test, 'a', 'called a') }
    function b (ev) { t.equal(ev.target.dataset.test, 'b', 'called b') }
    var el = yo`<button data-test="a" onclick=${a}>hi</button>`
    el.click()
    yo.update(el, yo`<button data-test="b" onclick=${b}>hi</button>`)
    el.click()
  })

  test('event attribute gets removed', function (t) {
    t.plan(1)
    function a () { t.ok(true, 'called a') }
    var el = yo`<button onclick=${a}>hi</button>`
    el.click()
    yo.update(el, yo`<button>hi</button>`)
    el.click()
  })

  test('custom event listeners and properties are ignored', function (t) {
    t.plan(3)
    function a () { t.ok(true, 'called a') }
    function b () { t.ok(true, 'called b') }
    function c () { t.notOk(true, 'should not call c') }
    var el = yo`<button onclick=${a}>hi</button>`
    el.click()
    var newEl = yo`<button onclick=${b}>hi</button>`
    newEl.foo = 999
    newEl.addEventListener('foobar', c)
    yo.update(el, newEl)
    t.equal(el.foo, undefined, 'no el.foo')
    el.dispatchEvent(new Event('foobar'))
    el.click()
  })

}

