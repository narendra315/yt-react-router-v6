import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h4>User List Page</h4>
            <Link to="1">Narendra Singh</Link><br />
            <Link to="2">Sachin Singh</Link><br />
            <Link to="3">Rahul Singh</Link><br />
        </div>
    );
}

export default Dashboard;