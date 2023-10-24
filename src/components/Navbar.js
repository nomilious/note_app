import {Layout, Typography} from "antd";


function Navbar() {
    return (
        <Layout.Header
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: "rgb(26 27 30)",
            }}
        >
            <Typography.Title style={{color:"white"}}>
                NoteMe
            </Typography.Title>
        </Layout.Header>
    );
}
export default Navbar;