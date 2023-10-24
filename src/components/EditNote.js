import React from "react";
import { Card, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateNoteDescription, updateNoteTitle } from "../reduxStore/actions";

function EditNote() {
    const dispatch = useDispatch();
    const selectedNote = useSelector((state) => state.selectedNote);
    const data = useSelector((state) => state.data);
    const note = data[selectedNote];

    const handleDescriptionChange = (newDescription) => {
        dispatch(updateNoteDescription(newDescription));
    };

    const handleTitleChange = (newTitle) => {
        dispatch(updateNoteTitle(newTitle));
    };

    return (
        <Card
            title={<a href="#">More</a>}
            style={{ borderRadius: 10, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
        >
            <Input
                value={note.title}
                bordered={false}
                onChange={(e) => handleTitleChange(e.target.value)}
                style={{ marginBottom: 16, fontSize: "20px" }}
            />
            <Input.TextArea
                value={note.description}
                bordered={false}
                autoSize={true}
                onChange={(e) => handleDescriptionChange(e.target.value)}
            />
        </Card>
    );
}

export default EditNote;