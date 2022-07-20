# aws-api-lambda-starter-template

Author: **Eddie Hernandez**

## Overview

This is an AWS starter template using Serverless Framework that I created for testing purposes.

It uses an API Gateway and Lambda function with a sample GET /greetings endpoint that returns a "Hello World" message, and the event and context objects.

Serverless commands to run and deploy can be found in the package.json.  

## Offline
This repo includes the ability to run everything offline.

To install via npm use the following:

`npm i -D serverless-offline`

and remember to add to serverless.yml plugins

```
plugins:
  - serverless-offline
```

and to run use:

`serverless offline start `

