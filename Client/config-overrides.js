/* eslint-disable space-before-function-paren */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
const { override, addWebpackPlugin } = require('customize-cra')
const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const paths = require('react-scripts/config/paths')

const prependPostcssPlugins = plugins => config => {
  const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf
  rules.forEach(
    r =>
      r.use &&
      r.use.forEach(u => {
        if (u.options && u.options.ident === 'postcss') {
          if (!u.options.plugins) {
            u.options.plugins = () => [...plugins]
          }
          if (u.options.plugins) {
            const originalPlugins = u.options.plugins
            u.options.plugins = () => [...plugins, ...originalPlugins()]
          }
        }
      })
  )
  return config
}

const isProduction = process.env.NODE_ENV === 'production'

module.exports = override(
  prependPostcssPlugins([]),
  isProduction &&
    addWebpackPlugin(
      new PurgecssPlugin({
        paths: glob.sync([
          `${paths.appSrc}/**/*.js`,
          `${paths.appSrc}/**/*.jsx`,
          `${paths.appPublic}/**/*.html`
        ])
      })
    )
)
