import axios from "axios";
import React from "react";
import { useState } from "react";
import styles from './Auth.module.scss'
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function register() {
    axios.post("http://192.168.88.71:8000/api/v1/register/", {
      email,
      password,
      first_name:firstName,
      last_name:lastName,
      phone,
    })
    .then((res)=>{
      localStorage.setItem('access', res.data.access_token);
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

      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />

      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <Button action={register}>Ресистрация</Button>
      <Link to={'/login'}>Уже есть аккаунт</Link>
    </div>
  );
}
