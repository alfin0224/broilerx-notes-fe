import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Digunakan untuk menggantikan BrowserRouter

import App from './App';
import Sidebar from './components/Sidebar';
import NoteDetail from './pages/NoteDetail';
import Note from './pages/Note';
import Footer from './components/Footer';

test('App component renders correctly', () => {
  // Merender komponen App dalam konteks MemoryRouter
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Memeriksa apakah komponen Sidebar ada
  const sidebarElement = screen.getByTestId('sidebar');
  expect(sidebarElement).toBeInTheDocument();

  // Memeriksa apakah komponen Note ada (menggunakan rute /)
  const noteRoute = screen.getByTestId('note-route');
  expect(noteRoute).toBeInTheDocument();

  // Memeriksa apakah komponen Footer ada
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});
