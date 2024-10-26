import { useState } from 'react';
import './App.css';
import SimpleCard from './components/SimpleCard';
import { IUser } from './interfaces/user.interface';

function App() {
 
  const [users, setUsers] = useState<IUser[]>([])

  const hello =(key:string) => { 
    console.log(key)
  }
  return (
    <div>
    <SimpleCard name="Saba" surname="Foladashvili" age={15} sayHello={hello}/>

    </div>
  );
}

export default App;
