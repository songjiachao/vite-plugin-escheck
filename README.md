# vite-plugin-escheck

<p align="center">
<a href="https://github.com/songjiachao/escheck-webpack-plugin"><img height="200" src="https://raw.githubusercontent.com/songjiachao/images/main/escheck-webpack-plugin/logo.png" alt="escheck-webpack-plugin"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/escheck-webpack-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/escheck-webpack-plugin" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/escheck-webpack-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/escheck-webpack-plugin" alt="NPM Downloads" /></a>
  <a href="https://github.com/songjiachao/escheck-webpack-plugin/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/songjiachao/escheck-webpack-plugin" alt="License" /></a>
</p>

## 📖 Introduction

Check all the vite generated files to find whether the code match the selected ES version. If doesn't match the plugin will thorw an error and stop vite emit files.

![Demo](https://raw.githubusercontent.com/songjiachao/images/main/escheck-webpack-plugin/demo.gif)

## 📦 Installation
```
yarn add -D vite-plugin-escheck
```

## 🛠 Usage

```js
// vite.config.ts
import ESCheck from 'vite-plugin-escheck'
export default defineConfig({
  plugins: [vue(), ESCheck({
     // type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest'
    ecmaVersion:'latest' // optional, default 'latest'
  })]
})

```




