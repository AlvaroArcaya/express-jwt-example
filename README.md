# Express + JWT + Fake in-memory repository

## Install dependencies

```
yarn install
```

## Set environment variables .env

Create a copy from .env.dist

```
cp .env.dist .env
```

Edit file and fill the variables

```
vim .env
```

```
JWT_SECRET=mysecretkey
JWT_EXPIRES_IN=300
PORT=3000
```

## Start dev server

```
yarn start
```
