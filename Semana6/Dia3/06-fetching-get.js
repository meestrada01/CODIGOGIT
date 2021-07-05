const URL_BASE = "https://60c17d104f7e880017dbfacd.mockapi.io";

/**
 * Esta funcion obtiene las categorias de
 * la BD
 */
const getCategorias = () => {
  axios
    .get(`${URL_BASE}/categorias`)
    .then((rpta) => {
      console.log(rpta);
      console.log(rpta.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getCategorias();
