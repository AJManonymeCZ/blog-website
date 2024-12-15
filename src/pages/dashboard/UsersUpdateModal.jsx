import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/users/Action";
import {useNavigate} from "react-router";

const UsersUpdateModal = ({show, handleClose, id}) => {
    const roles = ["admin", "editor"];
    const {users} = useSelector(store => store.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

    const handleSaveChanges = () => {
        dispatch(updateUser(users, user));
        setUser(user);
        handleClose();
        navigate("/dashboard/users");
    };
    
    useEffect(() => {
        const findUser = users.find(u => u.id === parseInt(id));
        if (findUser) {
            setUser(findUser);
        } else {
            setMessage("No user found with id:" + id);
        }
    }, [id, users]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        user
                            ?
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" value={user.name} onChange={e => setUser({...user, name: e.target.value})} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                                </div>
                                <select className="form-select" aria-label="Select Role" onChange={e => setUser({...user, role: e.target.value})}>
                                    {roles.map(r => <option selected={r === user.role}  value={r}>{r[0].toUpperCase() + r.slice(1, r.length)}</option>)}
                                </select>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={e => setUser({...user, password: e.target.value})} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Retype password</label>
                                    <input type="password" className="form-control" id="retype-password" onChange={e => setUser({...user, retypePassword: e.target.value})} />
                                </div>
                            </form>
                            :
                            message
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UsersUpdateModal;
