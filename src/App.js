
import './App.css';
import Props from './components/Props';
import UsingStateHook from './components/UseStateHook';
import UsingrefHook from './components/UsingrefHook';
import FuncA from './components/UserContextHook/FuncA';
import Context, {UserProvider} from './components/UserContextHook/ContextApi';
import USingCallBackHook from './components/USingCallBackHook';



function App() {
  
  return (
    <div className="App">
      {/* <Props  name="Ayesha Razzaq"/>
      <UsingStateHook />
       <UsingrefHook />

      <Context.Provider  value="Ayesha Razzaq">
      <FuncA />
      </Context.Provider> */}

      <USingCallBackHook />
    
     
      
       
    </div>
  );
} 

export default App;
