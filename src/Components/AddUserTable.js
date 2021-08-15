import React, { useState, useEffect } from "react";

const AddUserTable = ({
  createUser,
  updateUser,
  userToEdit,
  setUserToEdit,
}) => {
  const initailForm = {
    id: null,
    rut: "",
    name: "",
    lastName: "",
    jobTitule: "",
    checkInTime: 0,
    closingHour: 0,
    lunes: 0,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false,
  };

  const [form, setForm] = useState(initailForm);
  const [tBox, setTBox] = useState(0);
  const [arBox, setArBox] = useState(
    new Array(7).fill(false)
  )

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

    console.log();
  };
  console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.lunes ||
      form.martes ||
      form.miercoles ||
      form.jueves ||
      form.viernes ||
      form.sabado ||
      form.domingo === 1
    )
      setTBox(1);

    if (
      !form.rut ||
      !form.name ||
      !form.lastName ||
      !form.jobTitule ||
      !form.checkInTime ||
      !form.closingHour ||
      !tBox === 0
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
    setTBox(0);
  };

  const dias = [
    "lunes"=boolean,
    "martes"=boolean,
    "miercoles"=boolean,
    "jueves"=boolean,
    "viernes"=boolean,
    "sabado"=boolean,
    "domingo"=boolean,
  ]

  const checked = (e,index) => {

  }

  return (
    <div>
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
        </div>
        <hr />
        <div>
          <label htmlFor="lunesBox">
            <input
              id="lunesBox"
              type="checkbox"
              name="lunes"
              onChange={handleChange}
              value={form.lunes}
            />
            Lunes
          </label>
          <label htmlFor="martesBox">
            <input
              id="martesBox"
              type="checkbox"
              name="martes"
              onChange={handleChange}
              value={!form.martes}
            />
            Martes
          </label>
          <label htmlFor="miercolesBox">
            <input
              id="miercolesBox"
              type="checkbox"
              name="miercoles"
              onChange={handleChange}
              value={!form.miercoles}
            />
            Miercoles
          </label>
          <label htmlFor="juevesBox">
            <input
              id="juevesBox"
              type="checkbox"
              name="jueves"
              onChange={handleChange}
              value={!form.jueves}
            />
            Jueves
          </label>
          <label htmlFor="viernesBox">
            <input
              id="viernesBox"
              type="checkbox"
              name="viernes"
              onChange={handleChange}
              value={!form.viernes}
            />
            Viernes
          </label>
          <label htmlFor="sabadoBox">
            <input
              id="sabadoBox"
              type="checkbox"
              name="sabado"
              onChange={handleChange}
              value={!form.sabado}
            />
            Sabado
          </label>
          <label htmlFor="domingoBox">
            <input
              id="domingoBox"
              type="checkbox"
              name="domingo"
              onChange={handleChange}
              value={!form.domingo}
            />
            Domingo
          </label>
        </div>
        <hr />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default AddUserTable;
