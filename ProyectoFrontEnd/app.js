import { createApp } from 'vue';
import Calculo from './Calculo.vue';
import Formulario from './Formulario.vue';

const app = createApp({
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
});

app.component('calculo', Calculo);
app.component('formulario', Formulario);
app.mount('#app');
