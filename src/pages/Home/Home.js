import React, { Component } from 'react';
import AddTodoForm from '../../components/AddTodoForm';
import TodoList from '../../components/TodoList'
import {Helmet} from "react-helmet";
import Image from "react-graceful-image";
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

@inject('todoStore')
@observer
class Home extends Component {
  render() {
    const todos =  this.props.todoStore.todos;
    return (
    <div className="Home">
      <Title>Home</Title>

      <Image
        src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png"
        width="300"
        height="300"
        alt="My awesome image"
      />

      <AddTodoForm />

      { todos.length > 0 && <TodoList todos={todos}/> }
      
      <Helmet>
                <title>Home</title>
      </Helmet>
    </div>
    );
  }
}

export default Home;
