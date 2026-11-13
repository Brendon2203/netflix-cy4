import { createContext, useContext, useState } from "react";

const USERS_KEY = "netflix-users";
const SESSION_KEY = "netflix-session";

const AuthContext = createContext(null);

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession);

  function register({ name, email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();

    if (users.some((storedUser) => storedUser.email === normalizedEmail)) {
      return { error: "Este e-mail já está cadastrado." };
    }

    const newUser = { name: name.trim(), email: normalizedEmail, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const sessionUser = { name: newUser.name, email: newUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);

    return { success: true };
  }

  function login(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const storedUser = readUsers().find(
      (item) => item.email === normalizedEmail && item.password === password,
    );

    if (!storedUser) {
      return { error: "E-mail ou senha incorretos." };
    }

    const sessionUser = { name: storedUser.name, email: storedUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);

    return { success: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}