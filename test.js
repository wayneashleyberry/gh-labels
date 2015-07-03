var test = require('tape')
var isArray = require('lodash.isarray')
var isString = require('lodash.isstring')
var labels = require('./')

test('exported value is an array', function (t) {
  t.plan(1)
  t.ok(isArray(labels), '')
})

console.log(labels)

test('exported objects have a name and color', function (t) {
  t.plan(labels.length * 2)
  labels.forEach(function (issue) {
    t.ok(isString(issue.name), '')
    t.ok(isString(issue.color), '')
  })
})
