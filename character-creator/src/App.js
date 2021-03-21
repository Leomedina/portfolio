import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import BackgroundBar from './components/BackgroundBar';

function App() {
  return (
    <>
      <BackgroundBar />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
