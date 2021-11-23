Vue.component('banner', {
    props: ['titulo','estilo'],

    template: `
      <div :class="estilo">
        <h3>{{titulo}}</h3>
      </div>
      `,
});

Vue.component('navbar', {
    props: ['titulo'],
    template: `
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">Inicio</a>
    <a class="navbar-brand" href="/alternado.html">Alternado</a>
    <a class="navbar-brand" href="/sinestilo.html">Sin Estilos</a>
  </div>
</nav>
    `,
});

Vue.component('personal', {
    props: ['personas','estilo'],
    template: `
    <div>
      <table :class="estilo">
        <tr>
          <td><p>Nombre</p></td>
          <td><p>Edad</p></td>
          <td><p>Sexo</p></td>
          <td><p>Nacionalidad</p></td>
        </tr>
        <tr v-for="(persona,i) in personas" :key="i">
          <td>{{persona.nombre}}</td>
          <td>{{persona.Edad}}</td>
          <td>{{persona.Sexo}}</td>
          <td>{{persona.Nacionalidad}}</td>
        </tr>
      </table>
    </div>
  `,
});

var app = new Vue({
    el: '#app',
    data: {
        
        personas: [
            {
                nombre: "Fabian",
                Edad: 34,
                Sexo: "Masculino",
                Nacionalidad: "Argentino"
            },
            {
                nombre: "Maria",
                Edad: 30,
                Sexo: "Femenino",
                Nacionalidad: "Argentina"
            },
            {
                nombre: "Juan",
                Edad: 50,
                Sexo: "Masculino",
                Nacionalidad: "Paraguayo"
            },
            {
                nombre: "Silvia",
                Edad: 25,
                Sexo: "Femenino",
                Nacionalidad: "Chilena"
            }
        ],
  
    },

})