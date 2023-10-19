// src/pages/NoteDetail.js
import NoteDetailCard from '../components/NoteDetailCard';

export default function NoteDetail() {
    return (
        <div className="min-h-full">
            <div className="pt-14 pb-28 px-3 md:px-8 h-auto">
            </div>

            <div data-testid="note-detail-route" className="px-3 md:px-8 h-auto justify-center">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                            <NoteDetailCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
