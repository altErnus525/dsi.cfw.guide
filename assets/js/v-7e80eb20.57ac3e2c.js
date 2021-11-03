"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7357],{1760:(i,e,a)=>{a.r(e),a.d(e,{data:()=>l});const l={key:"v-7e80eb20",path:"/it_IT/installing-unlaunch.html",title:"Installazione di Unlaunch",lang:"it-IT",frontmatter:{title:"Installazione di Unlaunch"},excerpt:"",headers:[{level:2,title:"Sezione I - Configurazione della Scheda SD",slug:"sezione-i-configurazione-della-scheda-sd",children:[]},{level:2,title:"Sezione II - Installazione/Aggiornamento Unlaunch",slug:"sezione-ii-installazione-aggiornamento-unlaunch",children:[]},{level:2,title:"Sezione III - Configurazione Post-Unlaunch",slug:"sezione-iii-configurazione-post-unlaunch",children:[]},{level:2,title:"Sezione IV - Pulizia della scheda SD",slug:"sezione-iv-pulizia-della-scheda-sd",children:[]}],filePathRelative:"it_IT/installing-unlaunch.md",git:{updatedTime:1635959298e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},7004:(i,e,a)=>{a.r(e),a.d(e,{default:()=>M});var l=a(6252);const n=(0,l.uE)("<p>Unlaunch è un exploit che si svolge all&#39;avvio del sistema. Questo gli permette di avere più privilegi dei normali exploit DSiWare come Memory Pit, che lo rende in grado di fare quanto segue:</p><ul><li>Esecuzione di applicazioni all&#39;avvio (homebrew o DSiWare), con combinazioni di pulsanti opzionali</li><li>Accedere alla Slot-1, che consente di dumpare cartucce di gioco e lanciare flashcard incompatibili</li><li>Rimuovere blocchi regionali sui giochi DSi-Enhanced / cartucce di gioco esclusive</li><li>Eseguire i vecchi Homebrew del Nintendo DS tramite nds-bootstrap-hb</li><li>Protezione contro i brick</li><li>Quanto segue per gli utenti di Memory Pit (altri exploit li consentono già): <ul><li>Migliorare la compatibilità con DSiWare avviato dalla scheda SD</li><li>Avere audio migliore in GBARunner2</li></ul></li></ul>",2),o={class:"custom-container danger"},t=(0,l._)("p",{class:"custom-container-title"},"DANGER",-1),c=(0,l.Uk)("Se non l'hai ancora fatto, si prega di seguire "),s=(0,l._)("a",{href:"dumping-nand"},"Effettuare dump della NAND",-1),r=(0,l.Uk)(". Nonostante le probabilità minime, Unlaunch potrebbe accidentalmente provocare un brick al Nintendo DSi. Un backup della NAND + "),u={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("un hardmod"),h=(0,l.Uk)(" ti permetterebbe di ripristinare questo backup, a condizione che tu sappia come saldare."),p=(0,l.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Assicurati che la console sia carica quando si esegue questo processo. Una perdita improvvisa di potenza potrebbe causare gravi danni.</p></div><h2 id="sezione-i-configurazione-della-scheda-sd" tabindex="-1"><a class="header-anchor" href="#sezione-i-configurazione-della-scheda-sd" aria-hidden="true">#</a> Sezione I - Configurazione della Scheda SD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Usi un dispositivo Windows, Linux o macOS? Usa <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> per configurare automaticamente la tua scheda SD.</p></div>',3),m=(0,l.Uk)("Scarica l'ultima versione di "),g={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("Unlaunch"),z={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("Link Mirror"),f=(0,l.Uk)(", se quello sopra non funziona"),k=(0,l._)("li",null,[(0,l.Uk)("Estrai "),(0,l._)("code",null,"UNLAUNCH.DSI"),(0,l.Uk)(" da "),(0,l._)("code",null,"unlaunch.zip"),(0,l.Uk)(" e mettilo ovunque sulla tua scheda SD")],-1),S=(0,l.Uk)("Verifica di avere ancora TWiLight Menu++ sulla tua scheda SD "),U=(0,l.Uk)("Se non sei sicuro, segui le istruzioni dalla pagina "),D=(0,l.Uk)("Avvio dell'Exploit"),I=(0,l._)("h2",{id:"sezione-ii-installazione-aggiornamento-unlaunch",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#sezione-ii-installazione-aggiornamento-unlaunch","aria-hidden":"true"},"#"),(0,l.Uk)(" Sezione II - Installazione/Aggiornamento Unlaunch")],-1),_=(0,l.uE)('<li>Avvia TWiLight Menu++ <ul><li>Se questa è la tua prima volta che installi Unlaunch, rilancia TWiLight Menu++ attraverso l&#39;exploit che hai utilizzato</li><li>Se hai già installato Unlaunch e stai cercando di aggiornarlo, tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l&#39;avvio e seleziona <code> TWiLight Menu++</code> dove <code>BOOT.NDS</code> è mostrato nella schermata inferiore</li></ul></li><li>Apri le impostazioni di TWiLight Menu++ <ul><li>Se non hai cambiato il tuo tema, segui i passaggi nella pagina &quot;Avvio dell&#39;Exploit&quot;. Altrimenti, consulta il manuale di TWiLight Menu++</li></ul></li><li>Premi <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> finché non raggiungi la pagina <code>Impostazioni Unlaunch</code></li>',3),A=(0,l.Uk)("Se vuoi modificare l'immagine di sfondo di Unlaunch, fai clic su "),T=(0,l._)("code",null,"Sfondo",-1),W=(0,l.Uk)(" e scegli quello che vuoi "),L=(0,l.Uk)("Se desideri creare un tuo sfondo personalizzato di Unlaunch, consulta la pagina "),N={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("DS-Homebrew Wiki"),E=(0,l.uE)('<li>Se vuoi la schermata Salute e Sicurezza e la musica del Menu DSi, imposta <code>Patch del Launcher</code> a <code>Disattivato</code><ul><li>Questo manterrà pure il region lock e la whitelist delle cartucce, il che significa che alcune flashcard non saranno utilizzabili nel menu DSi</li></ul></li><li>Esci dalle impostazioni di TWiLight Menu++</li><li>Nel menu di navigazione, avvia <code>Unlaunch DSi Installer</code></li><li>Selezionare l&#39;opzione di installazione <ul><li>Se Unlaunch si blocca a <code>ERROR: MISMATCH IN FAT COPIES</code>, si prega di dare un&#39;occhiata alla pagina <a href="troubleshooting">Risoluzione dei problemi</a></li></ul></li><li>Una volta completato, riavvia il sistema</li>',5),P=(0,l.uE)('<p>Se vedi la schermata del menu di Unlaunch a questo punto, Significa che hai modificato con successo il tuo Nintendo DSi.</p><ul><li>Se vedi una schermata nera, dai un&#39;occhiata alla nostra pagina <a href="troubleshooting">Risoluzione dei problemi</a></li></ul><h2 id="sezione-iii-configurazione-post-unlaunch" tabindex="-1"><a class="header-anchor" href="#sezione-iii-configurazione-post-unlaunch" aria-hidden="true">#</a> Sezione III - Configurazione Post-Unlaunch</h2><p>Attualmente, Unlaunch avvia il suo menu all&#39;avvio di default, ma può essere cambiato avviando all&#39;avvio quello che vuoi.</p><p>Riconfigureremo anche nds-bootstrap per avviarsi in TWiLight Menu++ (invece del titolo DSiWare sfruttato) quando eseguiamo un soft-reset in-gioco.</p><ol><li>Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd><ul><li>Si dovrebbe avviare il menu di Unlaunch</li></ul></li><li>Vai a <code>OPTIONS</code>, e guarda le opzioni disponibili <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd> è stato fatto in codifica fissa per avviarsi nel menu di Unlaunch, e perciò non può essere modificato</li><li>Le opzioni <code>NO BUTTON</code> e <code>BUTTON A /B / X / Y</code> possono essere impostate come preferisci e sceglieranno come caricare il tuo DSi all&#39;avvio a seconda dei pulsanti che vengono premuti. Puoi selezionare qualsiasi DSiWare, homebrew, la scheda Slot-1, wifiboot, o il menu di Unlaunch <ul><li>Per TWiLight Menu++, selezionare l&#39;opzione <code>TWiLight Menu++</code> dove <code>BOOT.NDS</code> è mostrato sullo schermo inferiore</li><li>Per il menu DSi originale, seleziona <code>Launcher</code></li></ul></li><li><code>LOAD ERROR</code> è quello che il tuo DSi caricherà se il caricamento di quello che hai impostato fallisce, come ad esempio se la scheda SD non viene inserita</li></ul></li><li>Salva le tue impostazioni e torna nel menu di Unlaunch</li><li>Passa sopra le opzioni <code>TWiLight Menu++</code> e trova quella che ha un percorso contenente <code>settings.srldr</code> nella schermata inferiore</li><li>Avvia l&#39;opzione evidenziata</li><li>Premi <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> finché non raggiungi <code> Impostazioni Varie Pagina</code> impostazioni</li><li>Imposta l&#39;opzione <code>Exploit DSiWare</code> su <code>Nessuno</code></li></ol><h2 id="sezione-iv-pulizia-della-scheda-sd" tabindex="-1"><a class="header-anchor" href="#sezione-iv-pulizia-della-scheda-sd" aria-hidden="true">#</a> Sezione IV - Pulizia della scheda SD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Questa sezione è opzionale e serve solo per mantenere la scheda SD ordinata di file che non ti servono.</p></div><ul><li>Elimina il file <code>sd:/private/ds/app/484E494A/pit.bin</code> dalla tua scheda SD <ul><li>Se hai usato un altro exploit, elimina invece i file relativi a quell&#39;exploit</li></ul></li><li>Elimina il file <code>UNLAUNCH.DSI</code> dalla tua scheda SD</li></ul>',9),q={},M=(0,a(3744).Z)(q,[["render",function(i,e){const a=(0,l.up)("OutboundLink"),q=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("div",o,[t,(0,l._)("p",null,[c,s,r,(0,l._)("a",u,[d,(0,l.Wm)(a)]),h])]),p,(0,l._)("ol",null,[(0,l._)("li",null,[m,(0,l._)("a",g,[v,(0,l.Wm)(a)]),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",z,[b,(0,l.Wm)(a)]),f])])]),k,(0,l._)("li",null,[S,(0,l._)("ul",null,[(0,l._)("li",null,[U,(0,l.Wm)(q,{to:"/it_IT/launching-the-exploit.html#twilight-menu"},{default:(0,l.w5)((()=>[D])),_:1})])])])]),I,(0,l._)("ol",null,[_,(0,l._)("li",null,[A,T,W,(0,l._)("ul",null,[(0,l._)("li",null,[L,(0,l._)("a",N,[w,(0,l.Wm)(a)])])])]),E]),P],64)}]])},3744:(i,e)=>{e.Z=(i,e)=>{for(const[a,l]of e)i[a]=l;return i}}}]);