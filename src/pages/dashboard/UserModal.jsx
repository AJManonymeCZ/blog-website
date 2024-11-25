import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/users/Action";

const UserModal = ({show, handleClose}) => {
    const {auth} = useSelector(store => store);
    const {users} = useSelector(store => store);
    const dispatch = useDispatch();
    const [name, setName] = useState(auth.user?.name);
    const [email, setEmail] = useState(auth.user?.email);
    const [password, setPassword] = useState(null);
    const [retypePassword, setRetypePassword] = useState(null);

    const handleSaveChanges = () => {
        dispatch(updateUser(users.users,{ id:auth.user.id, name: name, email: email, password: password, retypePassword: retypePassword }));
        handleClose();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your acount</Modal.Title>
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
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Retype password</label>
                            <input type="password" className="form-control" id="retype-password" onChange={e => setRetypePassword(e.target.value)} />
                        </div>
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
