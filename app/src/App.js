import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContaiter';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar store={props.store} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile/' element={<ProfileContainer />} />            {/* react router v6 */}
          <Route path='/users/' element={<UsersContainer />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;