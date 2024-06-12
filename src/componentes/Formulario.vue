<template>
<section>
  <div class="jumbotron">
    <h2>Componente Formulario</h2>
    <hr>

    <form novalidate @submit.prevent="enviar()">
      <!-- Campo nombre -->
      <div class="form-group">
        <label for="nombre">nombre</label>
        <input 
          id="nombre" 
          type="text" 
          class="form-control" 
          v-model.trim="formData.nombre"
          @input="formDirty.nombre=true"
        >
        <!-- carteles de validación -->
        <div v-if="
            (!formData.nombre || validarNombre()) && formDirty.nombre"
            class="alert alert-danger mt-1"
        >
          <span v-if="!formData.nombre">Campo requerido</span> 
          <span v-else-if="validarNombre()">Este campo debe poseer entre 5 y 15 caracteres</span> 
        </div>
      </div>

      <!-- Campo edad -->
      <div class="form-group">
        <label for="edad">edad</label>
        <input 
          id="edad" 
          type="number" 
          class="form-control" 
          v-model.number="formData.edad"
          @input="formDirty.edad=true"
        >
        <!-- carteles de validación -->
        <div v-if="
            (!formData.edad || validarEdad()) && formDirty.edad"
            class="alert alert-danger mt-1"
        >
          <span v-if="!formData.edad">Campo requerido</span> 
          <span v-else-if="validarEdad()">La edad debe ser entre 18 y 120</span>
        </div>
      </div>

      <!-- Campo email -->
      <div class="form-group">
        <label for="email">email</label>
        <input 
          id="email" 
          type="text" 
          class="form-control" 
          v-model="formData.email"
          @input="formDirty.email=true"
        >
        <!-- carteles de validación -->
        <div v-if="
            (!formData.email || !validarEmail()) && formDirty.email "
            class="alert alert-danger mt-1"
        >
          <span v-if="!formData.email">Campo requerido</span> 
          <span v-else-if="!validarEmail()">Email invalido</span> 
        </div>
      </div>

      <button 
        class="btn btn-success my-3" 
        :disabled="validarBotonEnvio()"
        @click="agregarUsuario(formData.nombre, formData.edad, formData.email)"
      >Enviar</button>

    </form>

    <br>
    
    <div class="table-responsive">
      <table class="table table-dark" >
        <tr>
          <th>Nombre</th>
          <th>edad</th>
          <th>email</th>
          
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.edad }}</td>
          <td>{{ usuario.email }}</td>
        </tr> 
      </table>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      usuarios: [
      ],
      datos: []
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        edad: "",
        email: null,
      }
    },
    validarBotonEnvio() {
      return !this.formData.nombre || 
      !this.formData.edad || 
      !this.formData.email ||
      this.validarForm()
    },
    enviar() {
      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    },
    agregarUsuario(nom, ed, em) {
      const usuario = { nombre: nom, edad: ed, email: em}
      this.usuarios.push(usuario)
    },
    validarEmail(){
      var re = /\S+@\S+.\S+/;
      return re.test(this.formData.email);
    },
    validarNombre(){
      return this.formData.nombre.length < 5 || this.formData.nombre.length > 15;
    },
    validarEdad(){
      return this.formData.edad < 18 || this.formData.edad > 120;
    },
    validarForm(){
      return this.validarNombre() || this.validarEdad() || !this.validarEmail
    }
  }
  
}

</script>
<style></style>
