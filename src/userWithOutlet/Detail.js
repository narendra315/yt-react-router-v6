import { Routes, Route, useParams } from "react-router-dom";

function Dashboard() {
    let params = useParams();
    const userId = params.id;
    return (
        <div>
            User Detail Page<br />
            userId: <i>{userId}</i>
        </div>
    );
}

export default Dashboard;