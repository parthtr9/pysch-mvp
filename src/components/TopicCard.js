
import React from 'react';

const TopicCard = ({ topic }) => {
  return (
    <div className="topic-card">
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
    </div>
  );
};

export default TopicCard;
