// src/components/NoteCard.js
import React, { useState, useEffect } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from '@material-tailwind/react/Button';
import Icon from "@material-tailwind/react/Icon";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import Swal from "sweetalert2";

export default function NoteCard() {
  const history = useHistory();
  const [notes, setNotes] = useState([]);
  const apiUrl = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${apiUrl}/notes`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  const deleteNote = async (id) => {
    axios
      .delete(`${apiUrl}/notes/${id}`)
      .then(() => {
        const updatedNotes = notes.filter((note) => note._id !== id);
        setNotes(updatedNotes);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };

  const deleteConfirm = (id) => {
    try {
      Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Anda ingin menghapus catatan ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f29727",
        cancelButtonColor: "#48ca40",
        confirmButtonText: "Ya, hapus",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteNote(id);
          Swal.fire({
            title: "Sukses",
            icon: "success",
            text: "Catatan berhasil dihapus.",
            timer: 3000,
          }).then((result) => {
            if (result) {
              history.push(0);
            }
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card>
      <CardHeader color="yellow" contentPosition="left">
        <h2 className="text-white text-2xl">List Catatan</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Judul Catatan
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Tanggal Dibuat
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr key={note._id}>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Button color="purple" buttonType="link" ripple="dark">
                      <Link to={`/note/${note._id}`}>{note.title}</Link>
                    </Button>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {moment(note.timestamp).format('DD MMMM YYYY')}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <button onClick={() => deleteConfirm(note._id)}><Icon name="delete" size="xl" /></button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
