import {Route, Routes} from 'react-router-dom';
import { Home } from '../Home/Home';
import {Navbar } from '../Navbar/Navbar';
import { SignIn } from '../Auth/SignIn';
import { SignUp } from '../Auth/SignUp'
import { Airport } from '../Airport/Airport';
import {Flight} from '../Flight/Flight'

export const AllRoutes = () => {

    return (
        <div>
            <Navbar />
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/flight" element={<Flight />} />
                <Route path="/airport" element={<Airport />} />
            </Routes>
        </div>
    )
}