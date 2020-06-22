import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { PlausibleAnalytics } from './Plausible';

export default class PlausibleBrowserRouter extends Component {
  static propTypes = {
    ...BrowserRouter.propTypes,
    history: PropTypes.object,
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    queuedCustomEvents: PropTypes.arrayOf(PropTypes.object),
  };

  static childContextTypes = {
    history: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      history: this.history,
    };
  }

  componentWillMount() {
    const {
      history,
      basename,
      forceRefresh,
      getUserConfirmation,
      keyLength,
    } = this.props;

    this.history = history || createBrowserHistory(
      basename,
      forceRefresh,
      getUserConfirmation,
      keyLength,
    );
  }

  render() {
    const {
      id,
      queuedCustomEvents,
      children,
    } = this.props;

    return (
      <Router history={this.history}>
        <PlausibleAnalytics id={id} queuedCustomEvents={queuedCustomEvents}>
          {children}
        </PlausibleAnalytics>
      </Router>
    );
  }
}
