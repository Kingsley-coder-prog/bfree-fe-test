import axios from "axios";

const url = "http://localhost:3000/api/v1/users";

class Users {
  // Get Users
  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data.data.users;
        console.log(data);
        resolve(
          data.map(user => ({
            ...user,
            createdAt: new Date(user.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Get User
  static getUser(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/" + id);
        console.log(res.data.data);
        const data = res.data.data.user;
        console.log(data);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  // Create User
  static createUser(name, email) {
    return axios.post(url, {
      name,
      email
    });
  }

  // Update User
  static updateUser(id) {
    return axios.update(`${url}${id}`);
  }

  // Delete User
  static deleteUser(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default Users;
