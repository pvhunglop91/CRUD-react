
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className='app-container'>
      <Header></Header>
      <Container>
        <TableUsers></TableUsers>
      </Container>
    </div>
  );
}

export default App;
