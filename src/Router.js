import { Routes, Route } from "react-router-dom";
import constant from './constant';

import Home from './misc/Home';
import About from './misc/About';
import Contact from './misc/Contact';

import Login from "./auth/Login";

import UserDashboard from "./dashboard/User";

import UserLayout from "./userWithOutlet/Layout";
import UserList from "./userWithOutlet/List";
import AddUser from "./userWithOutlet/Add";
import UserDetail from "./userWithOutlet/Detail";
import SearchUser from "./userWithOutlet/Search";


// import UserList from "./user/List";
// import AddUser from "./user/Add";
// import UserDetail from "./user/Detail";
// import SearchUser from "./user/Search";

import FourZeroFour from './misc/FourZeroFour';

function RouteComponent() {
    const { home, about, contact, login, dashboard, userList, addUser, userDetail, searchUser } = constant.component;
    return (
        <Routes>
            <Route path={home.url} element={<Home />} />
            <Route path={about.url} element={<About />} />
            <Route path={contact.url} element={<Contact />} />

            <Route path={login.url} element={<Login />} />

            <Route path={dashboard.url} element={<UserDashboard />} />

            {/* simple user list */}
            {/* <Route path={userList.url} element={<UserList />} />
            <Route path={addUser.url} element={<AddUser />} />
            <Route path={userDetail.url} element={<UserDetail />} />
            <Route path={searchUser.url} element={<SearchUser />} /> */}

            {/* user list with outlet */}
            <Route path="/user" element={<UserLayout />}>
                <Route index element={<UserList />} />
                <Route path="add" element={<AddUser />} />
                <Route path="search" element={<SearchUser />} />
                <Route path=":id" element={<UserDetail />} />
            </Route>


            <Route path="*" element={<FourZeroFour />} />
        </Routes>
    )
}

export default RouteComponent;