# React (w/Router) + Relay + GraphQL Template

First, install dev tools:
```
npm install -g nodemon webpack
```
Then, run `node`:
```
nodemon --ignore graphql/schema.json
```
Finally, run `webpack`:
```
webpack -wd
```
Anytime you makes schema (graphql) changes, you'll need to restart `webpack`.
