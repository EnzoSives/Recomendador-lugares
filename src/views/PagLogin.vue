<template>
  <div class="login">
    <h1 class="title">Login or Register</h1>
    <form v-if="loginMode" @submit.prevent="login" class="form">
      <label class="form-label" for="email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <p v-if="error" class="error">Incorrect email or password.</p>
      <button class="form-submit" type="submit">Login</button>
    </form>

    <form v-else @submit.prevent="register" class="form">
      <label class="form-label" for="username">Username:</label>
      <input
        v-model="username"
        class="form-input"
        type="text"
        id="username"
        required
        placeholder="Username"
      >
      <label class="form-label" for="email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <p v-if="error" class="error">Registration failed. Please try again.</p>
      <button class="form-submit" type="submit">Register</button>
    </form>

    <p class="msg">
      {{ loginMode ? "Don't have an account?" : "Already have an account?" }}
      <button @click="toggleMode">
        {{ loginMode ? "Register" : "Login" }}
      </button>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAuth from '../composables/authUser';

export default {
  name: 'PagLogin',
  setup() {
    const { login, register } = useAuth();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const error = ref(null);
    const loginMode = ref(true);

    const loginUser = async () => {
      error.value = null;
      try {
        await login(email.value, password.value);
      } catch (e) {
        error.value = 'Invalid email or password.';
      }
    };

    const registerUser = async () => {
      error.value = null;
      try {
        await register(username.value, email.value, password.value);
        // Después de un registro exitoso, cambiar al modo de inicio de sesión
        loginMode.value = true;
      } catch (e) {
        error.value = 'Registration failed. Please try again.';
      }
    };

    const toggleMode = () => {
      loginMode.value = !loginMode.value;
    };

    return {
      username,
      email,
      password,
      error,
      loginMode,
      login: loginUser,
      register: registerUser,
      toggleMode,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>