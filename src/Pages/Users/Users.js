import React from 'react';
import './Users.css';
import { Footer } from '../../Footer/Footer';
import { Navbar } from '../../Navbar/Navbar';
console.log(Users);

export class Users extends React.Component {
  constructor() {
    super();
    this.users = {
      todos: [
        {
          name: 'Ivan',
          soname: 'Susanin',
          sex: 'man',
        },
        {
          name: 'Allbert',
          soname: 'Ballak',
          sex: 'man',
        },
        {
          name: 'Elizabet',
          soname: 'Dawson',
          sex: 'woman',
        },
      ],
    };
  }
  render() {
    let data = this.users.todos;
    let lists = data.map(function(list) {
      return <div> <p>{list.name} {list.soname}</p>  <p>sex: {list.sex}</p> <br></br></div>;
    });
    console.log(this.lists);
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          {lists}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
