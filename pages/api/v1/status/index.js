import database from "infra/database.js";

async function statusCodeHTTP(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Hello World!" });
}

export default statusCodeHTTP;
