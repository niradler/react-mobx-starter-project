import { observable, action } from 'mobx';
class TodoStore {
    @observable todos = [];
    
    @action
    addTodo = (todo) => {
      this.todos.push(todo);
    }
  }
  
const todoStore = new TodoStore();
  export default todoStore;