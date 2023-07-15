import {Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.clear()
        navigate('/task')
    }

    return (
        <nav>
            <div className="py-3 grid place-items-center bg-white w-100">
                <ul className='flex gap-4 text-2xl text-purple-800'>
                    <li><Link to="/task/home">Home</Link></li>
                    <li><Link to="/task/home/ticket">New Ticket</Link></li>
                    <li> <button className='rounded-2xl text-lg px-3 py-1 text-white bg-purple-500' onClick={logoutHandler}>Logout</button></li>
                </ul>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar;