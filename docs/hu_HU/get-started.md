---
title: "Kezdeti lépések"
---

A fő homebrew alkalmazás, amit ez az útmutató telepít a TWiLight Menu++, ami egy feljavítása/cseréje a Nintendo DSi Menu-nek, és ami lehetővé teszi más homebrew-ok, kereskedelmi DS játékok, más régebbi rendszerek emulátorainak és egyebeknek a futtatását.

A letöltésével fogunk kezdeni, illetve más homebrew eszköz(ök) letöltésével, hogy előkészüljünk az exploit lépéseire.

::: tip

Windows-t, Linux-ot vagy macOS-t használsz? Használd a [Lazy DSi Downloader](lazy-dsi-downloader.html)-t, hogy automatikusan telepítse az SD kártyád.

:::

## Követelmények

- Egy mód arra, hogy a letöltött fájlokat az SD kártyádra másold
- Egy alkalmazás, ami ki tud tömöríteni csomagolt állományokat, mint például a[7-Zip](https://www.7-zip.org/) (Windows) vagy a [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS)
   - Azt tanácsoljuk, hogy ne használj WinRAR-t, mert ismert arról, hogy elront dolgokat

## I. rész - Előkészületek

::: warning

Biztosítsd, hogy az SD kártyád [megfelelően formázott](sd-card-setup.html).

:::

1. Tedd be az SD kártyád a PC számítógépedbe
1. Töltsd le a [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) legfrissebb kiadását
1. Töltsd le a [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds) legfrissebb kiadását
1. Másold ki az `_nds` mappát `TWiLightMenu-DSi.7z` fájlból az SD kártyád gyökerébe
1. Másold ki a `BOOT.NDS` fájlt `TWiLightMenu-DSi.7z` fájlból az SD kártyád gyökerébe
1. Másold a `dumpTool.nds` fájlt az SD kártyád gyökerébe

::: tip

Nem tudod, mi az SD "gyökér"? [Tekintsd meg ezt a képet](https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png)

:::


## II. rész - Az exploit kiválasztása

From here you have three options, with a minor difference in what each entails.


### Az Unlaunch telepítése Memory Pit-tel

A Memory Pit egy exploit ami a DSi Camera-t használja és kompatibilis minden firmware verzióval. Opcionálisan, ez az exploit használható az Unlaunch telepítésére, ami egy bootcode exploit és telejs hozzáférést ad a konzolhoz bootoláskor.

A Memory Pit valamennyire korlátozott homebrew kompatibilitással rendelkezik, ajánlott, hogy telepítsd az Unlaunch-öt, a Memory Pit önálló használata helyett. Ez a legkönnyebb metódusa az Unlaunch telepítésének, így ez az ajánlott módja. Azonban van egy nagyon kicsi kockázata a konzolod **brickelésének** az Unlaunch telepítésekor, így ha ez számít, akkor válassz másik metódust alább.

::: tip

Folytatás [Az Exploit indítása](launching-the-exploit.html) útmutatóval

:::


### stylehax

stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.

For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.

::: tip

Continue to [Launching the Exploit (stylehax)](launching-the-browser-exploit.html)

:::


### Flipnote Lenny

Flipnote Lenny is an exploit utilizing the Flipnote Studio application.

If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.

You can always install Unlaunch later if you decide later on that you want it.

::: tip

Continue to [Launching the Exploit (Flipnote Lenny)](launching-the-flipnote-exploit.html)

:::

For a more detailed pros and cons comparision of the available exploits, please see the [Which is the best exploit?](faq.html#which-is-the-best-exploit) FAQ.