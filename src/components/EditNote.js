import React from "react";
import {Card, Input, Divider, Button, ConfigProvider, theme} from "antd";
import { useSelector, useDispatch } from "react-redux";
import {createNote, deleteNote, setSelectedNote, updateNoteDescription, updateNoteTitle} from "../reduxStore/actions";
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";

function EditNote() {
    const dispatch = useDispatch();
    const selectedNote = useSelector((state) => state.selectedNote);
    const data = useSelector((state) => state.data);
    const note = data[selectedNote];
    const isNewNoteEmpty = data[0].title === "" && data[0].description === "";
    const cantDelete = data.length <=1;

    const handleDescriptionChange = (newDescription) => {
        dispatch(updateNoteDescription(newDescription));
    };

    const handleTitleChange = (newTitle) => {
        dispatch(updateNoteTitle(newTitle));
    };
    const createNewNote = () => {
        dispatch(createNote())
        dispatch(setSelectedNote(0))
    }
    const handleDeleteNote = () => {
        dispatch(deleteNote(selectedNote));
    };

    return (
        <div className="scrollable-container" style={{ borderRadius: 10, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
            <Card
                title={
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            icon = {<FormOutlined />}
                            type={"text"}
                            style={{color: isNewNoteEmpty ? "#ccc" : "inherit" }}
                            onClick={createNewNote}
                            disabled={isNewNoteEmpty}
                        >
                            New Note
                        </Button>
                        <Button
                            icon={<DeleteOutlined />}
                            danger type={"text"}
                            style={{color: cantDelete ? "#ccc" : "inherit", marginLeft: "auto",}}
                            onClick={handleDeleteNote}
                            disabled={cantDelete}
                        >
                            Delete Note
                        </Button>
                    </div>
                }
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
        </div>
    );
}

export default EditNote;