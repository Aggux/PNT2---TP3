import axios from "axios";

const URL = "https://665bb84f3e4ac90a04d7dac6.mockapi.io/api/TP3PNT/Usuarios";

export async function getUsuarios() {
  try {
    const { data: Usuarios } = await axios.get(URL);
    return Usuarios;
  } catch (error) {
    console.error("Error productos GET:", error);
    return [];
  }
}
