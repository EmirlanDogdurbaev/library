import axios from "axios";
import { makeAutoObservable } from "mobx";
import { api } from "./api";

export default class Store {
  constructor() {
    makeAutoObservable(this);
  }

  user = {};
  isAuthed = false;

  setUser(user){
    this.user = user
  }
  setAuthed(bool){
    this.isAuthed = bool
  }
  
  async login(email, password){
    try {
      const response = await axios.post(`${api}/login/`, {email, password});
      localStorage.setItem("access", response.data.access_token)
      this.setAuthed(true)
    } catch (e) {
      console.error(e);
    }
  }
  async register(email, password, first_name, last_name, phone){
    try {
      const response = await axios.post(`${api}/register/`, {email, password, first_name, last_name, phone});
      localStorage.setItem("access", response.data.access_token)
      this.setAuthed(true)
    } catch (e) {
      console.error(e);
    }
  }
}
