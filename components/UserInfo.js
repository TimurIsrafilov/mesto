import { nameInput, professionInput } from "./constants.js";

export class UserInfo {
  constructor({ name, profession }) {
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
  }

  getUserInfo() {
    nameInput.value = this._name.textContent;
    professionInput.value = this._profession.textContent;
  }

  setUserInfo(name, profession) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}
