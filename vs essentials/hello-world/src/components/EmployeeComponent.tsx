import profilePic from "../assets/profile.jpg";
import LearningAsideComponent from "./LearningAsideComponent";
import { useState, useEffect } from "react";
import { getEmployees } from "../services/ApiService";
import "./EmployeeComponent.css";

interface EmployeeComponentProps {
    onLogout: () => void;
}

function EmployeeComponent({
    onLogout,
}: EmployeeComponentProps) {

    const [employees, setEmployees] = useState<any[]>([]);
    const [searchText, setSearchText] = useState("");
    const [department, setDepartment] = useState("All");
    const [salarySort, setSalarySort] = useState("");
    const [timeLeft, setTimeLeft] =
        useState("05:00");

    const loadEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    useEffect(() => {

        const SESSION_DURATION =
            5 * 60 * 1000;

        const loginTime =
            localStorage.getItem("loginTime");

        if (!loginTime) {
            onLogout();
            return;
        }

        const interval = setInterval(() => {

            const elapsedTime =
                Date.now() - Number(loginTime);

            const remainingTime =
                SESSION_DURATION - elapsedTime;

            if (remainingTime <= 0) {

                clearInterval(interval);

                localStorage.removeItem(
                    "loginTime"
                );

                alert(
                    "Session expired. Please login again."
                );

                onLogout();

                return;
            }

            const minutes = Math.floor(
                remainingTime / 1000 / 60
            );

            const seconds = Math.floor(
                (remainingTime / 1000) % 60
            );

            setTimeLeft(
                `${minutes
                    .toString()
                    .padStart(
                        2,
                        "0"
                    )}:${seconds
                    .toString()
                    .padStart(
                        2,
                        "0"
                    )}`
            );

        }, 1000);

        return () =>
            clearInterval(interval);

    }, [onLogout]);

    const filteredEmployees = employees
        .filter((emp) => {

            const matchesName =
                emp.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );

            const matchesDepartment =
                department === "All"
                    ? true
                    : emp.department ===
                      department;

            return (
                matchesName &&
                matchesDepartment
            );
        })
        .sort((a, b) => {

            if (salarySort === "asc") {
                return (
                    a.salary - b.salary
                );
            }

            if (salarySort === "desc") {
                return (
                    b.salary - a.salary
                );
            }

            return 0;
        });

    return (
        <div className="container">

            <div className="dashboard-header">
                <div className="header-title">

                    <h1 className="title">
                        Employee Dashboard
                    </h1>

                    <div
                        style={{
                            color: "#dc2626",
                            fontWeight:
                                "bold",
                            fontSize:
                                "14px",
                            marginTop:
                                "5px",
                        }}
                    >
                        Session Expires In:
                        {" "}
                        {timeLeft}
                    </div>

                </div>

                <button
                    className="logout-btn"
                    onClick={() => {

                        localStorage.removeItem(
                            "loginTime"
                        );

                        onLogout();

                    }}
                >
                    Logout
                </button>

            </div>

            <button
                className="load-btn"
                onClick={loadEmployees}
            >
                Load Employees
            </button>

            <div className="filter-section">

                <input
                    type="text"
                    placeholder="Search Employee..."
                    value={searchText}
                    onChange={(e) =>
                        setSearchText(
                            e.target.value
                        )
                    }
                />

                <select
                    value={department}
                    onChange={(e) =>
                        setDepartment(
                            e.target.value
                        )
                    }
                >
                    <option value="All">
                        All Departments
                    </option>

                    <option value="IT">
                        IT
                    </option>

                    <option value="HR">
                        HR
                    </option>

                    <option value="Finance">
                        Finance
                    </option>

                    <option value="Admin">
                        Admin
                    </option>

                </select>

                <select
                    value={salarySort}
                    onChange={(e) =>
                        setSalarySort(
                            e.target.value
                        )
                    }
                >
                    <option value="">
                        Salary Sort
                    </option>

                    <option value="asc">
                        Low To High
                    </option>

                    <option value="desc">
                        High To Low
                    </option>

                </select>

            </div>

            <div className="table-container">

                <table className="employee-table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>
                                Department
                            </th>
                            <th>Salary</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredEmployees.map(
                            (emp) => (
                                <tr
                                    key={emp.id}
                                >
                                    <td>
                                        {
                                            emp.id
                                        }
                                    </td>

                                    <td>
                                        {
                                            emp.name
                                        }
                                    </td>

                                    <td>
                                        {
                                            emp.department
                                        }
                                    </td>

                                    <td>
                                        ₹{" "}
                                        {emp.salary.toLocaleString()}
                                    </td>

                                </tr>
                            )
                        )}

                    </tbody>

                </table>

            </div>

            <LearningAsideComponent />

        </div>
    );
}

export default EmployeeComponent;