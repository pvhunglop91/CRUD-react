import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalAddNewUser from './components/ModalAddNewUser';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';

function App() {

  const [isShowModal, setIsShowModal] = useState(false);

  const handleClose = () => {
    setIsShowModal(false)
    // console.log(setIsShowModal)
  }
  return (
    <div className="app-container">
      <Header></Header>

      <Container>
        <div className='my-3 add-new'>
          <span><b>List Users:</b></span>
          <button className='btn btn-success' onClick={() => setIsShowModal(true)}>Add New User</button>
        </div>
        <TableUsers></TableUsers>
        <ModalAddNewUser
          show={isShowModal}
          handleClose={handleClose}>
        </ModalAddNewUser>
      </Container>
    </div>
  );
}

export default App;
