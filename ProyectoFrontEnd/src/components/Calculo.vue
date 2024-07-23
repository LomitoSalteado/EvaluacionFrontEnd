<template>
  <div>
    <h2>Cálculo de calificaciones</h2>
    <form @submit.prevent="calcular">
      <div class="form-group">
        <label for="nota1">Nota 1:</label>
        <input type="number" v-model.number="nota1" min="10" max="70" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="nota2">Nota 2:</label>
        <input type="number" v-model.number="nota2" min="10" max="70" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="nota3">Nota 3:</label>
        <input type="number" v-model.number="nota3" min="10" max="70" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="asistencia">Asistencia %:</label>
        <input type="number" v-model.number="asistencia" min="0" max="100" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Calcular</button>
    </form>
    <div v-if="resultado !== null" class="mt-3">
      <p>Promedio: {{ promedio }}</p>
      <p>{{ resultado }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      promedio: null,
      resultado: null
    };
  },
  methods: {
    calcular() {
      const promedioPonderado = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
      this.promedio = promedioPonderado.toFixed(2);
      if (promedioPonderado >= 40 && this.asistencia >= 80) {
        this.resultado = 'Aprobado';
      } else {
        this.resultado = 'Reprobado';
      }
    }
  }
};
</script>
