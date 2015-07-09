# gh-labels

> GitHub labels we use at [Next](http://www.wearenext.co.za/)

[![npm](http://img.shields.io/npm/v/@next/gh-labels.svg?style=flat)](https://www.npmjs.com/package/@next/gh-labels)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/we-are-next/gh-labels.svg?branch=master)](https://travis-ci.org/we-are-next/gh-labels)
[![Dependency Status](https://david-dm.org/we-are-next/gh-labels.svg)](https://david-dm.org/we-are-next/gh-labels)
[![devDependency Status](https://david-dm.org/we-are-next/gh-labels/dev-status.svg)](https://david-dm.org/we-are-next/gh-labels#info=devDependencies)

### Manually creating labels

To manually create labels on _an existing repo_, there are two things that
you'll need... [github-labels](https://www.npmjs.com/package/github-labels)
installed on your machine and a local copy of the
[config.json](https://github.com/we-are-next/gh-labels/blob/master/config.json)
in this repo.

```sh
npm install --global github-labels
```

```sh
git clone git@github.com:we-are-next/gh-labels.git
```

Once that's sorted, you can run the following command to create labels:

```sh
labels -c gh-labels/config.json user/repo
```

You may optionally remove any existing labels by using the force option:

```sh
labels -c gh-labels/config.json -f user/repo
```
