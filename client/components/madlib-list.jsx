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
    return (
      <div className="container px-0 mt-3">
        <div className="row">
          <h1 className="col-12">Welcome to Dial-A-Madlib</h1>
          <h2 className="col-12">Select a Madlib below to get started</h2>
        </div>
        <div className="row">
          {items || ''}
        </div>
      </div>

    );
  }
}
