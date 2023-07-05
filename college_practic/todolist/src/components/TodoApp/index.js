import React, { useState } from 'react';
import './styles.scss'
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className='title'>To do list</h1>
        <form onSubmit={this.handleSubmit} className='input__info'>
          <div className='input__container'>
            <input className='input'
              placeholder='What is your task?'
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className='input__btn'>
              Add
              {/* #{this.state.items.length + 1} */}
            </button>
          </div>
          <TodoList className='list' items={this.state.items} />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className='list'>
        {this.props.items.map(item => (

          <li onClick={(e) => console.log(e.className="list__item2")} className='list__item' key={item.id}>
            <input className='checkbox' type="checkbox" />{item.text}
          </li>
        ))}
      </ul>
    );
  }
}
export default TodoApp;