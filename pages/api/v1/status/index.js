import database from "../../../../infra/database.js";

async function estado(request, response) {
  const resultdb = await database.query("SELECT 1 + 1 as sum;");
  console.log(resultdb.rows);
  response.status(200).json({ chave: "De novo" });
}

export default estado;
