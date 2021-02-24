<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="6" lg="5" class="left-login"> </b-col>
        <b-col cols="12" md="6" lg="7" class="right-login">
          <h3>Registration Form</h3>
          <b-form>
            <b-form-group id="input-group-1" label="Nama :" label-for="input-1">
              <input type="text" required />
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Nama PT :"
              label-for="input-1"
            >
              <input type="text" required />
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Phone Nuber:"
              label-for="input-1"
            >
              <input type="number" required />
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Email Address:"
              label-for="input-1"
            >
              <input type="email" required />
            </b-form-group>

            <div class="text-center">
              <button type="submit" class="btn-submit">Register</button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainBG: {
        backgroundImage: `url(${require('@/assets/bgRegister.png')})`
      }
    }
  }
}
</script>

<style scoped>
.left-login {
  /* background: #1b6fba; */
  background: url('../assets/bgRegister.png');
  background-repeat: no-repeat;
  /* background-size: cover; */
}
.right-login {
  padding: 50px 25px;
}

.right-login h3 {
  font-size: 36px;
  font-weight: bold;
  color: #1b6fba;
  margin-bottom: 50px;
}
.right-login h6 {
  /* font-size: 16px; */
  color: rgb(117, 116, 116);
  font-weight: normal;
  margin-bottom: 50px;
}
.right-login form input {
  border: none;
  border-bottom: 1px solid #1b6fba;
  width: 100%;
  padding: 10px;
  transition: 0.8s ease-in-out;
  outline: none;
}
label {
  color: rgb(117, 116, 116);
}
.right-login form input:hover {
  border-bottom: 1px solid black;
}
.right-login .btn-submit {
  border: none;
  border: 1px solid #1b6fba;
  border-radius: 25px;
  padding: 10px 15px;
  background: #1b6fba;
  width: 40%;
  margin: 5px;
  color: #fff;
  transition: 0.8s ease-in-out;
  outline: none;
  margin-top: 10px;
}
.right-login .btn-submit:hover {
  border: 1px solid #004785;
  background: #004785;
}

.right-login p {
  margin: 50px 0 60px 0;
  text-align: center;
  color: rgb(117, 116, 116);
}
</style>
