# ESM Serverless Framework Example

This is a simple example demonstrating how to use ES Modules (ESM) with the Serverless Framework without requiring a build step.

<!-- doc-gen {TOC} -->
- [Why no bundle?](#why-no-bundle)
- [How it works](#how-it-works)
- [Our lambda code](#our-lambda-code)
- [Our config](#our-config)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
<!-- end-doc-gen -->

## Why no bundle?

1. Bundling can mess with logging unless you setup sourcemaps.
2. It's super simple
3. You can read un-minified/compiled code in AWS console if you need to.

## How it works

You simply need to set `"type": "module"` in your package.json

Then the `serverless` framework will package and deploy your unbundled ESM lambda function

This example repo demonstrates how to uses `lodash-es` as a direct dependency

## Our lambda code

This is our [lambda handler](https://github.com/DavidWells/serverless-esm-functions-no-build-example/blob/main/my-function.js).

<!-- doc-gen {CODE} src="./my-function.js" -->
```js
import { capitalize, reverse } from 'lodash-es'

export const handler = async (event) => {
  const message = 'hello world'
  const processedMessage = capitalize(message)
  const reversedMessage = reverse(message.split('')).join('')
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      original: message,
      capitalized: processedMessage,
      reversed: reversedMessage
    })
  }
}
```
<!-- end-doc-gen -->

## Our config

Below is a simple `serverless.yml` file with our `runtime` defined and a pointer to where our code lives in [./my-function.js](https://github.com/DavidWells/serverless-esm-functions-no-build-example/blob/main/my-function.js).

<!-- doc-gen {CODE} src="./serverless.yml"-->
```yml
service: my-esm-service

provider:
  name: aws
  runtime: nodejs22.x

functions:
  hello:
    handler: my-function.handler

# Optionally, you can exclude files from the packaged zip
package:
  patterns:
    - '!.gitignore'
    - '!.DS_Store'
    - '!README.md'
```
<!-- end-doc-gen -->

## Features

- Native ES Module support using Node.js 22.x
- Uses `lodash-es` as an ESM-compatible dependency
- No bundling or transpilation required
- Simple Lambda function that processes text

## Prerequisites

- Node.js 22.x or later
- Serverless Framework CLI installed (`npm install -g serverless`) or open serverless (`npm install -g oss-serverless`)
- AWS credentials configured

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Usage

1. Deploy the function:

```bash
serverless deploy
``` 

2. Invoke the function:

```bash
serverless invoke --function hello
```

3. Teardown

```bash
severless remove
```
