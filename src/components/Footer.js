import {Layout, Typography} from "antd";


function Footer() {
    return (
        <Layout.Footer
            style={{alignItems: 'center', backgroundColor: "rgb(26 27 30)",}}
        >
            <Typography.Text style={{color:"white"}}>
                Site developed by Edward Belik
                <Typography.Link href={"https://github.com/nomilious/note_app"}> github repository</Typography.Link>
            </Typography.Text>

        </Layout.Footer>
    );
}
export default Footer;