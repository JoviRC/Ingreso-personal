import React, { useState, useContext } from "react";
import { CrudUserContext } from "../api/CrudApiUser";
const initailForm = {
  id: null,
  rut: "",
  name: "",
  lastName: "",
  jobTitule: "",
  checkInTime: "",
  closingHour: "",
  workDays: {
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false,
  },
};

const AddUser = () => {
  const [form, setForm] = useState(initailForm);
  const [box, setBox] = useState(false);
  const { createUser, updateUser, userToEdit, setUserToEdit } =
    useContext(CrudUserContext);

  const handleChange = (e) => {
    if (e.target.name === "workDays") {
      setForm({
        ...form,
        workDays: { ...form.workDays, [e.target.value]: e.target.checked },
      });
      setBox(true);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
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
      !box
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
    setBox(false);
  };

  return (
    <div active="active">
      <h3>{userToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <div>
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
            type="time"
            name="checkInTime"
            placeholder="Ingreso"
            onChange={handleChange}
            value={form.checkInTime}
          />
          <input
            type="time"
            name="closingHour"
            placeholder="Salida"
            onChange={handleChange}
            value={form.closingHour}
          />
        </div>
        <hr />
        <label htmlFor="lunes">
          <input
            id="lunes"
            type="checkbox"
            name="workDays"
            value="lunes"
            onChange={handleChange}
          />
          Lunes
        </label>
        <label htmlFor="martes">
          <input
            id="martes"
            type="checkbox"
            name="workDays"
            value="martes"
            onChange={handleChange}
          />
          Martes
        </label>
        <label htmlFor="miercoles">
          <input
            id="miercoles"
            type="checkbox"
            name="workDays"
            value="miercoles"
            onChange={handleChange}
          />
          Miercoles
        </label>
        <label htmlFor="jueves">
          <input
            id="jueves"
            type="checkbox"
            name="workDays"
            value="jueves"
            onChange={handleChange}
          />
          Jueves
        </label>
        <label htmlFor="viernes">
          <input
            id="viernes"
            type="checkbox"
            name="workDays"
            value="viernes"
            onChange={handleChange}
          />
          Viernes
        </label>
        <label htmlFor="sabado">
          <input
            id="sabado"
            type="checkbox"
            name="workDays"
            value="sabado"
            onChange={handleChange}
          />
          Sabado
        </label>
        <label htmlFor="domingo">
          <input
            id="domingo"
            type="checkbox"
            name="workDays"
            value="domingo"
            onChange={handleChange}
          />
          Domingo
        </label>
        <hr />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default AddUser;
