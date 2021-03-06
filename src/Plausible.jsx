import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function loadScript(domain, script = '//plausible.io/js/plausible.js') {
  if (window.plausible) {
    return console.warn('[react-plausible] Plausible has already been loaded!');
  }
  const plausible = document.createElement('script');
  plausible.async = true;
  plausible.type = 'text/javascript';
  plausible.src = script;
  plausible.dataset.domain = domain;

  const head = document.getElementsByTagName('head')[0];
  head.appendChild(plausible);
}

function initPlausible({
  queuedCustomEvents,
  domain,
  script
}) {
  if (window.plausible) {
    return;
  }

  loadScript(domain, script);

  // Snippet copied from the Plausible.io documentation.
  // This has to be placed *after* the `loadScript call`, otherwise the function will exit out early because it thinks Plausible has already been loaded.
  window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

  if (queuedCustomEvents) {
    for (const customEvent of queuedCustomEvents) {
      plausible(customEvent);
    }
  }
}

export function PlausibleAnalytics (props) {
  useEffect(() => {
    initPlausible({
      queuedCustomEvents: props.queuedCustomEvents,
      domain: props.domain,
      script: props.script
    });
  }, []);

  return props.children;
}

PlausibleAnalytics.propTypes = {
  queuedCustomEvents: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  domain: PropTypes.string,
  script: PropTypes.string
}
