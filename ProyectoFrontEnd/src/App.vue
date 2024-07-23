<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Proyecto Final</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <button class="nav-link btn btn-link" @click="currentTab = 'calculo'">Cálculo de calificaciones</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-link" @click="currentTab = 'formulario'">Formulario de registro</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import Calculo from 'src\components\Calculo.vue';
import Formulario from 'src\components\Formulario.vue';

export default {
  data() {
    return {
      currentTab: 'calculo'
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab === 'calculo' ? Calculo : Formulario;
    }
  }
};
</script>

<style>
/* Puedes agregar estilos globales aquí */
</style>
