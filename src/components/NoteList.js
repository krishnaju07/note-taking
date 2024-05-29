import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit }) => (
  <div className="note-list">
    {notes.map(note => (
      <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
    ))}
  </div>
);

export default NoteList;
