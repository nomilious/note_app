import Edit from "./Edit"
import ListNotes from "./ListNotes"
import {Col, Row} from 'antd';
function Body() {
    return (
        <>
            <Row gutter={[{xs: 2, sm: 8, md: 16}, {xs: 2, sm: 8, md: 16}]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} key={1}>
                    <ListNotes />
                </Col>
                <Col xs={12} sm={12} md={18} lg={18} xl={18} key={2}>
                    <Edit />
                </Col>
            </Row>
        </>
    );
}


export default Body;