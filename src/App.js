import React from 'react';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
    </div>
  );
}

export default App;
