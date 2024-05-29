import React from 'react';

const Note = ({ note, onDelete, onEdit }) => (
  <div className="note">
    <h2>{note.title}</h2>
    <p>{note.content}</p>
    <button onClick={() => onEdit(note.id)}>Edit</button>
    <button onClick={() => onDelete(note.id)}>Delete</button>
  </div>
);

export default Note;
