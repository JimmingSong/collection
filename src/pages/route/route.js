import About from "../../pages/aboutMe";
import Rooroy from "../../pages/rooroy";
import Good from "../../pages/good";
import Akzen from "../../pages/akzen";
import Home from '../../pages/home'
import PartList from '../../pages/home/partList'
import Login from '../../pages/login'

export default [
    {path: '/home',component:Home},
    {path: '/aboutMe',component:About},
    {path: '/part01',component:Rooroy},
    {path: '/part02',component:Good},
    {path: '/part03',component:Akzen},
    {path: '/part-list',component:PartList},
    {path: '/login',component:Login}
];
