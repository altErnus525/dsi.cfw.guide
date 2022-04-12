"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8278],{3981:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-a4c13d60",path:"/es_ES/installing-unlaunch.html",title:"Instalar Unlaunch",lang:"es-ES",frontmatter:{title:"Instalar Unlaunch"},excerpt:"",headers:[{level:2,title:"Sección I - Preparación de la tarjeta SD",slug:"seccion-i-preparacion-de-la-tarjeta-sd",children:[]},{level:2,title:"Sección II - Instalar/Actualizar Unlaunch",slug:"seccion-ii-instalar-actualizar-unlaunch",children:[]},{level:2,title:"Sección III - Configuración posterior",slug:"seccion-iii-configuracion-posterior",children:[]},{level:2,title:"Sección IV - Limpiar la tarjeta SD",slug:"seccion-iv-limpiar-la-tarjeta-sd",children:[]}],filePathRelative:"es_ES/installing-unlaunch.md"}},1721:(e,a,i)=>{i.r(a),i.d(a,{default:()=>O});var l=i(6252);const n=(0,l.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Unlaunch no es compatible con consolas de desarrollo de Nintendo DSi.</p></div><p>Unlaunch es un exploit que tiene lugar al arrancar el sistema. Esto le permite tener mas privilegios que los exploits normales de títulos DSiWare como Memory Pit, lo que hace que sea capaz de hacer lo siguiente:</p><ul><li>Iniciar aplicaciones al encender el sistema (sea homebrew o DSiWare), con combinaciones de botones opcionales.</li><li>Acceder a la ranura Slot-1, permitiéndote volcar cartuchos de juegos e iniciar flashcarts incompatibles con tu sistema.</li><li>Remover el bloqueo regional en cartuchos de juegos con mejoras para Nintendo DSi o que sean exclusivos de la misma.</li><li>Ejecutar homebrew antiguo de Nintendo DS a través de nds-bootstrap-hb.</li><li>Protección contra bloqueos totales de la consola.</li><li>Elmina el requisito de ROMs donantes para ejecutar juegos mejorados para DSi en modo DSi</li><li>Para los usuarios de Memory Pit (otros exploits ya son capaces de esto): <ul><li>Compatibilidad mejorada con títulos DSiWare ejecutados desde la tarjeta SD.</li><li>Mejor sonido en GBARunner2.</li></ul></li></ul>',3),o={class:"custom-container danger"},s=(0,l._)("p",{class:"custom-container-title"},"DANGER",-1),c=(0,l.Uk)("Si aún no lo has hecho, por favor haz una "),r=(0,l._)("a",{href:"dumping-nand"},"copia de seguridad de la NAND",-1),t=(0,l.Uk)(". Si bien las probabilidades son escasas, Unlaunch puede bloquear totalmente tu consola de forma accidental. Una copia de respaldo de la NAND y "),u={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("modificación del hardware"),p=(0,l.Uk)(" te permiten restaurar esta copia de respaldo, siempre y cuando sepas como soldar."),h=(0,l.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Asegúrate de que tu consola está cargada mientras sigues estos pasos. Si el sistema se apaga repentinamente en medio del proceso, podría causar daños graves.</p></div><h2 id="seccion-i-preparacion-de-la-tarjeta-sd" tabindex="-1"><a class="header-anchor" href="#seccion-i-preparacion-de-la-tarjeta-sd" aria-hidden="true">#</a> Sección I - Preparación de la tarjeta SD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>¿Utilizas Windows, Linux o macOS? Usa <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> para configurar automáticamente tu tarjeta SD.</p></div>',3),m=(0,l.Uk)("Descarga la última version de "),g={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("Unlaunch"),S=(0,l.Uk)(". "),f={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("Enlace alternativo"),v=(0,l.Uk)(", si el de arriba no funciona."),U=(0,l._)("li",null,[(0,l.Uk)("Extrae "),(0,l._)("code",null,"UNLAUNCH.DSI"),(0,l.Uk)(" del archivo "),(0,l._)("code",null,"unlach.zip"),(0,l.Uk)(", y colócalo en cualquier lugar de tu tarjeta SD.")],-1),q=(0,l.Uk)("Comprueba que aún tienes TWiLight Menu++ en tu tarjeta SD. "),D=(0,l.Uk)("Si no estás seguro, sigue las instrucciones en la página "),_=(0,l.Uk)("Lanzar el Exploit"),E=(0,l.Uk)("."),j=(0,l._)("h2",{id:"seccion-ii-instalar-actualizar-unlaunch",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#seccion-ii-instalar-actualizar-unlaunch","aria-hidden":"true"},"#"),(0,l.Uk)(" Sección II - Instalar/Actualizar Unlaunch")],-1),I=(0,l.uE)('<li>Abre TWiLight Menu++ <ul><li>Si esta es tu primera vez instalando Unlaunch, relanza TWiLight Menu++ a través del exploit que utilizaste antes.</li><li>Si ya has instalado Unlaunch y estás buscando actualizarlo, mantén pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd> mientras enciendes la consola y selecciona el <code>TWiLight Menu++</code> en el que la ruta que acabe en <code>BOOT.NDS</code> se muestra en la pantalla inferior</li></ul></li><li>Entra en la configuración de TWiLight Menu++ <ul><li>Si no has cambiado tu tema, sigue los pasos en la página &quot;Lanzando el Exploit&quot;. De cualquier otra forma, consulta el manual de TWiLight Menu++</li></ul></li><li>Presiona <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd class="face">X</kbd>/<kbd class="face">Y</kbd> hasta que llegues a la sección <code>Ajustes de Unlaunch</code>.</li>',3),y=(0,l.Uk)("Si quieres cambiar el la imágen que Unlaunch utiliza como fondo. selecciona la opción "),L=(0,l._)("code",null,"Fondo",-1),A=(0,l.Uk)(" y elige el que quieras. "),N=(0,l.Uk)("Si quieres crear tu propio fondo para Unlaunch, consulta la "),z={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("página en la Wiki de DS-Homebrew"),w=(0,l.Uk)("."),T=(0,l.uE)('<li>Si quieres mantener la música y los sonidos del Menú DSi, así como la pantalla de Salud y Seguridad al usar el menú original de la consola, entonces <code>desactiva</code> la opción <code>Parches del Launcher</code>. <ul><li>Hacer esto eviará el poder saltar el bloqueo regional y la incompatibildiad de flashcarts.</li></ul></li><li>Sal de la Configuración de TWiLight Menu++</li><li>En el menú de navegación de archivos, ejecuta la aplicación <code>Unlaunch DSi Installer</code>.</li><li>Selecciona la opción Install. <ul><li>Si Unlaunch se congela y te muestra el mensaje <code>ERROR: MISMATCH IN FAT COPIES</code>, por favor revisa la página de <a href="troubleshooting">solución de problemas</a>.</li></ul></li><li>Cuando todo esté listo, reinicia el sistema.</li>',5),x=(0,l.uE)('<p>Si ves el sistema de archivos de Unlaunch en este punto, significa que has modificado exitosamente tu Nintendo DSi.</p><ul><li>Si en cambio, ves una pantalla en negro, por favor revisa la página de <a href="troubleshooting">solución de problemas</a>.</li></ul><h2 id="seccion-iii-configuracion-posterior" tabindex="-1"><a class="header-anchor" href="#seccion-iii-configuracion-posterior" aria-hidden="true">#</a> Sección III - Configuración posterior</h2><p>Actualmente, Unlaunch inicia por defecto su sistema de archivos al encender la consola, pero puedes cambiar esto para iniciar lo que tú quieras.</p><ol><li>Enciende tu consola mientras mantienes pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>. <ul><li>Esto deberia iniciar el sistema de archivos de Unlaunch.</li></ul></li><li>Ve a <code>OPTIONS</code> y echa un vistazo a las opciones disponibles. <ul><li>La opción <kbd class="face">A</kbd> + <kbd class="face">B</kbd> está configurada para inciar el sistema de archivos de Unlaunch. Esta opción está bloqueada y no puede ser cambiada.</li><li>Las opciónes <code>NO BUTTON</code> y <code>BUTTON A / B / X / Y</code> pueden ser modificadas como quieras para escoger qué cargará tu consola al encenderse dependiendo de los botones que mantengas persionados. Puedes configurar estas opciones para iniciar cualquier título DSiWare, Homebrew, la ranura Slot-1, Wifiboot o el sistema de archivos de Unlaunch. <ul><li>Para que alguna de estas opciones inicie TWiLight Menu++, selecciona el archivo <code>TWiLight Menu++</code> en el que la ruta que acabe en <code>BOOT.NDS</code> se muestre en la pantalla inferior.</li><li>Para que alguna de estas opciones inicie el Menú DSi original, selecciona el archivo <code>Launcher</code>.</li></ul></li><li>La opción <code>LOAD ERROR</code> es en lo que tu DSi iniciará si lo que tú hayas configurado falla, como por ejemplo, una archivo en la tarjeta SD cuando esta no está en la consola.</li></ul></li><li>Selecciona <code>SAVE &amp; EXIT</code> para guardar la configuración, luego, apaga la consola.</li></ol><h2 id="seccion-iv-limpiar-la-tarjeta-sd" tabindex="-1"><a class="header-anchor" href="#seccion-iv-limpiar-la-tarjeta-sd" aria-hidden="true">#</a> Sección IV - Limpiar la tarjeta SD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Esa sección es opcional, y su único propósito es mantener tu tarjeta SD ordenada y remover los archivos que no necesites.</p></div><ul><li>Elimina el archivo <code>sd:/private/ds/app/484E494A/pit.bin</code> en tu tarjeta SD. <ul><li>En caso de que hayas utilizado otro exploit, borra sus archivos.</li></ul></li><li>Elimina el archivo <code>UNLAUNCH.DSI</code> de tu tarjeta SD.</li></ul>',8),M={},O=(0,i(3744).Z)(M,[["render",function(e,a){const i=(0,l.up)("OutboundLink"),M=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("div",o,[s,(0,l._)("p",null,[c,r,t,(0,l._)("a",u,[d,(0,l.Wm)(i)]),p])]),h,(0,l._)("ol",null,[(0,l._)("li",null,[m,(0,l._)("a",g,[b,(0,l.Wm)(i)]),S,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",f,[k,(0,l.Wm)(i)]),v])])]),U,(0,l._)("li",null,[q,(0,l._)("ul",null,[(0,l._)("li",null,[D,(0,l.Wm)(M,{to:"/es_ES/launching-the-exploit.html#twilight-menu"},{default:(0,l.w5)((()=>[_])),_:1}),E])])])]),j,(0,l._)("ol",null,[I,(0,l._)("li",null,[y,L,A,(0,l._)("ul",null,[(0,l._)("li",null,[N,(0,l._)("a",z,[W,(0,l.Wm)(i)]),w])])]),T]),x],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,l]of a)i[e]=l;return i}}}]);