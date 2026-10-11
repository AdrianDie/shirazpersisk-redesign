(function(){
  "use strict";

  // English translation of menu-data.js. Keep prices and items in sync with
  // the Norwegian file when the menu changes.
  var MENU = {
    delingsretter: {
      label: "Sharing menus",
      heading: "Sharing menus",
      note: "Social menus put together for the whole table.",
      items: [
        { name: "6-course sharing menu", desc: "A social meal inspired by Persian tradition – perfect for sharing. Wine pairing available as an add-on (550,- per person).", priceLabel: "545,-", priceSuffix: "per person" },
        { name: "9-course sharing menu", desc: "A social meal inspired by Persian tradition – perfect for sharing. Minimum 2 people.", priceLabel: "655,-", priceSuffix: "per person" },
        { name: "Grill mix sharing menu", desc: "A generous, social grill experience: kobideh, joje kebab, chenjeh, barg and lamb chops (dande kebab), served with rice, grilled tomato and naan bread. Minimum 2–4 people.", priceLabel: "423,-", priceSuffix: "per person" }
      ]
    },
    forretter: {
      label: "Starters",
      heading: "Starters",
      note: "All starters are served with freshly baked naan bread.",
      items: [
        { name: "Kashk & Bademjan", desc: "Aubergine, fried mint, dried mint, turmeric and onion. Allergens: milk.", price: 105 },
        { name: "Suppe Joo", desc: "Oats, tomato purée, onion, tomatoes and carrot. Allergens: wheat.", price: 105 },
        { name: "Hummus", desc: "Chickpeas, garlic, olive oil and tahini. Allergens: sesame.", price: 105 },
        { name: "Burani Bademjan", desc: "Grilled aubergine with yoghurt, garlic and spices. Allergens: milk.", price: 105 }
      ]
    },
    tilbehor: {
      label: "Sides",
      heading: "Sides",
      items: [
        { name: "Mast Khiar", desc: "Yoghurt with cucumber and mint. Allergens: milk.", price: 80 },
        { name: "Mast Mosir", desc: "Yoghurt with mosir (Persian shallot). Allergens: milk.", price: 80 },
        { name: "Naan bread", desc: "Allergens: wheat.", price: 45 }
      ]
    },
    grillretter: {
      label: "Grill",
      heading: "Grill dishes",
      note: "All grill dishes are served with grilled tomato and rice.",
      items: [
        { name: "Kobideh", desc: "Two skewers of minced lamb mixed with onion and black pepper.", price: 300 },
        { name: "Joje Kebab", desc: "Skewer of chicken fillet marinated in yoghurt and saffron. Allergens: milk.", price: 330 },
        { name: "Chenjeh", desc: "Skewer of lamb fillet marinated in onion, salt and black pepper.", price: 350 },
        { name: "Barg", desc: "Skewer of lamb sirloin.", price: 350 },
        { name: "Shiraz Special", desc: "Saffron and yoghurt marinated chicken fillet and minced lamb mixed with onion and spices. Allergens: milk.", price: 380 },
        { name: "Dande Kebab", desc: "Four marinated lamb chops grilled to perfection.", price: 325 },
        { name: "Grilled Salmon", desc: "Saffron-marinated salmon seasoned with black pepper, paprika and lemon pepper.", price: 300 }
      ]
    },
    gryteretter: {
      label: "Stews",
      heading: "Stews & rice dishes",
      items: [
        { name: "Ghorme Sabzi", desc: "Beef chuck cooked with beans, herbs, lime and Persian spices. Served with rice.", price: 310 },
        { name: "Zereshk Polo Ba Morgh", desc: "Slow-cooked chicken thigh with spices, saffron and pistachios. Served with rice. Allergens: nuts.", price: 310 },
        { name: "Fesenjan", desc: "Chicken in a rich pomegranate and walnut sauce, seasoned with saffron. Served with rice. Allergens: nuts.", price: 330 },
        { name: "Gheyme Bademjan", desc: "Beef chuck cooked in tomato purée, turmeric and aromatic spices, served with aubergine and rice.", price: 315 },
        { name: "Gheyme", desc: "Beef chuck cooked in a tomato and turmeric spice sauce. Served with French fries and rice.", price: 310 },
        { name: "Baghali Polo & Mahiche", desc: "Tender lamb shank served with dill, green beans and rice.", price: 345 },
        { name: "Dopiaze Meygo", desc: "Prawns sautéed with onion, French fries, turmeric, tomato purée and green chili. Served with rice. Allergens: shellfish.", price: 325 },
        { name: "Dal Adas", desc: "Vegetarian. Red lentils cooked with potato, tomato purée, onion, garlic and Persian spices. Served with rice.", price: 270 }
      ]
    },
    dessert: {
      label: "Dessert",
      heading: "Dessert",
      items: [
        { name: "Saffron Ice Cream", desc: "Persian ice cream with saffron and pistachios. Allergens: milk, nuts.", price: 120 },
        { name: "Vanilla ice cream with carrot juice", desc: "Vanilla ice cream topped with carrot juice. Allergens: milk, nuts.", price: 110 },
        { name: "Shirmooz", desc: "Milk, banana and honey, topped with walnuts. Allergens: milk, nuts.", price: 120 }
      ]
    },
    drikker: {
      label: "Drinks",
      heading: "Drinks",
      groups: [
        {
          title: "Soft drinks",
          items: [
            { name: "Mineral water / Coca-Cola / Cola Zero / Fanta / Sprite", price: 65 }
          ]
        },
        {
          title: "Beer",
          items: [
            { name: "7 Fjell Pilsner", price: 100 },
            { name: "7 Fjell Tropical IPA / Fløien IPA", price: 110 },
            { name: "7 Fjell Ginger Ninja / Småtøs", price: 115 },
            { name: "7 Fjell Golden Ale", desc: "Low alcohol.", price: 90 },
            { name: "7 Fjell Ginger Ninja", desc: "Alcohol-free.", price: 80 }
          ]
        },
        {
          title: "House specials",
          items: [
            { name: "Vermouth Spritz", desc: "A fresh, aromatic cocktail with Salvano Vermouth di Torino, Salvano Jhamel Brut and a touch of fresh rosemary.", price: 130 },
            { name: "Signature drink", desc: "A sophisticated cocktail with Salvano Barolo Chinato, Remonda Bollicine Rosé Cuvée, strawberry and a hint of lime.", price: 140 },
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
          title: "Red wine",
          glassBottle: true,
          items: [
            { name: "Nebbiolo Flin", desc: "100% Nebbiolo. Rose petals, spice, tobacco and cherry.", glass: 170, bottle: 850 },
            { name: "Barbera d'Alba", desc: "100% Barbera. Blackberry, cherry and a light touch of oak.", glass: 180, bottle: 899 },
            { name: "Pinot Nero", desc: "Dark berries, cherry, blackberry, vanilla, spice.", glass: 180, bottle: 900 },
            { name: "Barbaresco", desc: "100% Nebbiolo. Clover, liquorice, truffle and some cherry.", glass: 215, bottle: 1100 },
            { name: "Nebbiolo Gentilium", desc: "100% Nebbiolo. Cardamom, five spice, vanilla and cherry.", glass: 190, bottle: 950 },
            { name: "Riachi Lythe", desc: "Black and red fruit, oak, vanilla and roasted coffee.", bottle: 999 },
            { name: "Riachi Grand Cuvée", desc: "Full-bodied red wine made from Syrah grapes.", bottle: 999 },
            { name: "Classique de Rimauresq Rouge 2018", desc: "Complex and mature, dark fruit, spice and pepper.", glass: 150, bottle: 750 }
          ]
        },
        {
          title: "White wine",
          glassBottle: true,
          items: [
            { name: "House white wine", glass: 125, bottle: 625 },
            { name: "Chardonnay Sognante", desc: "100% Chardonnay. Pineapple, toasted bread, ripe tropical fruit and oak.", glass: 170, bottle: 850 },
            { name: "Lugana", desc: "100% Turbiana di Lugana. Fresh, delicate and balanced, slightly tropical and mineral.", glass: 150, bottle: 750 }
          ]
        },
        {
          title: "Rosé & sparkling",
          glassBottle: true,
          items: [
            { name: "Remonda Bollicine", desc: "Glera and Pinot Noir. Floral, wild berries such as raspberry.", glass: 130, bottle: 650 },
            { name: "Langhe Rosato", desc: "Nebbiolo and Barbera. Raspberry, strawberry, dry but fruity.", glass: 150, bottle: 750 },
            { name: "Jhamel Millesimato Brut", desc: "90% Chardonnay, 10% Pinot Noir. Toasted bread, green apples and sage.", bottle: 1050 }
          ]
        }
      ]
    }
  };

  function priceHTML(item){
    if (item.priceLabel) return item.priceLabel + (item.priceSuffix ? '<br><small>' + item.priceSuffix + '</small>' : '');
    if (item.glass && item.bottle) return 'Glass ' + item.glass + ',-<br>Bottle ' + item.bottle + ',-';
    if (item.bottle) return 'Bottle ' + item.bottle + ',-';
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
      '<p class="eyebrow">Our menu</p>' +
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
