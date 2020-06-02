import React from 'react';
import MadlibList from './madlib-list';
import Header from './header';
import MadlibForm from './madlib-form';
import FormSubmit from './form-submit';

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
    const list = <MadlibList setView={this.setView}/>;
    const form = <MadlibForm setView={this.setView} params={params}/>;
    const submit = <FormSubmit setView={this.setView} params={params}/>;
    let view;
    if (name === 'madlibList') view = list;
    if (name === 'madlibForm') view = form;
    if (name === 'madlibSubmit') view = submit;
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
