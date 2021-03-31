# Add comment to pull request or issue

This actions add a comment to a PR

See [demo]() on this repository

## Inputs

### `comment`

**Required** The comment, that you want to post, any text with a `$` will be resolve as a an enviroment variable.

## Example usage

```yml
uses: jdvr/action-add-comment@master
with:
  comment: 'Current build $BUILD_NUMBER has passed ✅'
env:
  BUILD_NUMBER: 1234
```

## Features

- Support emoji, markdown and mentions
- Resolves environment variables

## Todo

- Update exsting comment
- Work with related issues
