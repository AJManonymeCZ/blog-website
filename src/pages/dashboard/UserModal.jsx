import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/users/Action";
import {useNavigate} from "react-router";

const UserModal = ({show, handleClose}) => {
    const roles = ["admin", "editor"];
    const {auth} = useSelector(store => store);
    const {users} = useSelector(store => store.users);
    const dispatch = useDispatch();
    const [role, setRole] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState(auth.user?.name);
    const [email, setEmail] = useState(auth.user?.email);
    const [password, setPassword] = useState(null);
    const [retypePassword, setRetypePassword] = useState(null);

    const handleSaveChanges = () => {
        dispatch(updateUser(users,{id: auth.user?.id, name: name, email: email, password: password, retypePassword: retypePassword }));
        handleClose();
        if (role) {
            auth.user.previewRole = role;
            setRole(null);
            navigate("/dashboard");
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <hr/>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Retype password</label>
                            <input type="password" className="form-control" id="retype-password" onChange={e => setRetypePassword(e.target.value)} />
                        </div>
                        { auth.user?.role === "admin" &&
                            <div className="col-12">
                                <hr/>
                                <label htmlFor="roles" className="form-label">Switch role</label>
                                <select id="roles" onChange={(e) =>  setRole(e.target.value)} className="form-select" aria-label="Select Role">
                                    {roles.map(r =>  <option selected={r === auth.user?.previewRole} value={r}>{r[0].toUpperCase() + r.slice(1, r.length)}</option>)}
                                </select>
                            </div>
                        }
                    </form>
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

export default UserModal;
