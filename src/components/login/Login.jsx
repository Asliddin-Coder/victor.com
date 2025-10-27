// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
export default function Login() {
  // const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/admin");
  //   }
  // }, [navigate]);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("https://yourdomain.uz/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     const data = await res.json();
  //     if (data.status === "success") {
  //       localStorage.setItem("token", data.token);
  //       navigate("/admin");
  //     } else {
  //       setError(data.message || "Login yoki parol noto‘g‘ri");
  //     }
  //   } catch {
  //     setError("Server bilan bog‘lanib bo‘lmadi");
  //   }
  // };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="login">login</label>
          <input type="text" id="login" name="login" placeholder="Enter your login"/>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
