# React Plausible Analytics

**[Plausible](https://plausible.io) analytics as a React component.**

[Zlatko Fedor](http://github.com/seeden) made the original react-g-analytics project.

*A fork of [react-ga-analytics](https://github.com/seeden/react-g-analytics), specifically designed for use with Plausible analytics.*

## Install

```sh
npm install git+https://codeberg.org/resynth1943/react-plausible-analytics.git#master
```

## Features

 * This script automatically loads the Plausible analytics script.

Plausible handles history `popState`s on its own, so we don't need to touch that :-)

## Notice

Use version 0.3.x of the react-plausible-analytics if you want to use it with react-router 4.x
Use version 0.2.x of the react-plausible-analytics if you want to use it with react-router 2.x or 3.x

## Usage

### Example react-router 4.x

User BrowserRouter from react-g-analytics instead of react-router.

```js
import { BrowserRouter } from 'react-plausible-analytics';

export default function MyComponent() {
  return (
    <BrowserRouter id="[Plausible ID here]">
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
var PlausibleAnalytics = require('react-plausible-analytics');

var App = module.exports = React.createClass({
  render: function() {
    return (
      <div id="application">
        <PlausibleAnalytics id="[Plausible ID here]" />
        <RouteHandler />
      </div>
    );
  }
});
```

## Custom Event Goals

This module also supports Plausible's [custom event goals](https://docs.plausible.io/custom-event-goals) API.

```js
var React = require('react');
var PlausibleAnalytics = require('react-plausible-analytics');
var RouteHandler = require('react-router').RouteHandler;

export default React.createClass({
  render: function() {
    return (
      <div id="application">
        <PlausibleAnalytics id="[Plausible ID here]" queuedCustomEvents={["customEvent"]} />
        <RouteHandler />
      </div>
    );
  }
});
```

## Credits

[Zlatko Fedor](http://github.com/seeden) made the original react-g-analytics project.
[resynth1943](https://resynth1943.net) created the fork that supports Plausible.

## License

[The MIT License (MIT)](LICENSE)
