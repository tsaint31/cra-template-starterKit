# Contributing to creation-core-components project

If you are on this page it means you are almost ready to contribute proposing changes, fixing issues or anything else.
So, **thanks for your time** !! :tada::+1:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Code of conduct](#code-of-conduct)
- [What are you talking about? Pull Request? Merge? Push](#what-are-you-talking-about-pull-request-merge-push)
- [I don't want to read this whole thing I just have a question](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [How Can I contribute](#how-can-i-contribute)
  - [Reporting Bug](#reporting-bug)
  - [Suggesting enhancement](#suggesting-enhancement)
  - [Code Contribution](#code-contribution)
  - [Pull Request guidelines](#pull-request-guidelines)
  - [Contribution acceptance criteria](#contribution-acceptance-criteria)
- [Attribution](#attribution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Code of conduct

This project and everyone participating in it is governed by the [Creation Core Components code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## What are you talking about? Pull Request? Merge? Push

If you are not familiar with Git and GitHub terms you can check a complete [glossary](https://help.github.com/articles/github-glossary/) on the GitHub website.

## I don't want to read this whole thing I just have a question

You can simply contact us and ask your question at tanguy.muselet@decathlon.com

## How Can I contribute

### Reporting Bug

The first way to contribute to a project is simply reporting a Bug. If you find anything which is not working well or as expected you can open an Issue in the [cra-template-starterkit](https://github.com/tsaint31/cra-template-starterkit/issues) repository.

Before to open the issue please check if there is one similar already opened on the creation-core-components repository. It will save us hours of work and it will allow us to answer you quickly with the desired hotfix.

> **NOTE:** if looking for existing issues you will find the same problem, or similar, in **closed** state, please refer to this issue (with it's number) when you are opening your one. It is maybe a regression we didn't see. In this way you will help to go faster and to find a definitive solution to the recurrent problem.

When you are opening an issue, please be sure to report as much information as you can to allow us to replicate the problem and faster find the solution. To help you on this task, the onepay-api repository is providing Issues Templates:

- Bug Report
- Feature Request
- Custom

If you chose the _Bug Report_ template there is some guideline helping you to fill up the issue. You don't have to provide all the information you will find on the template but, try to be your best.

### Suggesting enhancement

If you think we can to better with the Creation Core Components product and you have some good ideas, you can file an issue selecting the _Feature Request_ template.
Even in this case please try to be as much clear as possible. The faster we can understand what you want or what you are proposing, the faster the implementation will be.

For any request suggestion, the Creation Core Components team is keeping the responsibility to take the final decision: we have a road map and a vision for the product that **must remains generic**.
If the requests are custom specific we will try to find a different way to help you.

Any issue can be voted by the communities and Creation Core Components followers and, even if we are thinking it is not a good idea to implement it, we can surely listen something which is appreciated by the many.

### Code Contribution

If you are a dev and you want to directly fix a problem or implement a new feature... you are the best one ! :clap::clap:
To propose any change you have to submit us a [PullRequest](https://help.github.com/articles/about-pull-requests/)

The workflow we are using the creation-core-components project is:

1. Fork the creation-core-components repository (as you don't have a direct write access to the main one. For the moment :wink:
2. Create your code, `Commit` and `Push the code` on your forked repo
3. Create a GitHub `Pull Request` to our **develop** branch (which is the main one for the coming version).

We will take the time to review your code, make some comments or asking information if needed. But, as you took time to help us, we will take in serious consideration what you are proposing.
To quickly have your code available on production, please take care and read our [Contribution acceptance criteria](#contribution-acceptance-criteria)

### Pull Request guidelines

When you open your pull request provide as much information as possible. You use the templates described into the [reporting bug](#reporting-bug) section.

- For an issue, describe what you are fixing with your pull request and how you had found the defect.
- If you are proposing an enhancement, describe what you are adding to the code (new function, performance enhancement, documentation update, changing an existing function, ...).

### Contribution acceptance criteria

We love maintainable software and we are happy when some else than us is able to take the code, **understand it** and be able to change it.
To reach this goal we fixed some rule in our team and we would love to go ahead in this way, even with the external contribution:

1. Be sure your code compile: no syntax error, no missing library, ...
2. Be sure to write a Jest test covering almost all the code you wrote. 100% of code coverage is useless, we just need all the tests allowing to understand the possible cases about the input and expected output.
3. Add comments on the code if you want to explain better what is happening in the code.
4. Add documentation for any functional explaining, if needed, what changed/added with your code.
5. After you proposed the PullRequest, our CI/CD platform will execute all the steps. If you find any automatic comment on the Pull Request you opened, it means there is something which is not respecting the project defined code style or your broke any previously created test. Please fix this error if you want us to test your PR.

If you respect all these rules you will help us saving time and we will be able to check your pull request faster.
