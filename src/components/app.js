import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { fetchMessages, updateMessage } from '../actions'
import { createErrorSelector, createLoadingSelector } from '../api/selectors'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      message: ''
    }

    this.submit = this.submit.bind(this);
  }
  componentWillMount(){
    this.props.fetchMessages();
  }
  submit(){
    this.props.updateMessage(this.state);
  }
  render() {
    if(this.props.isLoading)
      return <p>Loading...</p>
    return (
      <div>
        <p>Loading one: {String(this.props.isLoadingOne)}</p>
        <p>Loading two: {String(this.props.isLoadingTwo)}</p>
        <div>
          <input value={this.state.id} onChange={ev => this.setState({id: ev.target.value})}/>
          <input value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
          <button onClick={this.submit}>ok!</button>
        </div>
        <ul>
          {_.map(this.props.messages, msg => <li key={msg.id}>{msg.message}</li>)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    messages: state.messages,
    isLoading: createLoadingSelector(['FETCH_MESSAGES'])(state),
    isLoadingOne: createLoadingSelector(['UPDATE_MESSAGE'], 1)(state),
    isLoadingTwo: createLoadingSelector(['UPDATE_MESSAGE'], 2)(state)
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchMessages, updateMessage}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
