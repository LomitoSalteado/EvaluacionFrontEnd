<template>
  <div>
    <h2>Formulario de registro</h2>
    <form @submit.prevent="registrar">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nombre" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repetir Contraseña:</label>
        <input type="password" v-model="repeatPassword" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    registrar() {
      if (this.password !== this.repeatPassword) {
        alert('Las contraseñas no coinciden');
      } else {
        alert('Registro exitoso');
      }
    }
  }
};
</script>
