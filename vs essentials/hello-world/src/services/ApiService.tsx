export const getEmployees = async () => {
const response = await fetch(
"http://localhost:8081/api/call/react"
);
return await response.json();
};

// // src/services/ApiService.ts
// export const getHelloMessage = async (): Promise<string> => {
// const response = await fetch(
// "http://localhost:8081/api/call/react"
// );
// return await response.text();
// };

