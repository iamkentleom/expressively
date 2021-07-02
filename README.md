<div align="center">
    <img src="https://i.imgur.com/6cxMqZC.png">

</div>

# Expressively
> production ready Express REST API scaffolding

## Overview
If you're reading this, chances are you are already familiar with Express framework. It is a fast, unopinionated, minimalist web framework for Node.js loved by tons of developers. The great thing about being unopinionated is that you're free as to how you structure your code (you're not forced to adhere to strict guidelines mandated by the framework), the bad thing is that you also have the freedom to structure your code, if you're a beginner developing express applications you'll probably end up building codebase that is highly unreadable to non-authors and suffers a lot in terms of maintainability. Hence the purpose of this template, it aims to scaffold an initial structure for an express app primarily patterned on the MVC design pattern in software development. With Expressively, the burden of structuring your code is minimized so that you can focus on what is important, developing your application.

## Usage
Create a new express project scaffolded using expressively
```sh
npx degit iamkentleom/expressively my-api
cd my-api
```
Install dependencies
```sh
npm install
```
Start the server
```sh
npm run dev # for development
```
alternatively, you can execute `npm start` to run the server in production mode

Run tests
```sh
npm run test
```

## Some useful links
- [How to write a production-ready Node and Express app](https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/)

## License
[MIT](./LICENSE)