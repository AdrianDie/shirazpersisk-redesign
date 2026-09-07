# Sporings-IDer fra eksisterende nettside (shirazpersisk.no)

Hentet fra det lokale HTTrack-speilet av kildesiden (`../shirazpersisk/www.shirazpersisk.no/`), ikke fra redesign-siden. Redesignet er bygget UTEN disse IDene (se prosjektnotat) — denne filen er kun til referanse for når/hvis siden skal kobles til kundens ekte kontoer.

## Google Analytics (GA4)
- **ID:** `GT-P35F9P9B`
- **Lastet via:** Site Kit by Google (plugin), kommentert eksplisitt som "Google Analytics snippet added by Site Kit"
- **Funnet i:** `index.html`, `var-meny/index.html` (identisk på begge)
- Dette er det nye samlede "GT-"-tag-formatet Google bruker for Site Kit-installasjoner. Fungerer som en vanlig GA4-måle-ID.

## Google Tag Manager (to separate containere kjører samtidig)
1. **`GTM-N2BZXHFS`**
   - Lagt inn manuelt via "HFCM by 99 Robots" (Insert Headers & Footers-plugin), egen snippet i både head og body
2. **`GTM-TWRR5TK4`**
   - Lagt inn av Site Kit by Google selv (egen GTM-modul i Site Kit)

Begge er aktive på samtlige sider i speilet (forside, /var-meny/). At det kjører to uavhengige GTM-containere samtidig er uvanlig — kan være en rest fra en tidligere oppsett (f.eks. byttet fra manuell GTM til Site Kit sin GTM-modul uten å fjerne den gamle snippeten). Verdt å avklare med kunden/den som eier Google-kontoene hvilken av de to som faktisk er i bruk.

## Ikke funnet i speilet
Ingen spor av: Meta/Facebook Pixel, Google Ads (AW-…) gtag-snippet, TikTok-pixel, Pinterest-tag, LinkedIn Insight, Hotjar, Microsoft Clarity, eller en Google Maps API-nøkkel i rå HTML.

**Viktig forbehold:** Hvis Google Ads-konvertering er satt opp, skjer det mest sannsynlig *inni* en av de to GTM-containerne sin tag-konfigurasjon (lagret hos Google, ikke i selve HTML-en) — det ville ikke vise seg i et statisk speil. Samme gjelder eventuelle andre tagger som er konfigurert via GTM i stedet for hardkodet i koden. Denne listen dekker altså det som er synlig i rå HTML, ikke nødvendigvis alt som faktisk samler inn data.

## Kilder sjekket
`index.html`, `var-meny/index.html`, `author/omid/index.html`, `wp-json/wp/v2/pages/{559,3421}.json`, samt et generelt søk gjennom hele speil-mappen for kjente pixel-/tag-mønstre.
