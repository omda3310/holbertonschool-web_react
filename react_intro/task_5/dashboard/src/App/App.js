import HolbertonSchool from '../assets/HolbertonSchool.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={HolbertonSchool} className="App-logo" alt="logo" />
        <h1> School dashboard </h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='for_container'>
          <label className='lab_email' for='email'>
            Email:
          </label>
          <input type='email' id='email' name='email' />
          <label className='lab_password' for='password'>
            Password:
          </label>
          <input type='password' id='pwd' name='pwd' minLength="8" required />
          <button className='buttonok'>
            OK
          </button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
