
import CustomInput from './components/input-component';
import { useRef } from 'react';
import reactImage from './assets/react.svg'
import './App.css'


function App() {
  const inputRef = useRef<HTMLInputElement>(null);

const showData = () => { alert(inputRef.current?.value ? inputRef.current?.value : 'Nothing to show') }

  return (
    <div>
      <h1>Custom Input</h1>
      <CustomInput inputProps={{placeholder:'user', type:'text'}} ref={inputRef} src={reactImage} />
      <button className='btn' onClick={showData}>Send User</button>
    </div>
  );
}

export default App;
