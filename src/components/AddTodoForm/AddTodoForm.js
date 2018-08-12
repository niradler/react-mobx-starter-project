import React, { Component } from 'react';
import { observer } from 'mobx-react';
import FormConfig from './form';
const form = new FormConfig();

@observer
class AddTodoForm extends Component {
  render() {
    return (
    <form onSubmit={form.onSubmit}>
    <label htmlFor={form.$('todo').id}>
      {form.$('todo').label}
    </label>
    <input {...form.$('todo').bind()} />
    <p>{form.$('todo').error}</p>

    {/* ... other inputs ... */}

    <button type="submit" onClick={form.onSubmit}>Submit</button>
    <button type="button" onClick={form.onClear}>Clear</button>
    <button type="button" onClick={form.onReset}>Reset</button>

    <p>{form.error}</p>
  </form>
    );
  }
}

export default AddTodoForm;