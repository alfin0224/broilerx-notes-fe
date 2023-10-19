// src/pages/Note.js
import NoteCard from '../components/NoteCard';
import AddNoteForm from '../components/AddNoteForm';

export default function Note() {
    return (
        <div data-testid="note-route" className="min-h-screen">
            <div className="pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24" data-testid="add-note-form">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                            <AddNoteForm/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto" data-testid="note-card">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <NoteCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
