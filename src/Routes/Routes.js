import React from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';
import News from '../components/News';
import DetailNew from '../components/DetailNew';
import NotFound from '../components/Not_Found';
import Login from '../components/Login';


const routes =[

    {
        path:'/',
        exact:true,
        main: ({match,location})=> <Home match={match} location={location}/>
    },
    {       
        path:'/Contact',
        exact:false,
        main: ({match,location})=> <Contact match={match} location={location}/>

    },
    {
        
        path:'/News',
        exact:false,
        main: ({match,location})=> <News match={match} location={location}/>


    },
    {
        
        path:'/Detail-New/:slug.:id.html',
        exact:false,
        main: ({match})=> <DetailNew match={match}/>

    },
    {
        path:'/Login',
        exact:false,
        main: ({match,location} )=><Login  match={match} location={location} />

    },  
    {
        path:'',
        exact:false,
        main: ({match} )=><NotFound  match={match} />

    }
   


]
export default routes;