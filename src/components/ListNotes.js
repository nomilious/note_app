import { theme, ConfigProvider} from 'antd'; // Import Spin component
import {  List,  } from "antd";
function ListNotes() {
    return (
        <ConfigProvider
            theme={{
                algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
            }}
        >
            <List
                bordered
                header={<div>Заметки</div>}
            />
        </ConfigProvider>
    );
}


export default ListNotes;