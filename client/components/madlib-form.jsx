import React from 'react';
import MadlibFormItem from './madlib-form-item';

export default class MadlibForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madlib: null,
      isComplete: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  componentDidMount() {
    this.getWords();
  }

  getWords() {
    fetch(`/api/madlib/${this.props.params.id}`)
      .then(res => res.json())
      .then(data => {
        const formData = {};
        for (const key in data.words) {
          formData[key] = '';
        }
        formData.userName = '';
        formData.madLibId = this.props.params.id;
        this.setState({
          madlib: data,
          formData: formData
        });
      })
      .catch(err => console.error(err));
  }

  handleChange(event) {
    const formData = Object.assign({}, this.state.formData);
    const { id, value } = event.target;
    formData[id] = value;
    this.setState({ formData });
  }

  validateInputs() {
    const { formData } = this.state;
    let formComplete = true;
    for (const key in formData) {
      if (formData[key].length < 1) {
        formComplete = false;
      }
    }
    if (!formComplete) {
      this.setState({ isComplete: false });
    } else {
      this.props.setView('madlibSubmit', this.state.formData);
    }
  }

  render() {
    const formItems = [];
    if (this.state.madlib) {
      for (const key in this.state.madlib.words) {
        const formItem = <MadlibFormItem
          key={key}
          id={key}
          label={this.state.madlib.words[key]}
          handleChange={this.handleChange}
        />;
        formItems.push(formItem);
      }
    }
    return (
      <div className="container">
        <form className="row">
          <div className="form-group col-12">
            <label htmlFor="userName">Your Name</label>
            <input type="text" className="form-control" id="userName" onChange={this.handleChange}/>
          </div>
          {formItems}
        </form>
        <div className="row">
          <button
            type="button"
            className="btn submit-button"
            onClick={this.validateInputs}
          >
            Submit!
          </button>
        </div>
      </div>
    );

  }
}
