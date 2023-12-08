import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

pb.autoCancellation(false);

const pbService = {

  signUp: async (email, password) => {
    try{
      const user = await pb.collection('users').create({
        "email": email,
        "password": password,
        "passwordConfirm": password,
      });
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
    const authData = await pb.collection('users').authRefresh();
    return authData;
  },

  logout: async () => {
    pb.authStore.clear();
    return true;
  },

  createBlog: async (content) => {
    try{
      const authData = await pb.collection('users').authRefresh();
      const blog = await pb.collection('blogs').create({
        "content": content,
        "user": authData.record.id,
      });
      return blog;
    } catch(e) {
      console.log("Error during blog creation: ", e);
      return e;
    }
  },

  getBlogs: async () => {
    const authData = await pb.collection('users').authRefresh();
    const blogs = await pb.collection('blogs').getFullList({
      filter: `user = "${authData.record.id}"`,
    }) 
    return blogs;
  }

};

export default pbService;
