import React from 'react';
import { render, screen } from '@testing-library/react';
import Note from './Note';

test('Note page renders NoteCard and AddNoteForm', () => {
  render(<Note />);

  // Memeriksa apakah komponen NoteCard ada
  const noteCard = screen.getByTestId('note-card');
  expect(noteCard).toBeInTheDocument();

  // Memeriksa apakah komponen AddNoteForm ada
  const addNoteForm = screen.getByTestId('add-note-form');
  expect(addNoteForm).toBeInTheDocument();
});
