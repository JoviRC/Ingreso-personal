import React, { useState } from "react";

const boxForm = {
  lunes: false,
  martes: false,
  miercoles: false,
  jueves: false,
  viernes: false,
  sabado: false,
  domingo: false,
};

export const IngresoDiario = () => {
  const fecha = Date.now();
  const hoy = new Date(fecha);
  const [box, setBox] = useState(boxForm);

  console.log(hoy.getFullYear() + "/" + hoy.getMonth() + "/" + hoy.getDate());
  console.log(box);

  const handleChangeBox = (e) => {
    setBox({ ...box, [e.target.name]: e.target.value });
    console.log(box);
  };

  return (
    <div>
      <form>
        <input
          type="checkbox"
          name="lunes"
          value={true}
          onChange={handleChangeBox}
        />
        Lunes
        <input
          type="checkbox"
          name="martes"
          value={true}
          onChange={handleChangeBox}
        />
        Martes
        <input
          type="checkbox"
          name="miercoles"
          value={true}
          onChange={handleChangeBox}
        />
        Miercoles
        <input
          type="checkbox"
          name="jueves"
          value={true}
          onChange={handleChangeBox}
        />
        Jueves
        <input
          type="checkbox"
          name="viernes"
          value={true}
          onChange={handleChangeBox}
        />
        Viernes
        <input
          type="checkbox"
          name="sabado"
          value={true}
          onChange={handleChangeBox}
        />
        Sabado
        <input
          type="checkbox"
          name="domingo"
          value={true}
          onChange={handleChangeBox}
        />
        Domingo
      </form>
    </div>
  );
};
