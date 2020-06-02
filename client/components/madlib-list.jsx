import React from 'react';

export default class MadlibList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madlibs: {}
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
    return (
      <h1>Madlib List</h1>
    );
  }
}
