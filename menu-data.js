(function(){
  "use strict";

  // Meny- og prisdata hentet direkte fra shirazpersisk.no/var-meny/ (fullstendig
  // DOM-gjennomgang av alle kategori-faner 2026-09-05, ikke bare den fanen som
  // er synlig ved første last). To kjente pris-avvik finnes på selve kildesiden
  // samtidig (øl og rødvin/hvitvin/rosé har hver to ulike prislister publisert
  // parallelt) - her er den mest detaljerte av de to beholdt; flagget til Adrian.
  var MENU = {
    delingsretter: {
      label: "Delingsretter",
      heading: "Delingsretter",
      note: "Sosiale menyer satt sammen for hele bordet.",
      items: [
        { name: "6-retters delingsmeny", desc: "Et sosialt måltid inspirert av persisk tradisjon – perfekt for deling. Vinmeny tilgjengelig som tillegg (550,- pr. person).", priceLabel: "545,-", priceSuffix: "pr. person" },
        { name: "9-retters delingsmeny", desc: "Et sosialt måltid inspirert av persisk tradisjon – perfekt for deling. Minimum 2 personer.", priceLabel: "655,-", priceSuffix: "pr. person" },
        { name: "Grill mix delingsmeny", desc: "En rikholdig og sosial grillopplevelse: kobideh, joje kebab, chenjeh, barg og lammekoteletter (dande kebab), servert med ris, grillet tomat og nanbrød. Minimum 2–4 personer.", priceLabel: "423,-", priceSuffix: "pr. person" }
      ]
    },
    forretter: {
      label: "Forretter",
      heading: "Forretter",
      note: "Alle forretter serveres med nybakt nanbrød.",
      items: [
        { name: "Kashk & Bademjan", desc: "Aubergine, stekt mynte, tørket mynte, gurkemeie og løk. Allergener: melk.", price: 105 },
        { name: "Suppe Joo", desc: "Havre, tomatpuré, løk, tomater og gulrot. Allergener: hvete.", price: 105 },
        { name: "Hummus", desc: "Kikerter, hvitløk, olivenolje og tahini. Allergener: sesam.", price: 105 },
        { name: "Burani Bademjan", desc: "Grillet aubergine med yoghurt, hvitløk og krydder. Allergener: melk.", price: 105 }
      ]
    },
    tilbehor: {
      label: "Tilbehør",
      heading: "Tilbehør",
      items: [
        { name: "Mast Khiar", desc: "Yoghurt med agurk og mynte. Allergener: melk.", price: 80 },
        { name: "Mast Mosir", desc: "Yoghurt med mosir. Allergener: melk.", price: 80 },
        { name: "Nanbrød", desc: "Allergener: hvete.", price: 45 }
      ]
    },
    grillretter: {
      label: "Grillretter",
      heading: "Grillretter",
      note: "Alle grillretter serveres med grillet tomat og ris.",
      items: [
        { name: "Kobideh", desc: "To spyd av lammekjøttdeig blandet med løk og sort pepper.", price: 300 },
        { name: "Joje Kebab", desc: "Spyd med yoghurt- og safranmarinert kyllingfilet. Allergener: melk.", price: 330 },
        { name: "Chenjeh", desc: "Spyd med lammefilet marinert i løk, salt og sort pepper.", price: 350 },
        { name: "Barg", desc: "Spyd med ytrefilet av lam.", price: 350 },
        { name: "Shiraz Spesial", desc: "Safran- og yoghurtmarinert kyllingfilet og lammekjøttdeig blandet med løk og krydder. Allergener: melk.", price: 380 },
        { name: "Dande Kebab", desc: "Fire marinerte lammekoteletter grillet til perfeksjon.", price: 325 },
        { name: "Grillet Laks", desc: "Safranmarinert laks krydret med sort pepper, paprika og sitronpepper.", price: 300 }
      ]
    },
    gryteretter: {
      label: "Gryteretter",
      heading: "Gryteretter & risretter",
      items: [
        { name: "Ghorme Sabzi", desc: "Storfehøyrygg kokt med bønner, urter, lime og persiske krydder. Serveres med ris.", price: 310 },
        { name: "Zereshk Polo Ba Morgh", desc: "Langtidskokt kyllinglår med krydder, safran og pistasjnøtter. Serveres med ris. Allergener: nøtter.", price: 310 },
        { name: "Fesenjan", desc: "Kylling i en rik saus av granateple og valnøtter, krydret med safran. Serveres med ris. Allergener: nøtter.", price: 330 },
        { name: "Gheyme Bademjan", desc: "Storfehøyrygg kokt i tomatpuré, gurkemeie og aromatiske krydder, servert med aubergine og ris.", price: 315 },
        { name: "Gheyme", desc: "Storfehøyrygg kokt i en tomat- og gurkemeiebasert kryddersaus. Serveres med pommes frites og ris.", price: 310 },
        { name: "Baghali Polo & Mahiche", desc: "Mørt lammeknoke servert med dill, grønne bønner og ris.", price: 345 },
        { name: "Dopiaze Meygo", desc: "Reker sautert med løk, pommes frites, gurkemeie, tomatpuré og grønn chili. Serveres med ris. Allergener: skalldyr.", price: 325 },
        { name: "Dal Adas", desc: "Vegetar. Røde linser kokt med potet, tomatpuré, løk, hvitløk og persiske krydder. Serveres med ris.", price: 270 }
      ]
    },
    dessert: {
      label: "Dessert",
      heading: "Dessert",
      items: [
        { name: "Saffron Ice Cream", desc: "Persisk iskrem med safran og pistasjnøtter. Allergener: melk, nøtter.", price: 120 },
        { name: "Vaniljeis med gulrotjuice", desc: "Vaniljeis toppet med gulrotjuice. Allergener: melk, nøtter.", price: 110 },
        { name: "Shirmooz", desc: "Melk, banan og honning, toppet med valnøtter. Allergener: melk, nøtter.", price: 120 }
      ]
    },
    drikker: {
      label: "Drikker",
      heading: "Drikker",
      groups: [
        {
          title: "Alkoholfritt",
          items: [
            { name: "Mineralvann / Coca-Cola / Cola Zero / Fanta / Sprite", price: 65 }
          ]
        },
        {
          title: "Øl",
          items: [
            { name: "7 Fjell Pilsner", price: 100 },
            { name: "7 Fjell Tropical IPA / Fløien IPA", price: 110 },
            { name: "7 Fjell Ginger Ninja / Småtøs", price: 115 },
            { name: "7 Fjell Golden Ale", desc: "Lettøl.", price: 90 },
            { name: "7 Fjell Ginger Ninja", desc: "Alkoholfritt.", price: 80 }
          ]
        },
        {
          title: "Husets spesialdrinker",
          items: [
            { name: "Vermouth Spritz", desc: "En frisk og aromatisk cocktail med Salvano Vermouth di Torino, Salvano Jhamel Brut og en touch av fersk rosmarin.", price: 130 },
            { name: "Signaturdrink", desc: "En sofistikert cocktail med Salvano Barolo Chinato, Remonda Bollicine Rosé Cuvée, jordbær og et hint av lime.", price: 140 },
            { name: "Saffron 75", price: 165 },
            { name: "Persian Lemon Spritz", price: 160 },
            { name: "Pomegranate Negroni", price: 160 },
            { name: "Saffron Mule", price: 170 },
            { name: "Rose & Pistachio Martini", price: 165 }
          ]
        },
        {
          title: "Classics",
          items: [
            { name: "Gin & Tonic", price: 160 },
            { name: "Cuba Libre", price: 150 },
            { name: "Vodka Cranberry", price: 150 },
            { name: "Whiskey Ginger", price: 155 },
            { name: "Aperol Spritz", price: 155 }
          ]
        },
        {
          title: "Shots",
          items: [
            { name: "Patron Citrus", price: 130 },
            { name: "Saffron Honey", price: 130 },
            { name: "Persian Fire", price: 130 }
          ]
        },
        {
          title: "Rødvin",
          glassBottle: true,
          items: [
            { name: "Nebbiolo Flin", desc: "100% Nebbiolo. Roseblader, krydder, tobakk og kirsebær.", glass: 170, bottle: 850 },
            { name: "Barbera d'Alba", desc: "100% Barbera. Bjørnebær, kirsebær og lite preg av eik.", glass: 180, bottle: 899 },
            { name: "Pinot Nero", desc: "Mørke bær, kirsebær, bjørnebær, vanilje, krydder.", glass: 180, bottle: 900 },
            { name: "Barbaresco", desc: "100% Nebbiolo. Kløver, lakris, trøffel og noe kirsebær.", glass: 215, bottle: 1100 },
            { name: "Nebbiolo Gentilium", desc: "100% Nebbiolo. Kardemomme, five spice, vanilje og kirsebær.", glass: 190, bottle: 950 },
            { name: "Riachi Lythe", desc: "Svart og rød frukt, eik, vanilje og brent kaffe.", bottle: 999 },
            { name: "Riachi Grand Cuvée", desc: "Kraftig rødvin laget på Syrah-druer.", bottle: 999 },
            { name: "Classique de Rimauresq Rouge 2018", desc: "Kompleks og moden, sorte frukter, krydder og pepper.", glass: 150, bottle: 750 }
          ]
        },
        {
          title: "Hvitvin",
          glassBottle: true,
          items: [
            { name: "Husets hvitvin", glass: 125, bottle: 625 },
            { name: "Chardonnay Sognante", desc: "100% Chardonnay. Ananas, ristet brød, moden tropisk frukt og eik.", glass: 170, bottle: 850 },
            { name: "Lugana", desc: "100% Turbiana di Lugana. Frisk, delikat og balansert, noe tropisk og mineralsk.", glass: 150, bottle: 750 }
          ]
        },
        {
          title: "Rosé & musserende",
          glassBottle: true,
          items: [
            { name: "Remonda Bollicine", desc: "Glera og Pinot Noir. Floralt, ville bær som bringebær.", glass: 130, bottle: 650 },
            { name: "Langhe Rosato", desc: "Nebbiolo og Barbera. Bringebær, jordbær, tørr men fruktig.", glass: 150, bottle: 750 },
            { name: "Jhamel Millesimato Brut", desc: "90% Chardonnay, 10% Pinot Noir. Ristet brød, grønne epler og salvie.", bottle: 1050 }
          ]
        }
      ]
    }
  };

  function priceHTML(item){
    if (item.priceLabel) return item.priceLabel + (item.priceSuffix ? '<br><small>' + item.priceSuffix + '</small>' : '');
    if (item.glass && item.bottle) return 'Glass ' + item.glass + ',-<br>Flaske ' + item.bottle + ',-';
    if (item.bottle) return 'Flaske ' + item.bottle + ',-';
    if (item.glass) return 'Glass ' + item.glass + ',-';
    return item.price + ',-';
  }

  function renderItems(list){
    return list.map(function(item){
      return '' +
        '<div class="menu-item">' +
          '<div>' +
            '<div class="menu-item-name">' + item.name + '</div>' +
            (item.desc ? '<div class="menu-item-desc">' + item.desc + '</div>' : '') +
          '</div>' +
          '<div class="menu-item-price">' + priceHTML(item) + '</div>' +
        '</div>';
    }).join('');
  }

  function renderSection(key){
    var data = MENU[key];
    var el = document.querySelector('[data-menu-section="' + key + '"]');
    if (!el || !data) return;

    var html = '<div class="menu-section-head">' +
      '<p class="eyebrow">Vår meny</p>' +
      '<h2>' + data.heading + '</h2>' +
      (data.note ? '<p>' + data.note + '</p>' : '') +
      '</div>';

    if (data.empty) {
      html += '<p class="menu-empty">' + data.empty + '</p>';
    } else if (data.groups) {
      html += data.groups.map(function(group){
        return '<h3 class="menu-group-title">' + group.title + '</h3>' +
          '<div class="menu-items">' + renderItems(group.items) + '</div>';
      }).join('');
    } else if (data.items) {
      html += '<div class="menu-items">' + renderItems(data.items) + '</div>';
    }

    el.innerHTML = html;
  }

  Object.keys(MENU).forEach(renderSection);

  // Scroll-spy for sticky tab nav
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.menu-tabs a'));
  var sections = tabs.map(function(tab){
    return document.getElementById(tab.getAttribute('href').slice(1));
  });

  function setActive(){
    var pos = window.scrollY + 160;
    var current = sections[0];
    sections.forEach(function(sec){ if (sec && sec.offsetTop <= pos) current = sec; });
    tabs.forEach(function(tab){
      tab.classList.toggle('active', current && tab.getAttribute('href') === '#' + current.id);
    });
  }
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });

  var tabWrap = document.querySelector('.menu-tabs');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      setTimeout(function(){
        var active = tabWrap.querySelector('a.active');
        if (active) tabWrap.scrollTo({ left: active.offsetLeft - 24, behavior: 'smooth' });
      }, 400);
    });
  });
})();
