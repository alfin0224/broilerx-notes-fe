import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import Button from "@material-tailwind/react/Button";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import moment from 'moment';

export default function NoteDetailCard() {
  const { id } = useParams();
  const history = useHistory();
  const [note, setNote] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((error) => {
        console.error("Error fetching note:", error);
      });
  }, [id]);
  return (
    <Card>
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center py-4 lg:pt-4 pt-8"></div>
      </div>

      {note ? (
        <div>
          <div className="text-center">
            <H5 color="gray">{note.title}</H5>
            <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
              {moment(note.timestamp).format("DD MMMM YYYY")}
            </div>
          </div>
          <CardBody>
            <div className="border-t border-lightBlue-200 text-center px-2 ">
              <LeadText color="blueGray">{note.content}</LeadText>
            </div>
          </CardBody>
          <CardFooter>
            <div className="w-full flex justify-center -mt-8">
              <a
                href="#pablo"
                className="mt-5"
                onClick={(e) => e.preventDefault()}
              >
                <Button
                  color="purple"
                  buttonType="link"
                  ripple="dark"
                  onClick={() => history.push("/")}
                >
                  Kembali
                </Button>
              </a>
            </div>
          </CardFooter>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
}
