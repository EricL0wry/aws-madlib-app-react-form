import React from 'react';

export default class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }

  componentDidMount() {
    console.log(this.props.params);
  }

  render() {

    return (
      <h1>FormSubmit</h1>
    );
  }
}
