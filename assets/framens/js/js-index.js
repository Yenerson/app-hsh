Vue.component('menu-index', {
    template: `
    <div>
        <nav class="caja-navegacion nav-horizontal sombra-1 flexi-just">
            <ul class="nav-ul">
               <li class="nav-titulo tema-pre tex-may"><a href="<?php $url->url('inicio')?>"><i class="icon-home i-izq"></i> Inicio</a></li>
            </ul>
            <ul class="nav-ul">
               <li class="li-avatar">
                    <div class="bloq-linea">
                        <span class="bloq-icono">
                            <i class="icon-user"></i>
                        </span>
                        <a href="perfil.html">Janeth Torres</a>
                    </div>
                </li>
               <li class="fondo-pre-s"><a v-on:click="menuOculto = !menuOculto"><i class="icon-menu"></i></a></li>
            </ul>
        </nav>
        <!-- menu toggle -->
        <div v-bind:class="['flexi-col sombra-3 menuToogle', {'toggleMenu' : menuOculto}]">
        <nav class="caja-navegacion nav-vertical">
            <div class="cart-avatar tema-pre">
                <div class="bloq-portada flexi-just">
                    <div class="bloq-icono">
                       <i class="icon-user"></i>
                    </div>
                    <a href="#" class="boton-cir"><i class="icss-derecha"></i></a>
                </div>
                <div class="bloq-cuerpo lista-ver">
                   <h5 class="bloq-titulo">E.S.E H.S.H</h5>
                </div>
                <ul class="bloq-pie lista-hor sep-barr-ver">
                   <li>Pivijay</li>
                </ul>
            </div>
            <ul class="nav-ul li-relativo li-div">
               <li v-for="iten of enlacesPag" :key="iten">
                    <a :href="iten.ruta">
                        {{ iten.ancla }}
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    </div>
    `,
    data(){
        return {
            menuOculto: false,
            enlacesPag: [
                {
                    ruta: 'index.html',
                    ancla: 'Mi perfil',
                },
                {
                    ruta: 'factores-r.html',
                    ancla: 'Factores de riesgo',
                },
                {
                    ruta: 'evaluacion.html',
                    ancla: 'Evaluacion',
                },
                {
                    ruta: 'observaciones.html',
                    ancla: 'Observaciones',
                },
                {
                    ruta: 'urgencia.html',
                    ancla: 'Llmada de emergancia',
                },
                {
                    ruta: 'nuevo.html',
                    ancla: 'Registrar nuevo usuario',
                },
            ]
        };
    }
});

new Vue({
    el: '#app',
});