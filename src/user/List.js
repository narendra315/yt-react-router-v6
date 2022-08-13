import { Link } from "react-router-dom";
import PrivateHeader from "../component/PrivateHeader";
import constant from "../constant";

function Dashboard() {
    return (
        <div>
            <PrivateHeader />
            <h4>User List Page</h4>
            <div>
                <Link to={constant.component.addUser.url}>Add New</Link>
                <form method="GET" action={constant.component.searchUser.url} style={{ display: 'inline' }}>
                    <input type="text" name="q" placeholder="search user by name" style={{ marginLeft: 16 }} />
                </form>
            </div>

            <br /><br />
            <Link to={constant.component.userDetail.url.replace(':id', 1)}>Narendra Singh</Link><br />
            <Link to={constant.component.userDetail.url.replace(':id', 2)}>Sachin Singh</Link><br />
            <Link to={constant.component.userDetail.url.replace(':id', 3)}>Rahul Singh</Link><br />
        </div>
    );
}

export default Dashboard;