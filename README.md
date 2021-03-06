# React Flow Boilerplate
[![codecov](https://codecov.io/gh/dooboolab/dooboo-frontend-js/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/dooboo-frontend-js)
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-frontend-js.svg?style=svg)](https://circleci.com/gh/dooboolab/dooboo-frontend-js)

> Specification
* postcss
* flow
* react-router-dom v4
* context-api
* test with `jest` and `react-test-renderer`
* styled-component
* localization

> We decided to remove `mobx` from `js` boilerplate. We didn't, however, make changes in `ts` boilerplate. The reason to remove `mobx` is that we thought this isn't suitable with what `react` brought up as a design pattern. Today, they are more supportive in `functional-programming` rather than `object-oriented` which has been powered by `react-hook` in `16.8`. Unlike, `js`, `typescript` users are more familiar with `OOP` programming because `typescript` has mimicked lots of features in `JAVA` and `C++`. Hope you enjoy what we've brought up today as `react native javascript boilerplate`.

# Gain points
```
1. Sample of react-router-dom v4.
2. Able to learn how to structure react app with `flow`, `context-api` with `jest`.
3. Learn how to localize your project.
```

# INSTALL
```
1. npm install
2. npm start
```

# Structures
```text
app/
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ docs // explanation for dev stack we used. (Sorry for Korean)
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│     └─ navigation
│     └─ screen
│     └─ shared
│  └─ utils
│  └─ ui
│  └─ contexts
│  └─ providers
│  └─ index.js
│  └─ theme.js // global variables for theming in `styled-components`
├─ test/
├─ .gitignore
├─ .eslintignore
├─ .eslintrc.js
├─ babel.config.js
├─ jest.config.js
├─ package.json
├─ README.md
├─ STRINGS.js
├─ webpack.config.js
└─ webpack.config.prod.js
```

# Running the project
Running the project is as simple as running
```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

# Testing the project
Testing is also just a command away:
```sh
npm test

> dooboo-starter@1.0.0 test /Users/hyochan/Documents/Github/dooboolab/dooboo-frontend-js
> jest -u

 PASS  src/components/screen/__tests__/Temp.test.js
  Temp page DOM rendering test
    ✓ component and snapshot matches (34ms)
  Interaction
    ✓ Simulate onClick (2ms)

 PASS  src/components/shared/__tests__/Button.test.js
  Button shared component test
    ✓ component and snapshot matches (38ms)
  Button Interaction
    ✓ Simulate onClick (1ms)

 PASS  src/components/screen/__tests__/Intro.test.js
  Intro page DOM rendering test
    ✓ component and snapshot matches (31ms)
  Interaction
    ✓ Simulate onClick (1ms)

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   3 passed, 3 total
Time:        2.684s
Ran all test suites.
```

# Adding component
> Copy sourcecode in /src/components/screen/Temp.js
> Create new js file with compnent name you will create

# Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

# Localization
We've defined Localization class in `src/models/Localization.js`. This model class is used in mobx store which is `src/stores/appStore.js`. Localization model imports `STRINGS.js` which handles localized strings.
```
const STRINGS = {
  en: { // English
    SIGNUP: 'SIGN UP',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    GOOGLE_LOGIN: 'LOGIN WITH GOOGLE',
    FACEBOOK_LOGIN: 'LOGIN WITH FACEBOOK',
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    COMPLETE: 'DONE',
  },
  ko: { // Korean
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
    GOOGLE_LOGIN: '구글 로그인',
    FACEBOOK_LOGIN: '페이스북 로그인',
    EMAIL: '이메일',
    PASSWORD: '패스워드',
    COMPLETE: '완료',
  },
  ...
```
In `index.js` when app starts it search for navigator's locale and set mobx state.
```
  const userLang: string = navigator.language;
  const localization = new Localization();
  localization.setLocale(userLang);
  store.setLocale(localization);
  ...
```

# React version
16.8

# react-router-dom version
4
