"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6359],{2902:(e,a,t)=>{t.r(a),t.d(a,{data:()=>l});const l={key:"v-3f34754c",path:"/hu_HU/faq.html",title:"GYIK",lang:"hu-HU",frontmatter:{title:"GYIK"},excerpt:"",headers:[{level:2,title:"Kell frissítenem a rendszert?",slug:"kell-frissitenem-a-rendszert",children:[]},{level:2,title:"Melyik a legjobb exploit?",slug:"melyik-a-legjobb-exploit",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"Flipnote Lenny",slug:"flipnote-lenny",children:[]},{level:3,title:"Unlaunch",slug:"unlaunch",children:[]}]},{level:2,title:"Vesztek el funkcionalitást, ha moddolom a rendszerem?",slug:"vesztek-el-funkcionalitast-ha-moddolom-a-rendszerem",children:[]},{level:2,title:"Hogyan játszhatok Nintendo DS játék kártya dumpokkal?",slug:"hogyan-jatszhatok-nintendo-ds-jatek-kartya-dumpokkal",children:[]},{level:2,title:"Hogyan tudom frissíteni a homebrew appjaim?",slug:"hogyan-tudom-frissiteni-a-homebrew-appjaim",children:[]},{level:2,title:"Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?",slug:"uj-vagyok-vagy-szeretnem-ujra-csinalni-a-telepitest-hol-kezdjem",children:[]},{level:2,title:"Hogyan tudom eltávolítani a szülői felügyeletet?",slug:"hogyan-tudom-eltavolitani-a-szuloi-felugyeletet",children:[]},{level:2,title:"Meg tudom változtatni a Nintendo DSi konzolom régióját?",slug:"meg-tudom-valtoztatni-a-nintendo-dsi-konzolom-regiojat",children:[]},{level:2,title:"Mi történt a hiyaCFW telepítési útmutatóval?",slug:"mi-tortent-a-hiyacfw-telepitesi-utmutatoval",children:[]},{level:2,title:"Milyen SD kártyát kell, hogy használjak?",slug:"milyen-sd-kartyat-kell-hogy-hasznaljak",children:[]},{level:2,title:"Használhatom a DSi SD kártyámat más rendszereken is?",slug:"hasznalhatom-a-dsi-sd-kartyamat-mas-rendszereken-is",children:[]},{level:2,title:"Az Unlaunch oldal azt mondja, hogy a 2.0 verzió nem tekinthető biztonságosnak. Javasolt helyette egy korábbi verzió használata?",slug:"az-unlaunch-oldal-azt-mondja-hogy-a-2-0-verzio-nem-tekintheto-biztonsagosnak-javasolt-helyette-egy-korabbi-verzio-hasznalata",children:[]},{level:2,title:"Hogyan telepítek DSiWare-t?",slug:"hogyan-telepitek-dsiware-t",children:[]}],filePathRelative:"hu_HU/faq.md"}},9426:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Z});var l=t(6252);const n=(0,l.uE)('<h2 id="kell-frissitenem-a-rendszert" tabindex="-1"><a class="header-anchor" href="#kell-frissitenem-a-rendszert" aria-hidden="true">#</a> Kell frissítenem a rendszert?</h2><p>Nem. A Nintendo DSi képes homebrew futtatására bármilyen verzión, beleértve a legutolsót is, de nincs előnye a frissítésnek. A DSi Shop teljesen le lett állítva, a DSi Camera Facebook integrációja régóta halott és az egyetlen dolog amit a frissítések csináltak, az a flashcard-ok blokkolása. Továbbá van egy extrém kicsi kockázata a DSi-d <strong>brickelésének</strong> a rendszer frissítéssel, ami hasonló kockázat az Unlaunch telepítéséhez.</p><h2 id="melyik-a-legjobb-exploit" tabindex="-1"><a class="header-anchor" href="#melyik-a-legjobb-exploit" aria-hidden="true">#</a> Melyik a legjobb exploit?</h2><p>Az Unlaunch a legjobb exploit a DSi-hez, az egyetlen hátránya, hogy van egy kicsi kockázata a brickelésnek a telepítéskor. Általában ajánlott a Memory Pit használata (mert az a legegyszerűbb és leginkább kompatibilis exploit) az Unlaunch telepítésére, azonba, ha úgy döntesz, hogy szeretnéd elkerülni a kockázatot, akkor ajánlott a Flipnote Lenny használata, mert a Memory Pit használata problémákat okozhat bizonyos esetekben. Alább az előnyök és hátrányok listája minden exploithoz:</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>Előnyök:</p><ul><li>Gyorsan és könnyen használható</li><li>Nincs kockázata a konzol sérülésének, az eltávolítás olyan egyszerű, mint kivenni az SD kártyát vagy letörölni egy fájl</li><li>Kompatibilis mind DSi konzollal, kivéve ha rossz a kamerája és még nem lett végrehajtva a kamera oktatóprogram</li></ul><p>Hátrányok:</p><ul><li>Szükség van a DSi Camera betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni</li><li>Inkompatibilis bizonyos DSi módú címekkl és homebrew-va azért mert a WRAM csak az ARM7 CPU számára nyitott</li><li>Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén</li><li>A hozzáférés a DSP-hez blokkolt, ezért rosszabb a hang a GBARunner2-ben</li><li>A fényképek az SD kártyán nem megtekinthetők a DSi Camera alkalmazásban, amíg a Memory Pit telepített, mert ez a trigger az exploithoz <ul><li>Az egyetlen módja, hogy az SD kártyán található fotókat megtekintsd amíg a Memory Pit telepített, hogy elindítod a ROM dumpját a DSi Camera alkalmazásnak <strong>TW</strong>i<strong>L</strong>ight Menu++-szal, hgy bootoljon nds-bootstrap-re (v0.61.3 vagy későbbi)</li></ul></li></ul><h3 id="flipnote-lenny" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny" aria-hidden="true">#</a> Flipnote Lenny</h3><p>Előnyök:</p><ul><li>Jobb kompatibilitás a DSi módú címekkel és homebrew-okkal, mint a Memory Pit esetében</li><li>Nincs kockázata a konzol sérülésének, az eltávolítás olyan egyszerű, mint kivenni az SD kártyát vagy letörölni egy mappát</li><li>Jobb hang a GBARunner2-ben</li></ul><p>Hátrányok:</p><ul><li>Kell hozzá Flipnote Studio</li><li>Szükség van a Flipnote Studio betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni, ami kicsit több időt igényel, mint a Memory Pit</li><li>Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>Előnyök:</p><ul><li>Lehetővé teszi Allows homebrew és DSiWare azonnali betöltését rendszer bootoláskor, opcionális gyorsgombokkal</li><li>Teljes hozzáférés a rendszerhez, korlátozások nélkül, beleértve: <ul><li>Hozzáférés a Slot-1-hez, ami lehetővé teszi a játék kártyák dumpolását és inkompatibilis flashcard-ok betöltését</li><li>Jobb hang a GBARunner2-ben</li></ul></li><li>A régió zárakat eltávolítja a DSi-Enchanced/Exkluzív játék kártyák esetében</li><li>Védelem a legtöbb lehetőség ellen, ami a DSi-t brickelheti</li><li>DSi-Enhanced játékok futhatnak DSi módban Donor ROM nélkül</li><li>Régi homebrew futtatható az nds-bootstrap-hb-n keresztül</li></ul><p>Hátrányok:</p>',18),i=(0,l._)("li",null,[(0,l.Uk)("Van egy nagyon kicsi kockázata a konzol "),(0,l._)("strong",null,"brickelésének"),(0,l.Uk)(" a telepítésekor")],-1),r=(0,l._)("li",null,"Nem kompatibilis fejlesztői konzolokkal",-1),o=(0,l._)("h2",{id:"vesztek-el-funkcionalitast-ha-moddolom-a-rendszerem",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vesztek-el-funkcionalitast-ha-moddolom-a-rendszerem","aria-hidden":"true"},"#"),(0,l.Uk)(" Vesztek el funkcionalitást, ha moddolom a rendszerem?")],-1),s=(0,l._)("p",null,[(0,l.Uk)("Ha telepíted az Unlaunch-öt vagy a Flipnote Lenny-t használod, nem vesztesz el funkcionalitást. Ha a Memory Pit-et használod, nem fogsz tudni fotókat megnézni az SD kártyáról a DSi Camera alkalmazással, amíg a Memory Pit telepített. Ahhoz, hogy újra tudjál az SD kártyáról fotókat megtekinten, telepítsd az Unlaunch-öt vagy válts más exploitra és töröld a Memory Pit "),(0,l._)("code",null,"pit.bin"),(0,l.Uk)(" fájlját.")],-1),k=(0,l._)("h2",{id:"hogyan-jatszhatok-nintendo-ds-jatek-kartya-dumpokkal",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hogyan-jatszhatok-nintendo-ds-jatek-kartya-dumpokkal","aria-hidden":"true"},"#"),(0,l.Uk)(" Hogyan játszhatok Nintendo DS játék kártya dumpokkal?")],-1),h=(0,l._)("p",null,"A játék kártya dump játékok használatához a konzolnak szüksége van flashcard-ra vagy nds-bootstrap-re, egy programra, ami lehetővé teszi, hogy a belső SD kártyáról játszhatók legyenek a játékok a Slot-1 írás és olvasás átirányításával.",-1),d=(0,l._)("li",null,"A TWiLight Menu++-szal navigálhatsz az SD kártyádon, hogy megtaláld a ROM fájlokat, amiket nds-bootstrap-pel játszhatsz. A TWiLight Menu++ használatának előnye a csalás menü, a játékonkénti beállítások és hogy megkerüli a korlátozásokat, amikkel a forwarder-ek rendelkeznek. Más szavakkal, csak felmásolod a ROM fájlokat és játszhatsz velük bármilyen telepítés nélkül. Nincs 39 cím limit, sem hiyaCFW, sem Unlaunch nem szükséges és nincs korlátozás az SD kártya szabad tárhelyével kapcsolatosan sem",-1),m={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},z={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},g=(0,l._)("h2",{id:"hogyan-tudom-frissiteni-a-homebrew-appjaim",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hogyan-tudom-frissiteni-a-homebrew-appjaim","aria-hidden":"true"},"#"),(0,l.Uk)(" Hogyan tudom frissíteni a homebrew appjaim?")],-1),u=(0,l._)("strong",null,"Unlaunch",-1),y=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("strong",null,"Nem"),(0,l.Uk)(" kell eltávolítanod az Unlaunch-öt mielőtt ezt csinálod")])],-1),b=(0,l._)("strong",null,"hiyaCFW",-1),p=(0,l._)("code",null,"hiya.dsi",-1),c={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},v=(0,l._)("strong",null,"TWiLight Menu++",-1),f={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},j=(0,l.uE)("<li><strong>nds-bootstrap</strong> - Másold az <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> fájlokat az <code>_nds</code> mappába, az SD kártyád gyökerében <ul><li>Ha használsz TWiLight Menu++-t, erős rá az esély, hogy a legfrissebb nds-bootstrap kiadás is megtalálható a TWiLight Menu++-ban</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, stb.</strong> - Kövesd azokat az útmutatókat, ahol letöltötted őket</li>",2),_=(0,l._)("p",null,"Más homebrew-ok elképzelhető, hogy más metódust használnak a frissítésre.",-1),U=(0,l._)("h2",{id:"uj-vagyok-vagy-szeretnem-ujra-csinalni-a-telepitest-hol-kezdjem",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#uj-vagyok-vagy-szeretnem-ujra-csinalni-a-telepitest-hol-kezdjem","aria-hidden":"true"},"#"),(0,l.Uk)(" Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?")],-1),S=(0,l._)("li",null,"Ha még nem módosítottad a konzolodat, vagy frissíteni szeretnéd az Unlaunch-öt a rendszereden, azt ajánljuk, hogy kezd az elejétől az útmutatót, követve az oldalakat. Legyél biztos abban, hogy mindent elolvastál a honlapon",-1),D={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},M=(0,l._)("h2",{id:"hogyan-tudom-eltavolitani-a-szuloi-felugyeletet",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hogyan-tudom-eltavolitani-a-szuloi-felugyeletet","aria-hidden":"true"},"#"),(0,l.Uk)(" Hogyan tudom eltávolítani a szülői felügyeletet?")],-1),w={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},W=(0,l._)("h2",{id:"meg-tudom-valtoztatni-a-nintendo-dsi-konzolom-regiojat",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#meg-tudom-valtoztatni-a-nintendo-dsi-konzolom-regiojat","aria-hidden":"true"},"#"),(0,l.Uk)(" Meg tudom változtatni a Nintendo DSi konzolom régióját?")],-1),H=(0,l._)("p",null,"Igen, néhány különböző metódus áll rendelkezésre, attól függően mit szeretnél változtatni:",-1),x=(0,l._)("li",null,"A legbiztonságosabb és legegyszerűbb metódus a TWiLight Menu++ telepítése, az bármelyik hivatalos nyelvet tudja használni, és még többet a NAND módosítása nélkül",-1),A={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},T=(0,l._)("h2",{id:"mi-tortent-a-hiyacfw-telepitesi-utmutatoval",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#mi-tortent-a-hiyacfw-telepitesi-utmutatoval","aria-hidden":"true"},"#"),(0,l.Uk)(" Mi történt a hiyaCFW telepítési útmutatóval?")],-1),C={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},L=(0,l.uE)('<ul><li>Ha linkelve lettél az oldalra egy másik útmutatóból, akkor a lépések amit követtél valószínűleg elavultak. Kérjük használd ezt az útmutatót helyette, mert folyamatosan karbantartott a projekt fejlesztői által</li></ul><h2 id="milyen-sd-kartyat-kell-hogy-hasznaljak" tabindex="-1"><a class="header-anchor" href="#milyen-sd-kartyat-kell-hogy-hasznaljak" aria-hidden="true">#</a> Milyen SD kártyát kell, hogy használjak?</h2><ul><li>Megbízható márkájú SD kártyát kell vásárolnod</li><li>Egy teljes méretű SD kártya vagy egy microSD kártya adapterrel is megfelelő</li><li>Bármilyen méret 1 GB és 2 TB között működni fog. Általános használatra 8 GB elég <ul><li>Néhány szoftver, mint például a hiyaCFW, hosszabb töltési idővel rendelkezhet nagyobb SD kártya kapacitás esetén</li></ul></li><li>8-as sebesség osztályú vagy gyorsabb ajánlott</li></ul><h2 id="hasznalhatom-a-dsi-sd-kartyamat-mas-rendszereken-is" tabindex="-1"><a class="header-anchor" href="#hasznalhatom-a-dsi-sd-kartyamat-mas-rendszereken-is" aria-hidden="true">#</a> Használhatom a DSi SD kártyámat más rendszereken is?</h2><p>Általában igen, két kivétellel:</p><ul><li>A hiyaCFW csak azon a rendszeren fog működni, amin telepítve lett</li><li>Még ha nds-bootstrap-et vagy egy flashcard-ot is használd a friend code-ok az online NDS játékok esetében alaphelyzetbe állnak, ha megpróbálsz online lenni egy másik konzolon</li></ul>',6),R={id:"az-unlaunch-oldal-azt-mondja-hogy-a-2-0-verzio-nem-tekintheto-biztonsagosnak-javasolt-helyette-egy-korabbi-verzio-hasznalata",tabindex:"-1"},P=(0,l._)("a",{class:"header-anchor",href:"#az-unlaunch-oldal-azt-mondja-hogy-a-2-0-verzio-nem-tekintheto-biztonsagosnak-javasolt-helyette-egy-korabbi-verzio-hasznalata","aria-hidden":"true"},"#",-1),E={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},K=(0,l._)("p",null,"Az Unlaunch oldal nem került frissítésre, mióta a 2.0 verzió kiadásra került, ami két évvel ezelőtt volt. A legtöbb felhasználó nem tapasztalt problémát ezzel a verzióval, így biztonságosnak tekinthető.",-1),B=(0,l._)("h2",{id:"hogyan-telepitek-dsiware-t",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hogyan-telepitek-dsiware-t","aria-hidden":"true"},"#"),(0,l.Uk)(" Hogyan telepítek DSiWare-t?")],-1),G=(0,l._)("p",null,"Három lehetőség van DSiWare-re egy DSi-n:",-1),O=(0,l._)("li",null,"Egyszerűen csak futtasd a ROM-ot a TWiLight Menu++-ból; ez a legegyszerűbb módja és az egyetlen korlát az SD kártyád mérete, habár jelentkezhetnek jelentéktelen kompatiblitási problémák",-1),J={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/JeffRuLz/TMFH/releases",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},q={},Z=(0,t(3744).Z)(q,[["render",function(e,a){const t=(0,l.up)("RouterLink"),q=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("ul",null,[i,(0,l._)("li",null,[(0,l.Uk)("Egy másik kicsit magasabb kockázata van a brickelésnek, amikor "),(0,l.Wm)(t,{to:"/hu_HU/uninstalling-unlaunch.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("eltávolítod")])),_:1})]),r]),o,s,k,h,(0,l._)("ul",null,[d,(0,l._)("li",null,[(0,l.Uk)("A hiyaCFW felhasználók létrehozhatnak forwarder-eket az SDNAND DSi Menu-be a DS-Homebrew Wiki "),(0,l._)("a",m,[(0,l.Uk)("DS játék forwarder-ek"),(0,l.Wm)(q)]),(0,l.Uk)(" útumutató használatával, de vannak korlátozásai. Van egy 39 címes limit és kevésbé kényelmes beállítani, mint használni a TWiLight Menu++-t "),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Ha nincs hiyaCFW-d és szeretnél forwarder-eket használni, kövesd a "),(0,l._)("a",z,[(0,l.Uk)("hiyaCFW telepítési útmutatót"),(0,l.Wm)(q)]),(0,l.Uk)(" a DS-Homebrew Wiki-n")])])])]),g,(0,l._)("ul",null,[(0,l._)("li",null,[u,(0,l.Uk)(" - Kövesd az útmutatót az "),(0,l.Wm)(t,{to:"/hu_HU/installing-unlaunch.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Unlaunch telepítése")])),_:1}),(0,l.Uk)(" oldalon "),y]),(0,l._)("li",null,[b,(0,l.Uk)(" - Cseréld a "),p,(0,l.Uk)("-t az SD kártyád gyökerében a "),(0,l._)("a",c,[(0,l.Uk)("legfrissebb kiadásból"),(0,l.Wm)(q)])]),(0,l._)("li",null,[v,(0,l.Uk)(" - Kövesd a "),(0,l._)("a",f,[(0,l.Uk)("DS-Homebrew Wiki"),(0,l.Wm)(q)]),(0,l.Uk)(" lépéseit")]),j]),_,U,(0,l._)("ul",null,[S,(0,l._)("li",null,[(0,l.Uk)("Ha rendelkezel a legutolsó Unlaunch verzióval, kövesd a "),(0,l._)("a",D,[(0,l.Uk)("TWiLight Menu+ telepítési útmutatót"),(0,l.Wm)(q)]),(0,l.Uk)(" a TWiLight Menu++ rendszeredre telepítéséhez")])]),M,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Az "),(0,l._)("a",w,[(0,l.Uk)("mkey generátor"),(0,l.Wm)(q)]),(0,l.Uk)(" tud generálni olyan kódot, amivel eltávolítható a szülői felügyelet")])]),W,H,(0,l._)("ul",null,[x,(0,l._)("li",null,[(0,l.Uk)("Ha tényleg szeretnéd cserélni a régiót és hiyaCFW-t használsz, akkor használhatod erre Yoti "),(0,l._)("a",A,[(0,l.Uk)("hiyalang"),(0,l.Wm)(q)]),(0,l.Uk)("-ját ázsiai DSI rendszerekhez. Amerikai DSi rendszerekhez használd a "),(0,l._)("a",N,[(0,l.Uk)("hiyalang ezen verzióját"),(0,l.Wm)(q)])]),(0,l._)("li",null,[(0,l.Uk)("Végül, ha cserélni akarod a régiót az aktuális rendszer NAND-ban, használhatod Mighty Max "),(0,l._)("a",F,[(0,l.Uk)("DSi Language Patcher"),(0,l.Wm)(q)]),(0,l.Uk)("-ét")])]),T,(0,l._)("p",null,[(0,l.Uk)("Mivel a hiyaCFW nem ad sok funkcionalitás és problémás és avaró része volt az úutatónak, átmozgatásra került a "),(0,l._)("a",C,[(0,l.Uk)("DS-Homebrew Wiki"),(0,l.Wm)(q)]),(0,l.Uk)("-be.")]),L,(0,l._)("h2",R,[P,(0,l.Uk)(" Az "),(0,l._)("a",E,[(0,l.Uk)("Unlaunch oldal"),(0,l.Wm)(q)]),(0,l.Uk)(" azt mondja, hogy a 2.0 verzió nem tekinthető biztonságosnak. Javasolt helyette egy korábbi verzió használata?")]),K,B,G,(0,l._)("ul",null,[O,(0,l._)("li",null,[(0,l.Uk)("Telepítsd a "),(0,l._)("a",J,[(0,l.Uk)("hiyaCFW"),(0,l.Wm)(q)]),(0,l.Uk)("-t, majd teleptsd a DSiWare-t vagy az "),(0,l._)("a",V,[(0,l.Uk)("NTM"),(0,l.Wm)(q)]),(0,l.Uk)(" vagy a "),(0,l._)("a",I,[(0,l.Uk)("TMFH"),(0,l.Wm)(q)]),(0,l.Uk)(" használatával; mivel ez az akutális DSi Menu a 39 cím korlátozás vonatkozik rá, de a kompatiblitás tökéletes")]),(0,l._)("li",null,[(0,l.Uk)("Telepítsd közvetlenül a SysNAND DSi Menu-be az "),(0,l._)("a",Y,[(0,l.Uk)("NTM"),(0,l.Wm)(q)]),(0,l.Uk)(" használatával; ennek is tökéletes kompatibilitása van, de a 39 cím és az 1024 Block (128 MiB) korátozások vonatkoznak rá, és van egy extrém kicsi brick kockázata belső NAND írása miatt")])])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,l]of a)t[e]=l;return t}}}]);