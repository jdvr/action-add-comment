# Add comment to pull request or issue

This actions add a comment to a PR

See [demo]() on this repository

## Inputs

### `comment`

**Required** The comment, that you want to post, any text with a `$` will be resolve as a an enviroment variable.

### `GITHUB_TOKEN` environment variable

A valid [github access token](https://github.com/settings/tokens)

## Example usage

```yml
uses: jdvr/action-add-comment@master
with:
  comment: 'Current build $BUILD_NUMBER has passed ✅'
env:
  BUILD_NUMBER: 1234
  GITHUB_TOKEN: {{ secrets.GITHUB_TOKEN }}
```

## Features

- Support emoji, markdown and mentions
- Resolves environment variables

## Todo

- Update existing comment
- Work with related issues

## :rocket: Publish

1. Change your code
1. Build your code: `yarn build`
1. Commit both, `dits` and changed coded
1. Generate a release