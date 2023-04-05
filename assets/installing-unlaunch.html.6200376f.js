import{_ as r,o as d,c as h,a as e,d as n,b as o,w as l,e as s,r as a}from"./app.13059b59.js";const p={},_={class:"custom-container danger"},f=e("p",{class:"custom-container-title"},"DANGER",-1),g={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},b=s('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Make sure your console is charged when following this process. A sudden power loss could result in serious damage.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Unlaunch is not compatible with Nintendo DSi development consoles.</p></div><h2 id="section-i-sd-card-setup" tabindex="-1"><a class="header-anchor" href="#section-i-sd-card-setup" aria-hidden="true">#</a> Section I - SD card setup</h2>',3),m={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},w={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,[n("Extract "),e("code",null,"UNLAUNCH.DSI"),n(" from the "),e("code",null,"unlaunch.zip"),n(" archive and place it anywhere on your SD card")],-1),k={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"section-ii-installing-updating-unlaunch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-installing-updating-unlaunch","aria-hidden":"true"},"#"),n(" Section II - Installing/Updating Unlaunch")],-1),D=e("li",null,[n("If you have already installed Unlaunch and are looking to update it, hold "),e("kbd",{class:"face"},"A"),n(" + "),e("kbd",{class:"face"},"B"),n(" while booting and select the option labeled "),e("code",null,"TWiLight Menu++")],-1),I=e("code",null,"TWiLight Menu++",-1),T=e("code",null,"BOOT.NDS",-1),v={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},U=s('<li>Launch TWiLight Menu++ Settings <ul><li>If you haven&#39;t changed your theme, press <code>SELECT</code> and touch the small DS icon on the bottom of the touch screen. Otherwise, see the TWiLight Menu++ Manual</li></ul></li><li>Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the <code>Unlaunch settings</code> page</li>',2),N=e("code",null,"Background",-1),L={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,"Exit TWiLight Menu++ Settings",-1),A=e("code",null,"Unlaunch DSi Installer",-1),W={href:"https://github.com/DS-Homebrew/GodMode9i/releases",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"Unlaunch.dsi",-1),B=e("br",null,null,-1),E=e("code",null,"ERROR: MISMATCH IN FAT COPIES",-1),O=e("li",null,"When completed, reboot your system",-1),C=e("p",null,"If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.",-1),R=e("h2",{id:"section-iii-post-unlaunch-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iii-post-unlaunch-configuration","aria-hidden":"true"},"#"),n(" Section III - Post-Unlaunch configuration")],-1),F=e("p",null,"Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.",-1),H=e("kbd",{class:"face"},"A",-1),V=e("kbd",{class:"face"},"B",-1),G=e("li",null,"This should launch the Unlaunch Filemenu",-1),P=e("code",null,"TWiLight Menu++",-1),Y=s('<li>Navigate to <code>OPTIONS</code>, and look at the available options <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch&#39;s menu, and as such cannot be changed</li><li>The <code>NO BUTTON</code> and <code>BUTTON A / B / X / Y</code> options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch&#39;s Filemenu <ul><li>For TWiLight Menu++, select <code>TWiLight Menu++</code></li><li>For the original DSi Menu, select <code>Launcher</code></li></ul></li><li><code>LOAD ERROR</code> is what your DSi will load if loading what you have set fails, such as the SD card not being inserted</li></ul></li><li>Select <code>SAVE &amp; EXIT</code> to save your settings, then turn off your DSi</li>',2),z=e("h2",{id:"section-iv-cleaning-up-your-sd-card",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iv-cleaning-up-your-sd-card","aria-hidden":"true"},"#"),n(" Section IV - Cleaning up your SD card")],-1),X=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"This section is optional and only serves for keeping your SD card tidy of files you won't need.")],-1),J=e("ul",null,[e("li",null,[n("Delete the "),e("code",null,"sd:/private/ds/app/484E494A/pit.bin"),n(" file from your SD card "),e("ul",null,[e("li",null,[n("If "),e("code",null,"tip.bin"),n(" still exists, then rename it back to "),e("code",null,"pit.bin")])])]),e("li",null,[n("You can now restore the "),e("code",null,"DCIM"),n(" folder that was on the root of your SD card, if this folder existed")]),e("li",null,[n("Delete the "),e("code",null,"UNLAUNCH.DSI"),n(" file from your SD card")])],-1),j=e("ul",null,[e("li",null,[n("Delete the "),e("code",null,"800031_104784BAB6B57_000.ppm"),n(" and "),e("code",null,"T00031_1038C2A757B77_000.ppm"),n(" files from inside the following folders: "),e("ul",null,[e("li",null,[e("code",null,"sd:/private/ds/app/4B47554A/001"),n(" (Japan)")]),e("li",null,[e("code",null,"sd:/private/ds/app/4B475545/001"),n(" (USA)")]),e("li",null,[e("code",null,"sd:/private/ds/app/4B475556/001"),n(" (Europe/Australia)")]),e("li",null,"You can also delete the entire folders for the regions besides your own")])]),e("li",null,[n("Delete the "),e("code",null,"UNLAUNCH.DSI"),n(" file from your SD card")])],-1);function q(K,Q){const i=a("RouterLink"),t=a("ExternalLinkIcon"),u=a("Tab"),c=a("Tabs");return d(),h("div",null,[e("div",_,[f,e("p",null,[n("If you have not yet done so, please follow "),o(i,{to:"/dumping-nand.html"},{default:l(()=>[n("Dumping NAND")]),_:1}),n(". While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + "),e("a",g,[n("hardmod"),o(t)]),n(" would allow you to restore this backup, provided you know how to solder.")])]),b,e("ol",null,[e("li",null,[n("Download the latest version of "),e("a",m,[n("Unlaunch"),o(t)]),e("ul",null,[e("li",null,[e("a",w,[n("Mirror link"),o(t)]),n(", if the above doesn't work")])])]),y,e("li",null,[n("Verify you still have TWiLight Menu++ on your SD card "),e("ul",null,[e("li",null,[n("If you are unsure, follow the instructions from the "),e("a",k,[n("TWiLight Menu++ install guide"),o(t)])])])])]),S,e("ol",null,[e("li",null,[n("Open TWiLight Menu++ "),e("ul",null,[e("li",null,[n("If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the "),o(i,{to:"/launching-the-exploit.html"},{default:l(()=>[n("exploit that you used")]),_:1})]),D,e("li",null,[n("If several options are labeled "),I,n(", select the option in where "),T,n(" is shown at the end of the path on the bottom screen "),e("ul",null,[e("li",null,[n("This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you "),e("a",v,[n("update your installation"),o(t)])])])])])]),U,e("li",null,[n("If you want to change Unlaunch's background image, select "),N,n(" and choose the one you want "),e("ul",null,[e("li",null,[n("If you want to create your own Unlaunch background, see the "),e("a",L,[n("DS-Homebrew Wiki page"),o(t)])])])]),M,e("li",null,[n("In the file navigation menu, launch "),A,e("ul",null,[e("li",null,[n("If you see two black screens after launching, download "),e("a",W,[n("GodMode9i"),o(t)]),n(", put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start "),x,B,n(" This method does not enable Unlaunch to use custom patches and background")])])]),e("li",null,[n('Select the "install now" option '),e("ul",null,[e("li",null,[n("If Unlaunch freezes at "),E,n(", please take a look at the "),o(i,{to:"/troubleshooting.html"},{default:l(()=>[n("Troubleshooting")]),_:1}),n(" page")])])]),O]),C,e("ul",null,[e("li",null,[n("If you see a black screen, please take a look at the "),o(i,{to:"/troubleshooting.html"},{default:l(()=>[n("Troubleshooting")]),_:1}),n(" page")])]),R,F,e("ol",null,[e("li",null,[n("Power on your console while holding "),H,n(" and "),V,e("ul",null,[G,e("li",null,[n("If only the background is shown, or if no files from the SD card are shown (ex. "),P,n("), then you'll need to "),o(i,{to:"/sd-card-setup.html"},{default:l(()=>[n("reformat the SD card")]),_:1})])])]),Y]),z,X,o(c,{tabs:""},{default:l(()=>[o(u,{tab:"",name:"Memory Pit",default:""},{default:l(()=>[J]),_:1}),o(u,{tab:"",name:"Flipnote Lenny"},{default:l(()=>[j]),_:1})]),_:1})])}var $=r(p,[["render",q],["__file","installing-unlaunch.html.vue"]]);export{$ as default};
