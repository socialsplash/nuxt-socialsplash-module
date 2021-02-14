# Nuxt SocialSplash module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-socialsplash-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-socialsplash-module)
[![npm](https://img.shields.io/npm/dt/nuxt-socialsplash-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-socialsplash-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
[![CircleCI](https://img.shields.io/circleci/project/github/WilliamDASILVA/nuxt-socialsplash-module/master.svg?style=flat-square)](https://circleci.com/gh/WilliamDASILVA/nuxt-socialsplash-module/tree/master)

> Generate OG images for your webpages through SocialSplash

## Table of Contents

- [Nuxt SocialSplash module](#nuxt-socialsplash-module)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Module options](#module-options)
  - [License](#license)

## Install

```bash
$ npm install --save nuxt-socialsplash-module
// or
$ yarn add nuxt-socialsplash-module
```

## Getting Started

Add `nuxt-socialsplash-module` to `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    'nuxt-socialsplash-module',
  ]
}
```

## Usage

To generate an image, you can use the `generate` method by passing the theme to use and it's parameters. To know what parameters to use, please refer to the theme documentation in [www.socialsplash.xyz](https://www.socialsplash.xyz).

```js
this.$socialsplash.generate('enterprise-website', {
  title: 'Increase your social media reach with SocialSplash',
  subtitle: 'Visit website',
  website: 'www.socialsplash.xyz',
  logo_url: 'https://socialsplash.s3.fr-par.scw.cloud/static/logos/socialsplash.png',
  background: '#2b6cb0'
})
```

Per example, in your `head` hook you could do:

```js
head () {
  const image = this.$socialsplash.generate('enterprise-website', {
    title: 'Increase your social media reach with SocialSplash',
    subtitle: 'Visit website',
    website: 'www.socialsplash.xyz',
    logo_url: 'https://socialsplash.s3.fr-par.scw.cloud/static/logos/socialsplash.png',
    background: '#2b6cb0'
  })

  return [
    { hid: 'og:image', name: 'og:image', content: image },
    { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', name: 'og:image:height', content: '628' },
    { hid: 'twitter:image', name: 'twitter:image', content: image },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
  ]
}
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| domain  | https://images.socialsplash.xyz     | false     | Use a different domain if needed as base. This should not be the case most of the time. |

## License

[MIT License](./LICENSE)
