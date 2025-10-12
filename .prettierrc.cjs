/** @type {import('prettier').Options} */
module.exports = {
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'), // must be last (https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
  ],
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tsdoc: true,
}
