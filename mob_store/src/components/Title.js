import React from 'react';

export default function Title({ name, title }) {
  return (
    <div className="title">
      <h1 className="title__text">
        {name} <strong className="text-blue">{title}</strong>
      </h1>
    </div>
  );
}
