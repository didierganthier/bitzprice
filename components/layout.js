import NavBar from "./navbar";
import Head from "next/head";

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
        </Head>
        <NavBar/>
        <div className="container px-2 py-2">
            {props.children}
        </div>
    </div>
);

export default Layout;