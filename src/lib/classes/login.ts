import { Account } from "./account";
import { AccountError } from "../types/account";

export class Login extends Account {
  constructor() {
    super();
  }

  //abstract methods implementation
  isError(): boolean {
    if (!this.userName) {
      const error: AccountError = {
        fieldName: "userName",
        errorMessage: "Username cannot be empty",
      };
      this.errors = error;
      return true;
    }
    if (!this._password) {
      const error: AccountError = {
        fieldName: "password",
        errorMessage: "Password cannot be empty",
      };
      this.errors = error;
      return true;
    }

    this._errors = [];
    return false;
  }
}
