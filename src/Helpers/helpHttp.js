export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    //coneccion del usuario
    options.signal = controller.signal;
    // recibe metodo del usuario si no responde con GET
    options.method = options.method || "GET";
    // si recibe tipo de datos del usuario guarda mis datos con los de el si no solo guarda los mios
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    // si el usuario envia un areglo json lo convierte, si no lo pasa a falso y lo deletea
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    // aborta el llamado de al api luego de 3 segundos
    setTimeout(() => controller.abort, 3000);
    //return de la funcion
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
