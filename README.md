# Vue + Sinatra PoC
This repository proofs the concept of integrating VueJS with Sinatra routing.
This PoC aims to layout a new concept for the smashing dashboard.
The goal is, to provide a really simple method of adding dashboards and creating
widgets with VueJS.

## How to run
```
$ git clone https://github.com/rherwig/sinatra-vue-poc.git
$ gem install bundler
$ bundle install
$ npm install
$ npm start
$ ruby main.rb
```

This starts a webpack watcher as well as the sinatra application.
You can now open the app in your browser by navigating to either `localhost:4567/sample` or `localhost:4567/project`
since those are the two dashboards available.

## Creating a new dashboard

In order to create a new dashboard, simply create a vue file inside the `assets/dashboards` directory.
For example: in order to create a dashboard named `myboard`, create the file `assets/dashboards/myboard.vue` and open it
in the browser via `localhost:4567/myboard`. It is that easy.
