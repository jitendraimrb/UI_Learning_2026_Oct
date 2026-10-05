export const getMessage = async () => {
const response =
await fetch("http://localhost:8080/api/hello");
return response.text();
};