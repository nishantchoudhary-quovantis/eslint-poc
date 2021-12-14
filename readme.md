_Note: We are not using TS Lint since it has been deprecated as of December 2020._

# What is ES LINT?

ESLINT is a tool to maintain code quality and standardize code quality using various user defined rules or prebuilt modules. It can also help with formatting the code to some extent

# What is editorConfig?

EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

# How to setup?

## ESLINT

-   ES Lint is available as a plugin in vscode, webstorm and sublime text
    to perform the actual linting of our project we need to install NPM package `eslint`
-   to create a custom configuration for eslint we need to create an `.eslintrc` or `.eslintrc.yaml`
-   in custom configuration we can define rules that we with to impose in our project or we can use prebuild plugins for eslint
-   ES Lint implicitly does not provide support for typescript, we need to install a parser and a plugin using NPM if we wish to use it with typescript `@typescript-eslint/parser @typescript-eslint/eslint-plugin`
-   after installing these packages we can add them to the extends field of the `.eslintrc`
-   now to add any rules to our linting process we can add them to the rules field of the `.eslintrc` ref: [https://eslint.org/docs/rules]
-   angular setup for linting is a bit different
    1. linting can be added using this command for projects using angular 12+`ng add @angular-eslint/schematics`
    2. for angular 11 this command also need to be run
       `ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ign`
    3. to run linting in angular project use `ng lint` and `ng lint --fix` to fix some of the linting issues

## EditorConfig

-   editorConfig can be installed as a plugin and can be setup using a `.editorConfig` file to configure our editor with various properties REF:[https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties]

# references:

[ES Lint for typescript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
[ES Lint with angular](https://blog.briebug.com/blog/convert-angular-project-tslint-eslint)
[Why use ESLint,Prettier and editorConfig](https://blog.theodo.com/2019/08/why-you-should-use-eslint-prettier-and-editorconfig-together/)
[Setup ESLint, Prettier and editorConfig without any conflicts](https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/)
