import {Card, Typography} from "antd";
import {useSelector } from 'react-redux';

function EditNote() {
    // const dispatch = useDispatch();
    const selectedNote = useSelector(state => state.selectedNote)
    const data = useSelector(state => state.data)
    const note = data[selectedNote];

    return (
        <Card
            title={<a href="#">More</a>}
        >
            <Typography.Title level={2}>{note.title}</Typography.Title>
            <Typography.Text>{note.description}</Typography.Text>
        </Card>
    )
}


export default EditNote;