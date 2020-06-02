import React from 'react';
import MadlibListItem from './madlib-list-item';

export default class MadlibList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madlibs: []
    };
  }

  componentDidMount() {
    this.getMadlibs();
  }

  getMadlibs() {
    fetch('/api/madlibs')
      .then(res => res.json())
      .then(data => {
        this.setState({ madlibs: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    let items;
    if (this.state.madlibs.length) {
      items = this.state.madlibs.map(madlib => {
        return <MadlibListItem
          key={madlib.madLibId}
          madlib={madlib}
          setView={this.props.setView}
        />;
      });
    }

    if (!items) {
      return (
        <div className="row justify-content-center mt-3">
          <h2>Loading...</h2>
        </div >
      );
    }

    return (
      <div className="container d-flex flex-column align-items-center mt-3">
        <div className="row flex-column align-items-center pb-3 mb-3">
          <h2 className="text-center">Welcome to Dial-A-MadLib</h2>
          <h3 className="text-center">Select a subject below to get started</h3>
        </div>
        <div className="row flex-column align-items-center my-3 list-container p-3">
          {items}
        </div>
      </div>

    );
  }
}
