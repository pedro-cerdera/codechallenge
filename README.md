# codechallenge

A transaction history application

- [Getting Started](#getting-started)
- [Testing](#testing)
- [About](#about)
- [Components](/src/components/README.md)


## Getting Started

To get application clone this repo to your computer

```sh
git clone https://github.com/pedro-cerdera/codechallenge.git
```

Then access folder cloned:

```sh
cd codechallenge && yarn
```

Then follow these steps:

#### 1. Android
Run your application

```sh
react-native run-android
```

#### 2. IOS
Install pods dependecies

```sh
cd ios && pod install && cd ..
```
Then run your application:

```sh
react-native run-android
```

## Testing
There are two tests types: e2e and unity

### 1.E2E

For test e2e 

```sh
react-native start --reset-cache && yarn e2e
```

### 2.UNITY TESTS

For unity tests 

```sh
yarn test
```

## About

The application open showing the user ammount. This value is stored in a redux.
