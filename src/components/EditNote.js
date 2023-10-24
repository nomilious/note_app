import {Card, Typography} from "antd";
import {useSelector, useDispatch } from 'react-redux';
import {updateNoteDescription, updateNoteTitle} from "../reduxStore/actions";


function EditNote() {
    const dispatch = useDispatch();
    const selectedNote = useSelector(state => state.selectedNote)
    const data = useSelector(state => state.data)
    const note = data[selectedNote];
    const handleDescriptionChange = newDescription => {
        dispatch(updateNoteDescription(newDescription));
    };

    const handleTitleChange = newTitle => {
        dispatch(updateNoteTitle(newTitle));
    };

    return (
        <Card title={<a href="#">More</a>} style={{ borderRadius: 10, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <Typography.Title level={2} editable={{onChange: handleTitleChange}}>{note.title}</Typography.Title>
            <Typography.Text editable={{onChange: handleDescriptionChange}}>{note.description}</Typography.Text>
        </Card>
    )
}


export default EditNote;