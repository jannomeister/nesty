<div align="center">
  <a href="https://i.imgur.com/Fwgc8yJ.png">
    <img
    height="90"
    width="90"
    alt="Nesty"
    src="https://i.imgur.com/Fwgc8yJ.png"
  />
	</a>
	<h1>Nesty</h1>
  <p>A backend template using Nest.JS for my personal projects.</p>
</div>

## The problem

I develop a bunch of backend applications. Each time I scaffold a new project using Nest.js, I always recreate all the setup from my previous projects.

## The solution

This is a backend template using Nest.JS that has all the configurations from all of my projects, from linting, code formatting, building and more.

## Getting Started

This guide will walk you through on how to use this template

- clone this repo: `git clone -b main git@github.com:jannomeister/nesty.git`
- change the origin with the project you created: `git remote set-url origin <YOUR_NEW_PROJECT.git>`
- push this to your newly create project.

## Development

This project already has [husky](https://github.com/typicode/husky), so that it will validate your commit messages if it passes the [commitlint guidelines](https://commitlint.js.org/), and it will also run all your tests and lint before you can push successfully.

- You can run this project via `npm run start:dev`
- You can build this project via `npm run build`
- You can ran all the unit tests via `npm run test` or `npm run test:watch`
- You can run all the e2e tests via `npm run test:e2e`
- You can ran test coverage via `npm run test:cov`

## Contribute

- fork this repo
- clone your forked repository in your local
- apply your changes
- commit your changes and push it to your forked repo
- make a pull request to the original repo
