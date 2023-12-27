<template>
  <div id="bg-circle"></div>
  <div id="container">
    <div id="logo">
      <img src="" alt="" />
      <h3>OnTime</h3>
    </div>
    <h1>Good to see you again!</h1>
    <form action="">
      <div id="input-field">
        <label for="email">Email</label>
        <input type="email" placeholder="youremail@university.edu.ly" />
      </div>
      <div id="input-field">
        <label for="password">Password</label>
        <input type="text" placeholder="****************" />
      </div>
      <div id="remember-me">
        <div>
          <input type="checkbox" />
          <label for="remember-me">Remember me</label>
        </div>
        <a href="/forgot-password">Forget Password</a>
      </div>
      <button type="submit">Login</button>
      <div id="first-time">
        <p>First time? <a href="/signup">Sign up now!</a></p>
      </div>
    </form>
  </div>
  <div id="footer">
    <p>&copy; 2022 OnTime. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  margin-top: auto;
  background-color: #e2e7f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

#logo > image::after {
  content: '';
  width: 3rem;
  height: 3rem;
  background-color: #2c3e50;
}

h1 {
  font-size: 1.5rem;
}

#bg-circle {
  content: '';
  position: fixed;
  transform: translate(-40%, 15%);
  width: 120rem;
  height: 130rem;
  border-radius: 50%;
  background-color: #a0abc0;
  z-index: -1;
}

#container {
  text-align: center;
  color: #2c3e50;
  padding: 2rem 3rem;
  border: 1.5px solid #2c3e50;
  border-radius: 1rem;
  background-color: white;
  width: 20rem;
}

form {
  margin-top: 2rem;
}

label:not(#remember-me > div > label) {
  text-align: left;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
}

input[type='text'],
input[type='email'] {
  margin: 0 auto;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid #2c3e50;
  padding: 0.4rem;
  padding-left: 1.5rem;
  width: calc(100% - 1rem);
  font-size: 0.85rem;
}

#input-field {
  margin-bottom: 2rem;
  width: 95%;
  display: flex;
  flex-direction: column;
}

#remember-me {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  font-size: 0.8rem !important;
}

#remember-me > div {
  align-items: last baseline;
  font-size: 0.8rem;
}

a {
  text-decoration: none;
  color: #005a8e;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}

#remember-me input[type='checkbox'] {
  margin-right: 0.25rem;
  border: 1px solid #005a8e;
  width: 1rem;
  height: 1rem;
  accent-color: #005a8e;
}

button {
  margin-top: 2rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid #005a8e;
  background-color: #005a8e;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

#first-time {
  margin-top: 2rem;
  font-size: 0.9rem;
}

#footer {
  position: relative;
  width: 100%;
  top: 8.5rem;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.5rem;
  color: #2c3e50;
}
</style>
