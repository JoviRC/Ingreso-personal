import React, { useEffect, useState, createContext } from "react";
import { helpHttp } from "../Helpers/helpHttp";

export const TestAdminContext = createContext({})

export const TestAdminApi = (props) => {

    const [dbAdmin, setDbAdmin] = useState(null);
    const [adminToEdit, setAdminToEdit] = useState(null);
    const [error, setError] = useState(null);
  
    let api = helpHttp();
    let url = "http://localhost:5000/AdminUser";
  
    useEffect(() => {
      // setLoading(true);
      helpHttp()
        .get(url)
        .then((res) => {
          //console.log(res);
          if (!res.err) {
            setDbAdmin(res);
            setError(null);
          } else {
            setDbAdmin(null);
            setError(res);
          }
          // setLoading(false);
        });
    }, [url]);


    return (
        <TestAdminContext.Provider value= {dbAdmin}>
            {props.children}
        </TestAdminContext.Provider>
    )
}
