import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../../redux/users/Action";
import {useNavigate} from "react-router";
import UsersUpdateModal from "./UsersUpdateModal";

const Users = () => {
    const {users} = useSelector(store => store);
    const {auth} = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        dispatch(deleteUser(users.users, id))
        navigate("/dashboard/users");
    }

    const handleUpdate = (id) => {
        setId(id);
        handleShow();
    };

    return ( auth.user.previewRole === "admin" ?
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Users</h1>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                { users.users.map((u, i) =>
                    <tr key={i + 1}>
                        <td>{i}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.role}</td>
                        <td>
                            <button onClick={() => handleUpdate(u.id)} type="button" className="btn btn-warning btn-sm">Update</button>
                            <button onClick={() => handleDelete(u.id)} type="button" className="mx-3 btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <UsersUpdateModal show={show} handleClose={handleClose} id={id} />
        </>
            :
            <div>You dont have permission to access users</div>
    );
};

export default Users;
