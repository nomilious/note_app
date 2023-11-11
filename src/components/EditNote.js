import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import Quill styles
import { updateNoteDescription } from "../reduxStore/actions";

function EditNote() {
    const dispatch = useDispatch();

    const note= useSelector(state => state.data[state.selectedNote]);
    let toolbarOptions = [
        [{ 'size': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'font': [] }],

        [{ 'list': 'ordered'}, { 'list': 'bullet' }],

        ['clean']                                         // remove formatting button
    ];


    return (
        <div className="scrollable-container" style={{ borderRadius: 10, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", minHeight: "20em"}}>
            {/* ... (existing code remains unchanged) */}
            {/* EDITABLE Field for note description using Quill editor */}
            <ReactQuill
                value={note.description}
                onChange={newDescription => dispatch(updateNoteDescription(newDescription))}
                modules={{
                    toolbar: toolbarOptions, // Hide Quill's default toolbar
                }}
            />
        </div>
    );
}

export default EditNote;