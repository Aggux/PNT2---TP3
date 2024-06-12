<template>
  <section>
    <div class="jumbotron">
      
        <h2>Componente Formulario</h2>
        <hr>

      
        <div v-if="usuarios.length" class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Numero de Telefono</th>
            </tr>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td class="text-capitalize">{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono }}</td>
            </tr>
          </table>
        
      </div>
    </div>
  </section>
</template>

<script>
import * as ServiciosUsuario from "../servicios/usuarios";

export default {
  name: "src-componentes-usuarios",
  props: [],
  data() {
    return {
      usuarios: [],
    };
  },
  async mounted() {
    this.usuarios.push(...(await this.getUsuarios()));
  },
  methods: {
    async getUsuarios() {
      return await ServiciosUsuario.getUsuarios();
    },
  },
};
</script>
