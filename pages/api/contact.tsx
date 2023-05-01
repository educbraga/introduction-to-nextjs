export default function handler(request, response) {
  if (request.method === "POST") {
    console.log(request.body);
    response.json({ message: "ok" });
  }
}
