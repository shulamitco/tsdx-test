import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProgressBar from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ProgressBar
        borderEnum={1}
        isFullProgress={true}
        limits={[]}
        typeEnum={3}
        values={{ value: 45 }}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
