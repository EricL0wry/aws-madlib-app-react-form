import React from 'react';

export default class MadlibForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madlib: null
    };
  }

  componentDidMount() {
    this.getWords();
  }

  getWords() {
    fetch(`/api/madlib/${this.props.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ madlib: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        {this.props.params.id}
      </div>
    );

  }
}
