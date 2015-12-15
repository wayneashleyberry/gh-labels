# gh-labels

> GitHub labels we use at [Next](http://www.wearenext.co.za/)

[![npm](http://img.shields.io/npm/v/@next/gh-labels.svg?style=flat)](https://www.npmjs.com/package/@next/gh-labels)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/we-are-next/gh-labels.svg?branch=master)](https://travis-ci.org/we-are-next/gh-labels)
[![Dependency Status](https://david-dm.org/we-are-next/gh-labels.svg)](https://david-dm.org/we-are-next/gh-labels)
[![devDependency Status](https://david-dm.org/we-are-next/gh-labels/dev-status.svg)](https://david-dm.org/we-are-next/gh-labels#info=devDependencies)

---

![feature](https://img.shields.io/badge/feature-%20%20%20%20%20%20%20%20-91ca55.svg)
![enhancement](https://img.shields.io/badge/enhancement-%20%20%20%20%20%20%20%20-65c0fd.svg)
![optimization](https://img.shields.io/badge/optimization-%20%20%20%20%20%20%20%20-5ebeff.svg)
![in progress](https://img.shields.io/badge/in progress-%20%20%20%20%20%20%20%20-f9c828.svg)
![discussion](https://img.shields.io/badge/discussion-%20%20%20%20%20%20%20%20-c9307c.svg)
![question](https://img.shields.io/badge/question-%20%20%20%20%20%20%20%20-c9307c.svg)
![bug](https://img.shields.io/badge/bug-%20%20%20%20%20%20%20%20-ea3b49.svg)
![security](https://img.shields.io/badge/security-%20%20%20%20%20%20%20%20-ee3f46.svg)
![chore](https://img.shields.io/badge/chore-%20%20%20%20%20%20%20%20-fef1c2.svg)
![legal](https://img.shields.io/badge/legal-%20%20%20%20%20%20%20%20-fef1c3.svg)
![css](https://img.shields.io/badge/css-%20%20%20%20%20%20%20%20-c0d5f1.svg)
![html](https://img.shields.io/badge/html-%20%20%20%20%20%20%20%20-c0d5f1.svg)
![php](https://img.shields.io/badge/php-%20%20%20%20%20%20%20%20-c0d5f1.svg)
![node](https://img.shields.io/badge/node-%20%20%20%20%20%20%20%20-c0d5f1.svg)
![javascript](https://img.shields.io/badge/javascript-%20%20%20%20%20%20%20%20-c0d5f1.svg)
![design](https://img.shields.io/badge/design-%20%20%20%20%20%20%20%20-fdc078.svg)
![ux](https://img.shields.io/badge/ux-%20%20%20%20%20%20%20%20-fdc078.svg)
![prototype](https://img.shields.io/badge/prototype-%20%20%20%20%20%20%20%20-fdc078.svg)
![copy](https://img.shields.io/badge/copy-%20%20%20%20%20%20%20%20-fdc078.svg)
![duplicate](https://img.shields.io/badge/duplicate-%20%20%20%20%20%20%20%20-d2dae1.svg)
![wontfix](https://img.shields.io/badge/wontfix-%20%20%20%20%20%20%20%20-d2dae1.svg)
![invalid](https://img.shields.io/badge/invalid-%20%20%20%20%20%20%20%20-d2dae1.svg)
![on hold](https://img.shields.io/badge/on hold-%20%20%20%20%20%20%20%20-d2dae1.svg)
![test](https://img.shields.io/badge/test-%20%20%20%20%20%20%20%20-f9e3d9.svg)
![staging](https://img.shields.io/badge/staging-%20%20%20%20%20%20%20%20-f9d8c8.svg)
![production](https://img.shields.io/badge/production-%20%20%20%20%20%20%20%20-FDC1A4.svg)
![low priority](https://img.shields.io/badge/low priority-%20%20%20%20%20%20%20%20-000000.svg)
![high priority](https://img.shields.io/badge/high priority-%20%20%20%20%20%20%20%20-000000.svg)

---

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

#### Deployment

To get new or updated issues to be used in our GitHub webhooks you need to do
the following:

1. Publish a new release of this package on NPM
2. Update the [package.json](https://github.com/we-are-next/gh-webhooks/blob/master/package.json) over in [we-are-next/gh-webhooks](https://github.com/we-are-next/gh-webhooks)
3. If the tests pass, the updated webhooks will be automatically deployed.

If you're making a lot of updates and find publishing slow and tedious,
check out [cut-release](https://www.npmjs.com/package/cut-release).
