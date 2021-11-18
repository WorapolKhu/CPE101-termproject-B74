import "./App.css";
import React from 'react';
import Navbar from './navbar/navbar';
import Content from './content/content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <header className="App-header">Hello world</header>
    </div>
  );
}
export default App;
