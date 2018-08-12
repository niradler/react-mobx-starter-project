import { Form } from 'mobx-react-form';
import validatorjs from 'validatorjs';
import TodoStore from '../../stores/TodoStore';
class AddTodoForm extends Form {

  /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
  */
  plugins() {
    return { dvr: validatorjs };
  }

  /*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */
  setup() {
    return {
      fields: [{
        name: 'todo',
        label: 'Todo',
        placeholder: 'Insert Todo',
        rules: 'required|string|min:1',
      }],
    };
  }

  /*
    Event Hooks
  */
  hooks() {
    return {
      /*
        Success Validation Hook
      */
      onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
        TodoStore.addTodo(form.values().todo);
      },
      /*
        Error Validation Hook
      */
      onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
      }
    };
  }
}

export default AddTodoForm;