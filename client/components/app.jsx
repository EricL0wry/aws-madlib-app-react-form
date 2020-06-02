import React from 'react';
import MadlibList from './madlib-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'madlibList', params: {} }
    };
  }

  render() {
    const { name, params } = this.state.view;
    const list = <MadlibList />;
    let view;
    if (name === 'madlibList') view = list;
    return (
      <div>
        {view}
      </div>
    );
  }
}
