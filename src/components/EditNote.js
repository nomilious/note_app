import React from "react";
import { Card, Input, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {createNote, setSelectedNote, updateNoteDescription, updateNoteTitle} from "../reduxStore/actions";
import {FormOutlined} from "@ant-design/icons";

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
    const createNewNote = () => {
        dispatch(createNote())
        const newNoteIndex = data.length; // Index of the newly created note
        dispatch(setSelectedNote(newNoteIndex))
    }

    return (
        <Card
            className={"scrollable-container"}
            title={
                <div style={{ cursor: "pointer" }} onClick={createNewNote}>
                    <FormOutlined />
                </div>
            }
            style={{ borderRadius: 10, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
        >
            <Input
                value={note.title}
                bordered={false}
                onChange={(e) => handleTitleChange(e.target.value)}
                style={{ marginBottom: 16, fontSize: "20px" }}
            />
            <Divider />
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