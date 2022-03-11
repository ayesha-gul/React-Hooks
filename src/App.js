
import './App.css';
import Props from './components/Props';
import UsingStateHook from './components/UseStateHook';
import UsingrefHook from './components/UsingrefHook';
import FuncA from './components/UserContextHook/FuncA';
import Context, {UserProvider} from './components/UserContextHook/ContextApi';
import Main from './components/UsecakbackHook/Main';
import DataFetch from './components/FetchingApiwithUseEffect/DataFetch';




function App() {
  
  return (
    <div className="App">
     {/* <Props  name="Ayesha Razzaq"/>
      <UsingStateHook />
       <UsingrefHook />
 
      <Context.Provider  value="Ayesha Razzaq">
      <FuncA />
      </Context.Provider> 
       <Main /> */}
       <DataFetch />
    
    
     
      
       
    </div>
  );
} 

export default App;
