<template>
  <div class="container justify-center flex flex-wrap mx-auto p-10">
    <form>
      <label>Imię i nazwisko</label>
      <input type="text" v-model="name" name="name" placeholder="Twoje imię i nazwisko" class="">
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Twój email">
      <label>Wiadomość</label>
      <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Wiadomość">
          </textarea>

      <input type="submit" value="Wyślij">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
input[type=text],[type=email],textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>