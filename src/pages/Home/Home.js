import React, { Component } from 'react';
import AddTodoForm from '../../components/AddTodoForm';
import TodoList from '../../components/TodoList'
import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class Home extends Component {
  render() {
    const todos =  this.props.todoStore.todos;
    return (
    <div className="Home">
      <h1>Home</h1>

      <AddTodoForm />

      { todos.length > 0 && <TodoList todos={todos}/> }
      
    </div>
    );
  }
}

export default Home;
