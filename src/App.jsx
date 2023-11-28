// import Home from 'pages/Home/Home';
// import { Route, Routes } from 'react-router-dom';
// import { Lauout } from './Layout/Layout';
// import { Registration } from './Registration/Registration';

import { AboutUs } from "components/AboutUs/AboutUs";
import { Header } from "./components/Header/Header";
import { Welcome } from "./components/Welcome/Welcome"
import { LoveProblem } from "components/LoveProblem/LoveProblem";

// import { LoginPage } from 'pages/Login/Login';

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Lauout />}>
    //     <Route index element={<Home />} />
    //     <Route path='registration' element={<Registration />} />
    //     <Route path='login' element={<LoginPage />} />
    //   </Route>
    // </Routes>
    <>
     <Header />
      <Welcome />
      <AboutUs />
      <LoveProblem />
    </>
   
  );
};
