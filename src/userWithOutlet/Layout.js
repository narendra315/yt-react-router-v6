import { Link, Outlet } from "react-router-dom";
import PrivateHeader from "../component/PrivateHeader";
import constant from "../constant";

function Dashboard() {
    return (
        <div>
            <PrivateHeader />
            <div>
                <Link to={constant.component.addUser.url}>Add New</Link>
                <form method="GET" action={constant.component.searchUser.url} style={{ display: 'inline' }}>
                    <input type="text" name="q" placeholder="search user by name" style={{ marginLeft: 16 }} />
                </form>
            </div>
            <br /><br />
            <Outlet />
        </div>
    );
}

export default Dashboard;