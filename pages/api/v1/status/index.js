function statusCodeHTTP(request, response) {
  response.status(200).json({ chave: "Hello World!" });
}

export default statusCodeHTTP;
