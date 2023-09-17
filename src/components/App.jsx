import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Lauout } from './Layout/Layout';
import { Registration } from './Registration/Registration';
import { Login } from './Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Lauout />}>
        <Route index element={<Home />} />
        <Route path='registration' element={<Registration />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};
