import React from 'react';
import { render, screen, act } from '@testing-library/react';
import NoteCard from './NoteCard';

test('NoteCard component renders correctly', () => {
  // Menyiapkan data palsu yang akan digunakan dalam tes
  const mockNotes = [
    {
      _id: '1',
      title: 'Catatan Pertama',
      timestamp: '2023-10-19T12:00:00Z', // Tanggal dalam format ISO
    },
    {
      _id: '2',
      title: 'Catatan Kedua',
      timestamp: '2023-10-20T14:30:00Z',
    },
  ];

  // Merender komponen NoteCard dengan data palsu
  render(<NoteCard notes={mockNotes} />);
  const titleElement = screen.getByText('List Catatan');
  expect(titleElement).toBeInTheDocument();
});