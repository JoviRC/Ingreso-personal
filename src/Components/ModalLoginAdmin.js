import React, { useState } from "react";
import CrudApiUser from "../api/CrudApiUser";
import { TestAdminContext } from "../api/TestAdminApi";

export const ModalLoginAdmin = () => {
  const userAdmin = React.useContext(TestAdminContext);
  const [auth, setAuth] = useState(false);

  const handleChange = (e) => {
    userAdmin.map((admin) => (admin.id === parseInt(e.target.value) ? setAuth(true) : false));
  };

  if (auth) {
    return <CrudApiUser />;
  } else {
    return (
      <form>
        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={handleChange}
          autoComplete="off"
        />
      </form>
    );
  }
};
