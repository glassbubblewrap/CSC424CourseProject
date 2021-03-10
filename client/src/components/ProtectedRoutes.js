// import React, { useState } from 'react'
// import { Redirect, Route } from 'react-router-dom'


// const ProtectedRoute = async ({component, ...rest}) =>{

   // const [loggedIn,setloggedIn] = useState(false)

    // await fetch('http://localhost:4000/checkIfloggedIn', {
      
    //     method:'GET',
    //     origin: 'http:localhost:4000',
    //     credentials: 'include'
      
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.user){
    //            setloggedIn(true)
    //         }else{
    //           setloggedIn(false)
    //         }
    //     } )

//     return(

//         <Route {...rest} render= {
//             props =>{  
//                 if(loggedIn){
//                    return <component{...rest}{...props} />
//                 }
//                 else{
//                     return <Redirect to='/login'/>
//                 }
//         }
//          } />
//     )
// }
// export default ProtectedRoute;