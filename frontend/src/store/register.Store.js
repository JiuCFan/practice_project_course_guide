// register module
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class RegisterStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }
  // register function
  register = async ({ firstName,
    lastName,
    username,
    email,
    password,
    position,
    school, }) => {
    //   call register API
    const res = await http.post("user/register", {
      firstName,
      lastName,
      username,
      email,
      password,
      position,
      school,
    })
    console.log("success" + res)
  };
}
export default RegisterStore