// Generates badge markdown for the readme :)

var labels = require('./index.js')

labels.forEach(function (label) {
    console.log('![' + label.name  + '](https://img.shields.io/badge/' + label.name + '-       -' + label.color + '.svg)')
})
