import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';

function App() {


  return (
    <div className="app-container">
      <Header></Header>

      <Container>
        
        <TableUsers></TableUsers>

      </Container>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
