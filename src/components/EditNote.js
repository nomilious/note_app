import React from "react";
import {Card, Input, Divider, Button} from "antd";
import { useSelector, useDispatch } from "react-redux";
import {createNote, deleteNote, setSelectedNote, updateNoteDescription, updateNoteTitle} from "../reduxStore/actions";
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";

function EditNote() {
    const dispatch = useDispatch();
    const selectedNote = useSelector((state) => state.selectedNote);
    const data = useSelector((state) => state.data);
    const note = data[selectedNote];
    const isLastNoteEmpty = data.length > 0 && data[data.length - 1].title === "" && data[data.length - 1].description === "";
    const cantDelete = data.length <=1;

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
    const handleDeleteNote = () => {
        dispatch(deleteNote(selectedNote));
        if (selectedNote > 0) {
            dispatch(setSelectedNote(selectedNote - 1));
        } else if (data.length > 1) {
            dispatch(setSelectedNote(data.length-2));
        } else {
            dispatch(setSelectedNote(0));
        }
    };

    return (
        <Card
            className={"scrollable-container"}
            title={
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                        icon = {<FormOutlined />}
                        type="danger"
                        style={{
                            cursor: isLastNoteEmpty ? "not-allowed" : "pointer",
                            color: isLastNoteEmpty ? "#ccc" : "inherit" }}
                        onClick={createNewNote}
                        disabled={isLastNoteEmpty}
                    >
                        New Note
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        type="danger"
                        style={{
                            cursor: isLastNoteEmpty ? "not-allowed" : "pointer",
                            color: cantDelete ? "#ccc" : "inherit",
                            marginLeft: "auto",
                        }}
                        onClick={handleDeleteNote}
                        disabled={cantDelete}
                    >
                        Delete Note
                    </Button>
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