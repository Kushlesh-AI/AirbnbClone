import React, { useState } from "react";
import api from "../../services/api";

const Login = ({history}) => {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      return alert("Digite primeiro seu email");
    }

    const response = await api.post("/sessions", { email });
    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push('/dashboard')
  }

  return (
    <>
      <p>Reserve lugares únicos para se hospedar e coisas para fazer.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="text"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
};

export default Login;