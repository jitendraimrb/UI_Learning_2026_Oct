import { useState } from "react";
import "./LoginComponent.css";

interface LoginProps {
    onLoginSuccess: () => void;
}

function LoginComponent({
    onLoginSuccess,
}: LoginProps) {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] =
        useState(false);

    const login = () => {

        setError("");

        if (!userId || !password) {

            setError(
                "User ID and Password are required"
            );

            return;
        }

        if (
            userId === "admin" &&
            password === "admin123"
        ) {

            localStorage.setItem(
                "loginTime",
                Date.now().toString()
            );

            onLoginSuccess();

        } else {

            setError(
                "Invalid User ID or Password"
            );

        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <h1 className="login-title">
                    Employee Portal
                </h1>

<p className="login-subtitle">

</p>

<p className="login-info">
Please sign in to continue
</p>

                <div className="form-group">

                    <label>User ID</label>

                    <input
                        type="text"
                        placeholder="Enter User ID"
                        value={userId}
                        onChange={(e) =>
                            setUserId(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }}
                    >

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            style={{
                                flex: 1,
                            }}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            style={{
                                padding:
                                    "10px 12px",
                                borderRadius:
                                    "8px",
                                border:
                                    "1px solid #ccc",
                                cursor:
                                    "pointer",
                            }}
                        >
                            {showPassword
                                ? "Hide"
                                : "Show"}
                        </button>

                    </div>

                </div>

                <button
                    className="login-btn"
                    onClick={login}
                >
                    Login
                </button>

                {error && (
                    <p className="error-msg">
                        {error}
                    </p>
                )}

                <br />

            </div>

        </div>
    );
}

export default LoginComponent;