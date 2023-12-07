import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const pbService = {

  signUp: async (email, password) => {
    console.log("Signing up with: ", email, password);
    try{
      const user = await pb.collection('users').create({
        "email": email,
        "password": password,
        "passwordConfirm": password,
      });
      console.log("User created: ", user);
      return user;
    } catch(e) {
      console.log("Error during sign up: ", e);
      return e;
    }
  },

  login: async (email, password) => {
    try{
      const user = await pb.collection('users').authWithPassword(
        email,
        password
      );
      return user;
    }catch(e) {
      console.log("Error during login: ", e);
      return e;
    }
  },

  isLoggedIn: async () => {
    const authData = pb.collection('users').authRefresh();
    return authData;
  },

  logout: async () => {
    pb.authStore.clear();
    return true;
  }
};

export default pbService;
