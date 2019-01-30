import React from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';
import News from '../components/News';
import DetailNew from '../components/DetailNew';
import NotFound from '../components/Not_Found';


const routes =[

    {
        path:'/',
        exact:true,
        main: ()=> <Home/>
    },
    {       
        path:'/Contact',
        exact:false,
        main: ()=> <Contact/>

    },
    {
        
        path:'/News',
        exact:false,
        main: ({match})=> <News match={match}/>


    },
    {
        
        path:'/Detail-New/:slug.:id.html',
        exact:false,
        main: ({match})=> <DetailNew match={match}/>

    },
    {
        path:'',
        exact:false,
        main: ({match} )=><NotFound  match={match} />

    }


]
export default routes;