# cra-template-starterKit

## Installation

Prerequesites : you have to install node version ^16.0.0 and yarn 
https://www.npmjs.com/package/node
https://www.npmjs.com/package/yarn

In your work directory, clone this repository.
```
work_directory/git clone git@github.com:tsaint31/cra-template-starterKit.git
```
Stay in your work directory and launch the following command where my-app is the name of your application: 
```
work_directory/npx create-react-app my-app --template file:./cra-template-starterKit
```
it will create a new application named my-app and install the following package with the latest version of the package :
- SASS
- Eslint
- Prettier
- Typescript
- React Router Dom
- Testing-Library
- CommitLint
- Vitamin css-design-tokens
- Vitamin css utilities
- Vitamin Icon
- Vitamin React

We decide to set all package with latest as version in package.json to be up-to-date with the last package. We check regularly if we 
need to modify our code. Do not hesitate to make issue if there is problem. 

When the command is finished, go in the my-app directory and launch the command
```
my-app/npx husky install
```
(it will configure husky to check the commit labels)

Modify the file settings.json in the .vscode directory with the name of your app
    "projectKey": "tsaint31_my-app"

then you can start the application with yarn start or npm start.
```
yarn start

```
<img src="https://github.com/tsaint31/cra-template-starterKit/blob/master/screenshot.png">

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
