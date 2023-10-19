// src/components/AddNoteForm.js
import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function AddNoteForm() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const apiUrl = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  const addNote = async () => {
      await axios
        .post(`${apiUrl}/notes`, {
          title: title,
          content: content,
        })
        .then((response) => {
          Swal.fire({
            title: "Sukses",
            icon: "success",
            text: "Catatan baru berhasil tersimpan.",
            timer: 1000,
            timerProgressBar: true,
          }).then(() => {
            setNotes([...notes, response.data]);
            setTitle("");
            setContent("");
            history.push(0);
          });
        })
        .catch((error) => {
          console.error("Error adding note:", error);
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Judul dan konten catatan harus diisi");
      return;
    }

    addNote();
  };

  return (
    <Card data-testid="add-note-form">
      <CardHeader color="yellow" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Buat Catatan Baru</h2>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Judul Catatan
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Tulis judul catatan disini..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Konten Catatan
          </h6>
          <div className="flex flex-wrap mt-5 font-light">
            <Textarea
              color="purple"
              placeholder="Tulis konten catatan disini..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <Button type="submit">Simpan Catatan</Button>
        </form>
      </CardBody>
    </Card>
  );
}
