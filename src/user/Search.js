import { useLocation } from "react-router-dom";
import PrivateHeader from "../component/PrivateHeader";

function Dashboard() {
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    const queryParam = params.get('q');

    return (
        <div>
            <PrivateHeader />
            <h4>Search User Page</h4>
            query parameter: <i>{queryParam}</i>
        </div>
    );
}

export default Dashboard;