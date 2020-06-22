# React Plausible Analytics

**[Plausible](https://plausible.io) analytics as a React component.**

*A fork of [react-ga-analytics](https://github.com/seeden/react-g-analytics), specifically designed for use with Plausible analytics.*

## Install

```sh
npm install react-g-analytics
```

## Features

 * Automatically load google analytics scripts (optional - id parameter)
 * Automatically send pageview when user will change current route of react-router

# Support us

Star this project on [GitHub][github-url].

## Notice

Use version 0.3.x of the react-plausible-analytics if you want to use it with react-router 4.x
Use version 0.2.x of the react-plausible-analytics if you want to use it with react-router 2.x or 3.x

## Usage

### Example react-router 4.x

User BrowserRouter from react-g-analytics instead of react-router.

```js
import { BrowserRouter } from 'react-g-analytics';

export default function MyComponent() {
  return (
    <BrowserRouter id="UA-*******-**">
      ... your application
    <BrowserRouter>
  );
}

>
```

### Example react-router 3.x and bellow

### App.jsx

Application part (load google analytics script to your webpage on the client side).
ReactGAnalytics has parameter ID (use your own ID)

```js
var React = require('react');
var GoogleAnalytics = require('react-g-analytics');

var App = module.exports = React.createClass({
  render: function() {
    return (
      <div id="application">
        <GoogleAnalytics id="UA-*******-**" />
        <RouteHandler />
      </div>
    );
  }
});
```

### routes.jsx

Define your routes here.

```js
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Index = require('./Index.jsx');
var App = require('./App.jsx');

var routes = module.exports = (
  <Route handler={App} name="index" path="/">
    <DefaultRoute handler={Index} />
  </Route>
);
```

### client.js

Here is a simple client side

```js
var React = require('react');
var app = require('./App.jsx');
var routes = require('./routes.jsx');

var router = Router.create({
  routes: routes
});

router.run(function(Handler, state) {
  React.render(React.createElement(Handler, {}), node);
});
```

## Set

If you want to set google analytics parameters after load you can use property named set. Here is small example:

```js
var React = require('react');
var GoogleAnalytics = require('react-g-analytics');
var RouteHandler = require('react-router').RouteHandler;

var set = {
  anonymizeIp: true
};

var App = module.exports = React.createClass({
  render: function() {
    return (
      <div id="application">
        <GoogleAnalytics id="UA-*******-**" set={set} />
        <RouteHandler />
      </div>
    );
  }
});
```

## Skip loading google analytics scripts

If you are loading the GA in different way. You can skip autoload of the GA script simply:
Do not enter your google analytics ID as parameter.

## Try our other React components

 - Translate your great project [react-translate-maker](https://github.com/CherrySoftware/react-translate-maker)
 - Forms [react-form-controlled](https://github.com/seeden/react-form-controlled)
 - Google AdSense via Google Publisher Tag [react-google-publisher-tag](https://github.com/seeden/react-google-publisher-tag)

# Support us

Star this project on [GitHub][github-url].

## Credits

[Zlatko Fedor](http://github.com/seeden)

## License

The MIT License (MIT)

Copyright (c) 2016 Zlatko Fedor zlatkofedor@cherryprojects.com
