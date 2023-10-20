import axios from "axios";
import React from "react";
import { useState } from "react";
import styles from './Auth.module.scss'
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  function login() {
    axios.post("http://192.168.88.71:8000/api/v1/login/", {
      email,
      password,
    });
  }
  

  return (
    <div className={styles.Auth}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPasssword(e.target.value)}
        value={password}
      />

      <Button action={login}>Войти</Button>
      <Link to={'/register'}>Создать аккаунт</Link>
    </div>
  );
}
