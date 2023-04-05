import{_ as c,o as l,c as r,a as e,d as o,b as a,w as d,e as t,r as i}from"./app.13059b59.js";const u={},p=t('<p>Ta strona s\u0142u\u017Cy do tworzenia kopii zapasowej NAND, kt\xF3ra jest kopi\u0105 danych znajduj\u0105cych si\u0119 w pami\u0119ci wewn\u0119trznej Nintendo DSi. It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Make sure the SD card has at least 250MB of free space, or else you&#39;ll run into an error message in dumpTool.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.</p></div><h2 id="sekcja-i-konfiguracja-karty-sd" tabindex="-1"><a class="header-anchor" href="#sekcja-i-konfiguracja-karty-sd" aria-hidden="true">#</a> Sekcja I - Konfiguracja karty SD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you have already downloaded dumpTool from another section of this guide, you can skip this section.</p></div>',5),h={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[o("Umie\u015B\u0107 "),e("code",null,"dumpTool.nds"),o(" w dowolnym miejscu na karcie SD")],-1),k=t('<h2 id="sekcja-ii-\u2013-dumping-nand" tabindex="-1"><a class="header-anchor" href="#sekcja-ii-\u2013-dumping-nand" aria-hidden="true">#</a> Sekcja II \u2013 Dumping NAND</h2><ol><li>Uruchom <code>dumpTool</code> przez TWiLight Menu++</li><li>Naci\u015Bnij przycisk <kbd class="face">A</kbd> na swoim Nintendo DSi, aby zacz\u0105\u0107 zrzuca\u0107 sw\xF3j NAND <ul><li>Kopia zapasowa NAND zajmuje zazwyczaj oko\u0142o 7 minut</li></ul></li><li>Kiedy kopiowanie NAND zostanie zako\u0144czona, naci\u015Bnij przycisk <kbd>START</kbd> na swoim Nintendo DSi, aby wyj\u015B\u0107 z dumpTool</li><li>Wy\u0142\u0105cz konsol\u0119 i w\u0142\xF3\u017C kart\u0119 SD z powrotem do komputera</li><li>Przechowuj t\u0119 kopi\u0119 w bezpiecznym miejscu, gdzie jej nie stracisz <ul><li>Je\u015Bli to mo\u017Cliwe, utw\xF3rz wiele kopii zapasowych na r\xF3\u017Cnych urz\u0105dzeniach pami\u0119ci masowej</li><li>Po wykonaniu kopii zapasowej w innym miejscu, mo\u017Cesz usun\u0105\u0107 j\u0105 z karty SD</li></ul></li></ol>',2),_={class:"custom-container warning"},z=e("p",{class:"custom-container-title"},"WARNING",-1),w=e("code",null,"nand.bin",-1),j=e("code",null,"nand.bin.sha1",-1),f=e("code",null,"nand.bin",-1),y={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},b={class:"custom-container tip"},g=e("p",{class:"custom-container-title"},"TIP",-1);function N(T,D){const n=i("ExternalLinkIcon"),s=i("RouterLink");return l(),r("div",null,[p,e("ol",null,[e("li",null,[o("Pobierz najnowsz\u0105 wersj\u0119 "),e("a",h,[o("dumpTool"),a(n)])]),m]),k,e("div",_,[z,e("p",null,[o("The SHA1 hash of the "),w,o(" will not match the hash stored in "),j,o(". This is because dumpTool adds additional data known as a no$gba footer to the "),f,o(" file after the SHA1 hash is calculated. You can use the "),e("a",y,[o("hiyaCFW Helper"),a(n)]),o(" to create a copy without the footer.")])]),e("div",b,[g,e("p",null,[o("Continue to "),a(s,{to:"/pl_PL/installing-unlaunch.html"},{default:d(()=>[o("Installing Unlaunch")]),_:1}),o(" (Optional)")])])])}var I=c(u,[["render",N],["__file","dumping-nand.html.vue"]]);export{I as default};
