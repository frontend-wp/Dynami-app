import { useState } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Editor() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);
  const [username, setUserName] = useState('Shabti');

  function handleClick() {
    setLikes(likes + 1);
  }

  function handleChangeName(e){
    setUserName(e.target.value);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />

     <p>Hello there, {username}</p>
     <input 
        value={username} 
        onChange={handleChangeName}
    />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
        
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}