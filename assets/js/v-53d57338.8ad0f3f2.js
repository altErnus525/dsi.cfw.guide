"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1196],{6618:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-53d57338",path:"/troubleshooting.html",title:"Troubleshooting",lang:"en-US",frontmatter:{title:"Troubleshooting"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Unlaunch freezes at MISMATCH IN FAT COPIES",slug:"unlaunch-freezes-at-mismatch-in-fat-copies",children:[]},{level:3,title:'There is no audio or boot splash when launching "Launcher" using Unlaunch',slug:"there-is-no-audio-or-boot-splash-when-launching-launcher-using-unlaunch",children:[]},{level:3,title:"Powering on only shows a black screen after installing Unlaunch",slug:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",children:[]},{level:3,title:"After installing Unlaunch, I'm stuck booting into an application or the Unlaunch Filemenu",slug:"after-installing-unlaunch-i-m-stuck-booting-into-an-application-or-the-unlaunch-filemenu",children:[]},{level:3,title:"Other Unlaunch problems",slug:"other-unlaunch-problems",children:[]}]},{level:2,title:"TWiLight Menu++",slug:"twilight-menu",children:[]},{level:2,title:"Further assistance",slug:"further-assistance",children:[]}],filePathRelative:"troubleshooting.md",git:{updatedTime:1635959298e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},8976:(e,n,a)=>{a.r(n),a.d(n,{default:()=>j});var t=a(6252);const i=(0,t.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="unlaunch-freezes-at-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#unlaunch-freezes-at-mismatch-in-fat-copies" aria-hidden="true">#</a> Unlaunch freezes at <code>MISMATCH IN FAT COPIES</code></h3><p>twlnf has a critical bug where it does not properly update the entire NAND after modifying it, which causes certain homebrew (like the Unlaunch installer) to throw an error.</p><p>While fixable, the method to do so isn&#39;t set in stone and largely varies between systems. One method is to delete any DSiWare installed via twlnf in the past, but it has also been reported that moving <em>all</em> DSiWare to the SD card and back to the system can help in some cases.</p><p>If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DSi region is Chinese or Korean) can help fix this bug as well.</p><p>If the issue persists, try this:</p>',6),l=(0,t.Uk)("Mount your NAND backup with "),o={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("ninfs"),s=(0,t.Uk)(", and enable the "),h=(0,t._)("code",null,"Allow writing",-1),u=(0,t.Uk)(" option"),c=(0,t.Uk)("Once your NAND backup is mounted, mount "),d=(0,t._)("code",null,"twl_main.img",-1),g=(0,t.Uk)(". If you are using Windows, you can use "),p={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("OSFMount"),m=(0,t.Uk)(" to mount the image"),k=(0,t._)("li",null,[(0,t.Uk)("Unmount "),(0,t._)("code",null,"twl_main.img"),(0,t.Uk)(", then unmount the NAND backup in ninfs If the NAND was saved, follow "),(0,t._)("a",{href:"restoring-nand"},"Restoring NAND"),(0,t.Uk)(" and continue with "),(0,t._)("a",{href:"installing-unlaunch"},"Installing Unlaunch"),(0,t.Uk)(".")],-1),b=(0,t._)("h3",{id:"there-is-no-audio-or-boot-splash-when-launching-launcher-using-unlaunch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#there-is-no-audio-or-boot-splash-when-launching-launcher-using-unlaunch","aria-hidden":"true"},"#"),(0,t.Uk)(' There is no audio or boot splash when launching "Launcher" using Unlaunch')],-1),w=(0,t.Uk)("The developer of Unlaunch (nocash) has intentionally patched out the background audio and boot-splash by default. You can regain these effects by "),U=(0,t._)("a",{href:"installing-unlaunch"},"reinstalling Unlaunch",-1),y=(0,t.Uk)(" using TWiLight Menu++, or by using "),_={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("hiyaCFW"),T=(0,t.Uk)("."),N=(0,t._)("h3",{id:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#powering-on-only-shows-a-black-screen-after-installing-unlaunch","aria-hidden":"true"},"#"),(0,t.Uk)(" Powering on only shows a black screen after installing Unlaunch")],-1),D=(0,t.Uk)("Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a "),S={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("hardmod"),A=(0,t.Uk)("."),W=(0,t.uE)('<h3 id="after-installing-unlaunch-i-m-stuck-booting-into-an-application-or-the-unlaunch-filemenu" tabindex="-1"><a class="header-anchor" href="#after-installing-unlaunch-i-m-stuck-booting-into-an-application-or-the-unlaunch-filemenu" aria-hidden="true">#</a> After installing Unlaunch, I&#39;m stuck booting into an application or the Unlaunch Filemenu</h3><p>This was likely caused by choosing the wrong app for the <code>NO BUTTON</code> option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to <code>OPTIONS</code>, and set <code>NO BUTTON</code> to whatever your preference is.</p><h3 id="other-unlaunch-problems" tabindex="-1"><a class="header-anchor" href="#other-unlaunch-problems" aria-hidden="true">#</a> Other Unlaunch problems</h3><p>If Unlaunch displays <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code>, or doesn&#39;t display any applications while the SD card is inserted, your SD card likely wasn&#39;t formatted correctly. Re-follow <a href="sd-card-setup">SD Card Setup</a>.</p><h2 id="twilight-menu" tabindex="-1"><a class="header-anchor" href="#twilight-menu" aria-hidden="true">#</a> TWiLight Menu++</h2>',5),O=(0,t.Uk)("For general TWiLight Menu++ troubleshooting, see its "),x={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("FAQ & Troubleshooting"),C=(0,t.Uk)(" page on the DS-Homebrew Wiki."),F=(0,t._)("h2",{id:"further-assistance",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#further-assistance","aria-hidden":"true"},"#"),(0,t.Uk)(" Further assistance")],-1),B=(0,t.Uk)("If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the "),L={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("DS"),H=(0,t._)("sup",null,"(i)",-1),z=(0,t.Uk)(" Mode Hacking!"),R=(0,t.Uk)(" Discord server."),E={},j=(0,a(3744).Z)(E,[["render",function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t._)("ol",null,[(0,t._)("li",null,[l,(0,t._)("a",o,[r,(0,t.Wm)(a)]),s,h,u]),(0,t._)("li",null,[c,d,g,(0,t._)("a",p,[f,(0,t.Wm)(a)]),m]),k]),b,(0,t._)("p",null,[w,U,y,(0,t._)("a",_,[v,(0,t.Wm)(a)]),T]),N,(0,t._)("p",null,[D,(0,t._)("a",S,[I,(0,t.Wm)(a)]),A]),W,(0,t._)("p",null,[O,(0,t._)("a",x,[M,(0,t.Wm)(a)]),C]),F,(0,t._)("p",null,[B,(0,t._)("a",L,[P,H,z,(0,t.Wm)(a)]),R])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,t]of n)e[a]=t;return e}}}]);