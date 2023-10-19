import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteDetail from "./pages/NoteDetail";
import Note from "./pages/Note";
import Footer from "./components/Footer";
import "./assets/styles/tailwind.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Note} />
          <Route path="/note/:id" component={NoteDetail} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
