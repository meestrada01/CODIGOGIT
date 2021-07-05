export const getUsuarios = async () => {
    let response = await fetch(`https://reqres.in/api/users`)
    let rpta = await response.json();
    return rpta.data;
}