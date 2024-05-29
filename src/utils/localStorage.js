export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const loadNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  