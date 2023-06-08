import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createUser } from '../services/UserService';

const ModalAddNewUser = (props) => {

    const { show, handleClose } = props;
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleClickAddUser = async () => {
        let res = await createUser(name, job)
        console.log(res)
        if (res && res.id) {
            //success
            handleClose();
            setName('');
            setJob('');
            // alert("thanh cong")s
        }
        else {
            // error
        }
        // console.log("check>>", "name: ", name, "job", job)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Job</label>
                        <input type="text" className="form-control" value={job} onChange={(event) => setJob(event.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleClickAddUser()} >
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default ModalAddNewUser