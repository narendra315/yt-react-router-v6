import { Routes, Route, useParams } from "react-router-dom";
import PrivateHeader from "../component/PrivateHeader";

function Dashboard() {
    let params = useParams();
    const userId = params.id;
    return (
        <div>
            <PrivateHeader />
            User Detail Page<br />
            userId: <i>{userId}</i>
        </div>
    );
}

export default Dashboard;