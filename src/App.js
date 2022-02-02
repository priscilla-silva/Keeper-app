import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';
import './App.css';

function App() {

return (

    <div className="App">
        <Header />

            <Notes />

        <Footer />
    </div>

);
}

export default App;