import React from 'react';

export default class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }

  componentDidMount() {

    const params = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.params)
    };

    fetch('api/submit-madlib', params)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {

    return (
      <h1>FormSubmit</h1>
    );
  }
}
