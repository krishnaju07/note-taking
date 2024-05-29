import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Search from './components/Search';
import { saveNotes, loadNotes } from './utils/localStorage';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState(loadNotes());
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const handleSaveNote = (note) => {
    setNotes(prevNotes => {
      const noteExists = prevNotes.find(n => n.id === note.id);
      if (noteExists) {
        return prevNotes.map(n => (n.id === note.id ? note : n));
      }
      return [...prevNotes, note];
    });
    setCurrentNote(null);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (id) => {
    const note = notes.find(note => note.id === id);
    setCurrentNote(note);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <Search onSearch={handleSearch} />
      <NoteForm currentNote={currentNote} onSave={handleSaveNote} />
      <NoteList notes={filteredNotes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
    </div>
  );
};

export default App;
