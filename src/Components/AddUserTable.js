import React, { useState, useEffect } from "react";

const initailForm = {
  id: null,
  rut: "",
  name: "",
  lastName: "",
  jobTitule: "",
  checkInTime: 0,
  closingHour: 0,
  WorkDays: "",
};

const AddUserTable = ({ createUser, updateUser, userToEdit, setUserToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    } else {
      setForm(initailForm);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.rut ||
      !form.name ||
      !form.lastName ||
      !form.jobTitule ||
      !form.checkInTime ||
      !form.closingHour ||
      !form.WorkDays
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createUser(form);
    } else {
      updateUser(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initailForm);
    setUserToEdit(null);
  };

  return (
    <div>
      <h3>{userToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rut"
          placeholder="Rut"
          onChange={handleChange}
          value={form.rut}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.lastName}
        />
        <input
          type="text"
          name="jobTitule"
          placeholder="Cargo"
          onChange={handleChange}
          value={form.jobTitule}
        />
        <input
          type="number"
          name="checkInTime"
          placeholder="Ingreso"
          onChange={handleChange}
          value={form.checkInTime}
        />
        <input
          type="number"
          name="closingHour"
          placeholder="Salida"
          onChange={handleChange}
          value={form.closingHour}
        />
        <input
          type="text"
          name="WorkDays"
          placeholder="Dias"
          onChange={handleChange}
          value={form.WorkDays}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default AddUserTable;
