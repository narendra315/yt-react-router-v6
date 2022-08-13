import PrivateHeader from "../component/PrivateHeader";

function Dashboard() {
    return (
        <div>
            <PrivateHeader />
            Add User Page<br /><br />
            <input placeholder="User Full Name" /><br />
            <input placeholder="Login Email" /><br />
            <input placeholder="Login Password" /><br />
            <button>Submit</button>
        </div>
    );
}

export default Dashboard;