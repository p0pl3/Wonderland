<template>
  <div class="profile">
    <div class="container">
      <div class="profile__container">

        <div class="content contacts">
          <h1>Contacts</h1>
          <form action="">
            <div class="input__form">
              <label>
                Name
                <input type="text">
              </label>
            </div>
            <div class="input__form">
              <label>
                Phone
                <input type="text">
              </label>
            </div>
            <div class="input__form">
              <label>
                Email
                <input type="text">
              </label>
            </div>
            <button>Save</button>
          </form>
        </div>

        <div class="content delivery__address">
          <h1>Delivery address</h1>
          <form action="">
            <div class="input__form">
              <label>
                City
                <input type="text">
              </label>
            </div>
            <div class="input__form">
              <label>
                Street and house
                <input type="text">
              </label>
            </div>
            <div class="other">
              <div class="input__form" style="margin-right: 10px">
                <label>
                  Entrance
                  <input type="text">
                </label>
              </div>
              <div class="input__form" style="margin-right: 10px">
                <label>
                  Flat
                  <input type="text">
                </label>
              </div>
              <div class="input__form">
                <label>
                  Floor
                  <input type="text">
                </label>
              </div>
            </div>
            <button>Save</button>
          </form>
        </div>

        <div class="content order__history">
          <h1>Purchase history</h1>
          <div class="orders">
            <p>You have not made any order yet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
}
</script>

<style lang="scss" scoped>
$base-background: rgb(123, 0, 204);
$base-background-white: rgb(155, 0, 255);
$base-grey: rgba(75, 75, 75, 0.9);

.profile__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content {
  width: 31% !important;
  max-width: none;
  min-width: 200px;
}

.other {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.other .input__form {
  min-width: 85px;
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 30px;
}

p {
  font-size: 16px;
}

label {
  font-size: 17px;
}

input {
  display: block;
  width: 100%;
  border: 1px solid;
  border-radius: 12px;
  height: 40px;
  font-size: 17px;
  text-indent: 7px;
}

.input__form {
  margin: 10px 0 10px 0;
}

button {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 17px;
  color: #FFFFFF;
  border: none;
}

@media (max-width: 950px) {
  .content {
    width: 100% !important;
    margin: 0 0 15px 0;
  }
}
</style>