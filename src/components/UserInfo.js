export class UserInfo {
  constructor({ name, profession }) {
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };

    return userData;
  }

  setUserInfo(name, profession) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}
