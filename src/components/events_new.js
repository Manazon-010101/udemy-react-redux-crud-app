import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { postEvent } from '../actions'

class EventsNew extends Component {
  // ↓onSubmitがイニシャライズした時にバインドされる
  // こうすることでこのclassのインスタンスでこのonSubmitのメソッドが使える状態になる
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  // ↓非同期処理
  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }
  render() {
    // ↓handleSubmitと言う関数はrenderが実行された時に渡ってくる関数
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/" >Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."
  return errors
}
const mapDispatchToProps = ({ postEvent })

// ↓mapDispatchToProps をconnectでバインドする。
// このComponentに関連づくactionである事を指定する為の処理を書かないとエラーになる。
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
