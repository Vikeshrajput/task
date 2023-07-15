import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import SignIn from './components/SignIn';
import Root from './components/Root';
import LandingPage from './components/Home';
import NewTicket from './components/NewTicket';

function App() {
  const router = createBrowserRouter([
    {path: '/task', element: <SignIn />},
    {path: '/task/home', element: <Root />, children: [
      {path: '/task/home/', element: <LandingPage />},
      {path: '/task/home/ticket', element: <NewTicket />},
    ]},
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
