import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {BrowserRouter,Routes,Route, Form, Router} from 'react-router-dom';
import Main from './screens/main';
import Login from './screens/login';
import Link from './screens/link';
import Profile from './screens/profile';
import TabackaMeniu from './screens/tabackameniu';
import Zackaz from './screens/zackaz';
import Oformlenie from './screens/Oformlenie';
import Rew from './screens/wer';
import Adminpanel from './screens/admin panel';
const App=()=> {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/link' element={<Link/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/tabackameniu' element={<TabackaMeniu/>}/>
                <Route path='/zackaz' element={<Zackaz/>}/>
                <Route path='/oformlenie' element={<Oformlenie/>}/>
                <Route path='/rew' element={<Rew/>}/>
                <Route path='/adminpanel' element={<Adminpanel/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
 