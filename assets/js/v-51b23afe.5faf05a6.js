"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[762],{4511:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-51b23afe",path:"/launching-the-exploit.html",title:"Launching the Exploit",lang:"en-US",frontmatter:{title:"Launching the Exploit"},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Section I - SD card setup",slug:"section-i-sd-card-setup",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"Section II - Launching the exploit",slug:"section-ii-launching-the-exploit",children:[]},{level:2,title:"Section III - Configuring TWiLight Menu++",slug:"section-iii-configuring-twilight-menu",children:[]}],filePathRelative:"launching-the-exploit.md",git:{updatedTime:1635959298e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},2322:(e,i,t)=>{t.r(i),t.d(i,{default:()=>R});var o=t(6252);const n=(0,o._)("p",null,'We\'ll start by first setting up your SD card to launch our exploit. For most users, we recommend using an exploit called "Memory Pit" which takes advantage of a flaw in how the Nintendo DSi Camera application handles image metadata.',-1),a=(0,o._)("p",null,"Launching the exploit will boot you into TWiLight Menu++, a homebrew application that acts as a replacement to the DSi Menu.",-1),l=(0,o._)("h2",{id:"requirements",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),(0,o.Uk)(" Requirements")],-1),r=(0,o._)("li",null,"A way to copy downloaded files to your SD card",-1),s=(0,o.Uk)("An application that can extract archives, such as "),u={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("7-Zip"),h=(0,o.Uk)(" (Windows) or "),d={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},p=(0,o.Uk)("The Unarchiver"),m=(0,o.Uk)(" (macOS)"),g=(0,o.uE)('<h2 id="section-i-sd-card-setup" tabindex="-1"><a class="header-anchor" href="#section-i-sd-card-setup" aria-hidden="true">#</a> Section I - SD card setup</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ensure your SD card is <a href="sd-card-setup">formatted correctly</a>.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Using a Windows, Linux or macOS device? Use <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> to automatically setup your SD card.</p></div><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><ol><li>Ensure that the Nintendo DSi Camera application does not show the tutorial after launch <ul><li>If it does show, go through it until you&#39;re done <ul><li>If the tutorial crashes as you try to complete it, your Nintendo DSi camera hardware is likely broken in some way. Please use an <a href="alternate-exploits">alternate exploit</a></li></ul></li></ul></li><li>Download the Memory Pit binary for the version and region of your Nintendo DSi system <ul><li>for versions <a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.3 (USA, EUR, AUS, JPN)</a></li><li>for versions <a href="/assets/files/memory_pit/768_1024/pit.bin">1.4 - 1.4.5 (USA, EUR, AUS, JPN)</a></li><li>all versions <a href="/assets/files/memory_pit/256/pit.bin">(KOR, CHN)</a></li></ul></li><li>Make sure the following path exists on your SD card: <code>sd:/private/ds/app/484E494A/</code><ul><li>You will already have this directory if you have previously copied photos to your SD card via the Nintendo DSi Camera application. If so, you do not need to delete it and recreate it</li><li>If it does not exist, please create the individual folders</li></ul></li><li>If there is already a <code>pit.bin</code> file in that path, create a backup of that file</li><li>Place the Memory Pit <code>pit.bin</code> file in this folder</li></ol>',5),f={class:"custom-container tip"},y=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),S=(0,o.Uk)("For an understanding on why we're doing this, please review the "),w=(0,o.Uk)("FAQ"),k=(0,o.Uk)("."),D=(0,o._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,o.Uk)(" TWiLight Menu++")],-1),b=(0,o.Uk)("Download the latest release of "),v={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},_=(0,o.Uk)("TWiLight Menu++"),U=(0,o._)("li",null,[(0,o.Uk)("Extract the "),(0,o._)("code",null,"_nds"),(0,o.Uk)(" folder from "),(0,o._)("code",null,"TWiLightMenu-DSi.7z"),(0,o.Uk)(" to the root of your SD card")],-1),x=(0,o._)("li",null,[(0,o.Uk)("Extract the "),(0,o._)("code",null,"BOOT.NDS"),(0,o.Uk)(" file from "),(0,o._)("code",null,"TWiLightMenu-DSi.7z"),(0,o.Uk)(" to the root of your SD card")],-1),I=(0,o.uE)('<h2 id="section-ii-launching-the-exploit" tabindex="-1"><a class="header-anchor" href="#section-ii-launching-the-exploit" aria-hidden="true">#</a> Section II - Launching the exploit</h2><ol><li>Ensure your SD card is inserted into your Nintendo DSi</li><li>Boot your Nintendo DSi and launch the Nintendo DSi Camera application</li><li>Select the SD Card icon on the top-right <ul><li>If you receive a message saying your SD card isn&#39;t inserted, please use another SD card</li><li>If you receive a message saying that your SD card cannot be used, ensure your SD card is <a href="sd-card-setup">formatted correctly</a></li></ul></li><li>Select your SD card&#39;s camera album <ul><li>The screen should flash magenta if Memory Pit was copied correctly</li></ul></li></ol>',2),W={class:"custom-container warning"},L=(0,o._)("p",{class:"custom-container-title"},"WARNING",-1),M=(0,o.Uk)("If the top screen turns green, you do not have TWiLight Menu++'s "),T=(0,o._)("code",null,"BOOT.NDS",-1),N=(0,o.Uk)(" on the root of your SD card. Follow the "),P=(0,o.Uk)("TWiLight Menu++ setup guide"),E=(0,o.Uk)(" again."),A=(0,o.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you enter the SD card camera album and nothing unusual happens, ensure that you downloaded the correct version of Memory Pit for your version and region, and placed it into the correct folder on your SD card.</p></div><p>You should now see the TWiLight Menu++ language selection.</p><h2 id="section-iii-configuring-twilight-menu" tabindex="-1"><a class="header-anchor" href="#section-iii-configuring-twilight-menu" aria-hidden="true">#</a> Section III - Configuring TWiLight Menu++</h2><ol><li>When prompted, set your preferred language and region</li><li>Once you&#39;re in TWiLight Menu++, press SELECT to switch to the DS Classic Menu</li><li>Tap the button in the bottom middle to open settings</li><li>Use the <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> buttons to switch over to the &quot;Misc. settings&quot; page</li><li>Switch the &quot;SysNAND Region&quot; entry to your console&#39;s region</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continue to <a href="dumping-nand">Dumping NAND</a></p></div>',5),C={},R=(0,t(3744).Z)(C,[["render",function(e,i){const t=(0,o.up)("OutboundLink"),C=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,a,l,(0,o._)("ul",null,[r,(0,o._)("li",null,[s,(0,o._)("a",u,[c,(0,o.Wm)(t)]),h,(0,o._)("a",d,[p,(0,o.Wm)(t)]),m])]),g,(0,o._)("div",f,[y,(0,o._)("p",null,[S,(0,o.Wm)(C,{to:"/faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,o.w5)((()=>[w])),_:1}),k])]),D,(0,o._)("ol",null,[(0,o._)("li",null,[b,(0,o._)("a",v,[_,(0,o.Wm)(t)])]),U,x]),I,(0,o._)("div",W,[L,(0,o._)("p",null,[M,T,N,(0,o.Wm)(C,{to:"/launching-the-exploit.html#twilight-menu"},{default:(0,o.w5)((()=>[P])),_:1}),E])]),A],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{for(const[t,o]of i)e[t]=o;return e}}}]);