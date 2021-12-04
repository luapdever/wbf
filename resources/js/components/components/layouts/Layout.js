import Topbar from "./Topbar";

function Layout(props) {
    return (
        <div>
            <Topbar />
            <div>{props.children}</div>
        </div>
    );
}

export default Layout;
