import React from 'react';
import MadlibList from './madlib-list';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'madlibList', params: {} }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  render() {
    const { name, params } = this.state.view;
    const list = <MadlibList setState={this.setView}/>;
    let view;
    if (name === 'madlibList') view = list;
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          {view}
        </div>
      </div>
    );
  }
}
