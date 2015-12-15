# gh-labels

> GitHub labels for [Next](https://github.com/we-are-next)

[![npm](http://img.shields.io/npm/v/@next/gh-labels.svg?style=flat)](https://www.npmjs.com/package/@next/gh-labels)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/we-are-next/gh-labels.svg?branch=master)](https://travis-ci.org/we-are-next/gh-labels)
[![Dependency Status](https://david-dm.org/we-are-next/gh-labels.svg)](https://david-dm.org/we-are-next/gh-labels)
[![devDependency Status](https://david-dm.org/we-are-next/gh-labels/dev-status.svg)](https://david-dm.org/we-are-next/gh-labels#info=devDependencies)

#### Deployment

To get new or updated issues to be used in our GitHub webhooks you need to do
the following:

1. Publish a new release of this package on NPM
2. Update the [package.json](https://github.com/we-are-next/gh-webhooks/blob/master/package.json) over in [we-are-next/gh-webhooks](https://github.com/we-are-next/gh-webhooks)
3. If the tests pass, the updated webhooks will be automatically deployed.

If you're making a lot of updates and find publishing slow and tedious,
check out [cut-release](https://www.npmjs.com/package/cut-release).

#### Usage

##### CLI

To manually add labels to _an existing repo_, there are two things that
you'll need.

Firstly, install [github-labels](https://www.npmjs.com/package/github-labels):

```sh
npm install --global github-labels
```

Then, get a local copy of the
[config.json](https://github.com/we-are-next/gh-labels/blob/master/config.json)
in this repo.

```sh
git clone git@github.com:we-are-next/gh-labels.git
```

Cool! Now you can run the following command to create labels:

```sh
labels -c gh-labels/config.json user/repo
```

You may optionally remove any existing labels by using the force option:

```sh
labels -c gh-labels/config.json -f user/repo
```

##### Node

```sh
npm install --save @next/gh-labels
```

```js
var labels = require('@next/gh-labels')

labels.forEach(function (label) {
  // do something
})
```
