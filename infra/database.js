import { Client } from "pg";

async function query(queryObject) {
  const cliente = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await cliente.connect();

  try {
    const resultado = await cliente.query(queryObject);
    return resultado;
  } catch (error) {
    console.error(error);
  } finally {
    await cliente.end();
  }
}

export default {
  query: query,
};
