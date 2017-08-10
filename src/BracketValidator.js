import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const propTypes = {
  inspector: PropTypes.func.isRequired,
}

class BracketValidator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      bracketError: '',
    }

    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  handleCodeChange(event) {
    const code = event.target.value
    const bracketError = this.props.inspector(code)
    this.setState({
      code,
      bracketError,
    })
  }

  getValidationState() {
    return this.state.bracketError ? 'error' : 'success'
  }

  render() {
    return (
      <form action="">
        <FormGroup controlId="formControlsTextarea" validationState={this.getValidationState()}>
          <ControlLabel>Balanced Bracket Checker</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="console.log('Hello World!')"
            style={{ fontFamily: 'monospace' }}
            rows={20}
            value={this.state.code}
            onChange={this.handleCodeChange}
          />
          {this.state.bracketError
            ? <HelpBlock>{this.state.bracketError}</HelpBlock>
            : <HelpBlock>All is balanced.</HelpBlock>
          }
        </FormGroup>
      </form>
    );
  }
}

BracketValidator.propTypes = propTypes

export default BracketValidator;
