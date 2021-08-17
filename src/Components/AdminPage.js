import React,{useState} from 'react'

export const AdminPage = ({admin}) => {

    return (
        <>
        <h1>Bienvenido {admin.map(a=> a.name)}</h1>
        <hr/>
        
        
        </>
    )
}
