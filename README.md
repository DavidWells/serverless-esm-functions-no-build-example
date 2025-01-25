# ESM Serverless Framework Example

This is a simple example demonstrating how to use ES Modules (ESM) with the Serverless Framework without requiring a build step.

## Features

- Native ES Module support using Node.js 18.x
- Uses `lodash-es` as an ESM-compatible dependency
- No bundling or transpilation required
- Simple Lambda function that processes text

## Prerequisites

- Node.js 18.x or later
- Serverless Framework CLI installed (`npm install -g serverless`)
- AWS credentials configured

## Installation

1. Clone this repository
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

## Notes

- The function is deployed as an ESM-compatible Lambda function
- The `lodash-es` package is installed and used directly in the function
- No build step is required, and the function can be deployed directly
