'use strict';

// react
import { Component } from 'react';
import { createRoot } from 'react-dom/client';

// index
import IndexContainer from '@components/index/index.js';

/**
 * index view
 */
class IndexView extends Component {
  render() {
    return (
      <IndexContainer />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);