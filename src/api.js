// src/api.js
import axios from "axios";

const base = import.meta.env.VITE_API_URL || ""; // empty -> same origin
const baseURL = base ? base.replace(/\/+$/,'') : "";

const api = axios.create({
  baseURL: baseURL || ""
});

export default api;
