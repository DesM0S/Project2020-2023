import React from 'react';
// import './styles.scss';

function List() {
  return (
    <div className='input__info'>
      <h1 className='title'>To do list</h1>
      <div className='input__container'>
        <input className='input' placeholder='Input your worled' />
        <button className='input__btn' onClick={() => console.log('eee')}>Add</button>
      </div>
    </div>
  );
}

export default List;
