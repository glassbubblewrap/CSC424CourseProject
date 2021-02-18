import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const ProtectedRoute = ({component: Component, loggedin, ...rest}) =>{

    
    return(

        <Route {...rest} render= {
            props =>{  
                if(loggedin){
                   return <Component{...rest}{...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname:'/login',
                            state:{
                                from: props.location
                            }
                        }
                    }/>
                }
        }
         } />
    )
}
export default ProtectedRoute;