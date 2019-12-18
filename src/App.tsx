import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Rainbow from './components/Rainbow/Rainbow';
import Logo from './components/Logo/Logo';
import Card from './components/Card/Card';
import InputField from './components/InputField/InputField';
import Button from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div className="App">

      {/* TODO(sami): Add META description */}
      
      <Logo/>

      <div style={{width: "30%", minWidth: "300px", margin: "0 auto"}}>
      
        <Card hasRainbow>
          <h1 style={{color: "#282c34"}}>welcome back 📈</h1>
          <InputField placeholder={'username'}/>
          <InputField placeholder={'password'}/>
          <Button label={'Sign in'} primary/>
        </Card>
      
        <Rainbow stretch={true}/>

      </div>
    </div>
  );
}

export default App;
