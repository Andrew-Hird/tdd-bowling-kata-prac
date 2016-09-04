var test = require('tape')
var game = require('../game')

test('test setup working', function (t) {
  t.pass()
  t.end()
})

test('scores a gutterball frame', function(t) {
  var frame = [0, 0]
  var expected = 0
  var actual =  game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})

test('scores a normal frame', function (t) {
  var frame = [2, 3]
  var expected = 5
  var actual = game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})

test('scores a spare frame', function (t) {
  var frame = [6, 4]
  var nextFrame = [2, 3]
  var expected = 12
  var actual = game.scoreFrame(frame, nextFrame)
  t.equal(actual, expected)
  t.end()
})

test('scores a single strike frame', function (t) {
  var frame = [10, 0]
  var nextFrame = [3, 2]
  var expected = 15
  var actual = game.scoreFrame(frame, nextFrame)
  t.equal(actual, expected)
  t.end()
})
