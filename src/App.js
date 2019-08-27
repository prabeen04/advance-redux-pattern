import React from 'react';
import './App.css';
import User from './models/UserModel';
import ThemeSwitch from './modules/settings/theme/ThemeSwitch';

function App() {
  const person = new User({ id: 1, firstName: 'test', middleName: 'test2', lastName: 'test3' })
  console.log(person.getFullName())
  return (
    <div>
      <h1>Advance redux pattern</h1>
      <ThemeSwitch/>
    </div>
  );
}

export default App;
