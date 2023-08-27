import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Conditions from './pages/Conditions/Conditions';
import Club from './pages/Club/Club';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Main />}/>
                <Route path='/conditions' element={<Conditions/>}/>
                <Route path='/club' element={<Club/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
