import React, { useState, useEffect } from "react";

const boxForm = {
  lunes: false,
  martes: false,
  miercoles: false,
  jueves: false,
  viernes: false,
  sabado: false,
  domingo: false,
};
const initailForm = {
  id: null,
  rut: "",
  name: "",
  lastName: "",
  jobTitule: "",
  checkInTime: 0,
  closingHour: 0,
  WorkDays: boxForm
};

const AddUserTable = ({
  createUser,
  updateUser,
  userToEdit,
  setUserToEdit,
}) => {
  const [form, setForm] = useState(initailForm);
  const [box, setBox] = useState(boxForm);
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
    console.log(boxForm[0].value);
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.rut ||
      !form.name ||
      !form.lastName ||
      !form.jobTitule ||
      !form.checkInTime ||
      !form.closingHour
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

  const handleChangeBox = (e) => {
    setBox({ ...box, [e.target.name]: e.target.value });
    console.log(form);
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
        <div>
          <input
            type="checkbox"
            name="lunes"
            value={true}
            onChange={handleChange}
          />
          Lunes
          <input
            type="checkbox"
            name="WorkDays.martes"
            value={true}
            onChange={handleChange}
          />
          Martes
          <input
            type="checkbox"
            name="miercoles"
            value={true}
            onChange={handleChange}
          />
          Miercoles
          <input
            type="checkbox"
            name="jueves"
            value={true}
            onChange={handleChange}
          />
          Jueves
          <input
            type="checkbox"
            name="viernes"
            value={true}
            onChange={handleChange}
          />
          Viernes
          <input
            type="checkbox"
            name="sabado"
            value={true}
            onChange={handleChange}
          />
          Sabado
          <input
            type="checkbox"
            name="domingo"
            value={true}
            onChange={handleChange}
          />
          Domingo
        </div>

        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default AddUserTable;
