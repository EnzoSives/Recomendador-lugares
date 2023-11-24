<template>
  <div class="text-center">
    <main class="form-signin">
      <form @submit.prevent="login">
        <img
          class="mb-4"
          src="/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import useUser from '../composables/authUser';


export default {
  setup() {
    const { login } = useUser();
    const email = ref('');
    const password = ref('');

    const loginUser = async () => {
      await login(email.value, password.value);
    };

  
    return { email, password, login: loginUser };
  },

  
};
</script>

<style>
</style>