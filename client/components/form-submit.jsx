import React from 'react';

export default class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null
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
        if (data.status) {
          this.setState({
            status: data.status,
            userPin: data.userPin,
            phoneNumber: data.phoneNumber
          });
        } else {
          this.setState({
            status: 'fail'
          });
        }

      });
  }

  render() {
    const { userName } = this.props.params;
    const { phoneNumber, userPin } = this.state;
    let successDisplay;
    if (this.state.status === null) {
      successDisplay = (
        <div className="row justify-content-center mt-3">
          <h2>Loading...</h2>
        </div >
      );
    } else if (this.state.status === 'fail') {
      successDisplay = (
        <div className="row justify-content-center mt-3">
          <h2>We&aposre sorry, an error has occurred!</h2>
        </div>
      );
    } else {
      successDisplay = (
        <div className="row flex-column align-items-center mt-3 py-3 success col-md-10 col-lg-8 col-xl-6">
          <h2>Success!</h2>
          <h3>Thanks, {userName}!</h3>
          <h3>Your PIN is:</h3>
          <h2 className="numbers">{userPin}</h2>
          <h3>Please call:</h3>
          <h2 className="numbers">{phoneNumber}</h2>
          <h3>to hear your MadLib</h3>
        </div>
      );
    }

    return (
      <div className="container d-flex flex-column align-items-center">
        { successDisplay }
        <div className="row justify-content-center mt-3">
          <button
            type="button"
            className="btn back-button"
            onClick={() => { this.props.setView('madlibList', {}); }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}
