import { useState } from "react";
import { getEmployees } from "../services/ApiService";
function HelloComponent() {
const [employees, setEmployees] = useState<any[]>([]);
const handleClick = async () => {
const data = await getEmployees();
setEmployees(data);
};
return (
<>
<h2>Employee Dashboard</h2>
<button onClick={handleClick}>
Load Employees
</button>
<br />
<br />
<table border={1}>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Department</th>
<th>Salary</th>
</tr>
</thead>
<tbody>
{employees.map((emp) => (
<tr key={emp.id}>
<td>{emp.id}</td>
<td>{emp.name}</td>
<td>{emp.department}</td>
<td>{emp.salary}</td>
</tr>
))}
</tbody>
</table>
</>
);
}
export default HelloComponent;

// // src/components/HelloComponent.tsx
// import React, { useState } from "react";
// import { getHelloMessage } from "../services/ApiService";
// const HelloComponent: React.FC = () => {
// const [message, setMessage] = useState("");
// const handleClick = async () => {
// try {
// const data = await getHelloMessage();
// setMessage(data);
// } catch (error) {
// console.error(error);
// setMessage("API Failed");
// }
// };
// return (
// <div>
// <button onClick={handleClick}>
// Call Spring Boot API
// </button>
// <h2>{message}</h2>
// </div>
// );
// };
// export default HelloComponent;