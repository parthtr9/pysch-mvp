
import React, { useState, useEffect } from 'react';
import TopicList from './components/TopicList';
import './App.css';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('https://pysch-mvp-gc4h.vercel.app/api/topics')
      .then(response => response.json())
      .then(data => setTopics(data.topics));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Psychology Topics</h1>
      </header>
      <TopicList topics={topics} />
    </div>
  );
}

export default App;
