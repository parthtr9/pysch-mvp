
import React from 'react';
import TopicCard from './TopicCard';

const TopicList = ({ topics }) => {
  return (
    <div className="topic-list">
      {topics.map(topic => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
