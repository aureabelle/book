const data = {
  'books': [
    // en - fiction
    { 'title': 'Beirut Hellfire Society',
      'author': 'Rawi Hage',
      'publisher': 'Knopf Canada/Penguin Random House Canada',
      'distributor': 'Knopf Canada/Penguin Random House Canada',
      'isbn': '978-0-7352-7359-7',
      'place': 1,
      'category': 'fiction',
      'src': require(`./images/books/en/fiction/BeirutHellfireSociety.jpg`),
      'imageSrc': 'BeirutHellfireSociety.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'Jonny Appleseed',
      'author': 'Joshua Whitehead',
      'publisher': 'Arsenal Pulp Press',
      'distributor': 'University of Toronto Press',
      'isbn': '978-1-55152-725-3',
      'place': 2,
      'category': 'fiction',
      'src': require(`./images/books/en/fiction/JonnyAppleseed.jpg`),
      'imageSrc': 'JonnyAppleseed.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'The Red Word',
      'author': 'Sarah Henstra',
      'publisher': 'ECW Press',
      'distributor': 'Jaguar Books Group',
      'isbn': '978-1-77041-424-2',
      'place': 0,
      'category': 'fiction',
      'src': require(`./images/books/en/fiction/TheRedWord.jpg`),
      'imageSrc': 'TheRedWord.jpg',
      'lang': 'en',
      'sypnosis': 'A smart, dark, and take-no-prisoners look at rape culture and the extremes to which ideology can go, The Red Word is a campus novel like no other. As her sophomore year begins, Karen enters into the back-to-school revelry—particularly at Gamma Beta Chi. When she wakes up one morning on the lawn of Raghurst, a house of radical feminists, she gets a crash course in the state of feminist activism on campus. The frat known as GBC is notorious, she learns, nicknamed “Gang Bang Central” and a prominent contributor to a list of rapists compiled by female students. Despite continuing to party there and dating one of the brothers, Karen is equally seduced by the intellectual stimulation and indomitable spirit of the Raghurst women, who surprise her by wanting her as a housemate and recruiting her into the upper-level class of a charismatic feminist mythology scholar they all adore. As Karen finds herself caught between two increasingly polarized camps, ringleader housemate Dyann believes she has hit on the perfect way to expose and bring down the fraternity as a symbol of rape culture—but the war between the houses will exact a terrible price.'
    },
    {
      'title': 'Women Talking ',
      'author': 'Miriam Toews',
      'publisher': 'Knopf Canada/Penguin Random House Canada',
      'distributor': 'Knopf Canada/Penguin Random House Canada',
      'isbn': '978-0-7352-7396-2',
      'place': 3,
      'category': 'fiction',
      'src': require(`./images/books/en/fiction/WomenTalking.jpg`),
      'imageSrc': 'WomenTalking.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'Zolitude',
      'author': 'Paige Cooper',
      'publisher': 'Biblioasis',
      'distributor': 'University of Toronto Press',
      'isbn': ' 978-1-77196-217-9',
      'place': 4,
      'category': 'fiction',
      'src': require(`./images/books/en/fiction/Zolitude.jpg`),
      'imageSrc': 'Zolitude.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    // fr - fiction
    {
      'title': 'De synthèse',
      'author': 'Karoline Georges',
      'publisher': 'Éditions Alto',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89694-349-4',
      'place': 0,
      'category': 'fiction',
      'src': require(`./images/books/fr/fiction/DeSynthese.jpg`),
      'imageSrc': 'DeSynthese.jpg',
      'lang': 'fr',
      'sypnosis': 'One woman stands still in the window of her suburban home, feeling the weight of death in the hollow of her stomach. The other woman plunges into her computer screen, seeking to transform into her digital avatar, an image in search of the absolute. The first woman gave birth to the other, who is now hoping to be reborn in a virtual body, far from the sadness that permeates the family home. A narrative of luminous lucidity capable of spurring awareness and touching souls, De synthèse is about a mother-daughter relationship from the point of view of an image-woman renewing her ties with her family as her mother enters the terminal phase after a long struggle with illness. It is a story about the body, disappearance, reflections, composition and decomposition. It is the story of an image to be perfected, beyond the disaster of the flesh.'
    },
    {
      'title': 'La bête creuse',
      'author': 'Christophe Bernard',
      'publisher': 'Le Quartanier',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89698-294-3',
      'place': 1,
      'category': 'fiction',
      'src': require(`./images/books/fr/fiction/LaBeteCreuse.jpg`),
      'imageSrc': 'LaBeteCreuse.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },
    {
      'title': 'Les noyades secondaires',
      'author': 'Maxime Raymond Bock',
      'publisher': 'Le Cheval d’août',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-924491-22-5',
      'place': 2,
      'category': 'fiction',
      'src': require(`./images/books/fr/fiction/LaBeteCreuse.jpg`),
      'imageSrc': 'LaBeteCreuse.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },
    {
      'title': 'Manikanetish',
      'author': 'Naomi Fontaine',
      'publisher': 'Mémoire d’encrier',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89712-489-2',
      'place': 3,
      'category': 'fiction',
      'src': require(`./images/books/fr/fiction/Manikanetish.jpg`),
      'imageSrc': 'Manikanetish.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },
    {
      'title': 'noms fictifs ',
      'author': 'Olivier Sylvestre',
      'publisher': 'Hamac, a division of Les éditions du Septentrion',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89448-898-0',
      'place': 4,
      'category': 'fiction',
      'src': require(`./images/books/fr/fiction/NomsFictifs.jpg`),
      'imageSrc': 'NomsFictifs.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },


    // en - poetry
    {
      'title': 'Because: A Lyric Memoir',
      'author': 'Joshua Mensch',
      'publisher': 'W.W. Norton & Company',
      'distributor': 'Penguin Random House Canada',
      'isbn': '978-0-393-63522-5',
      'place': 1,
      'category': 'poetry',
      'src': require(`./images/books/en/poetry/Because.jpg`),
      'imageSrc': 'Because.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'Night Became Years',
      'author': 'Jason Stefanik',
      'publisher': 'Coach House Books',
      'distributor': 'PGC Books/Raincoast',
      'isbn': '978-1-55245-363-6',
      'place': 2,
      'category': 'poetry',
      'src': require(`./images/books/en/poetry/NightBecameYears.jpg`),
      'imageSrc': 'NightBecameYears.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'The Blue Clerk',
      'author': 'Dionne Brand',
      'publisher': 'McClelland & Stewart/Penguin Random House Canada',
      'distributor': 'McClelland & Stewart/Penguin Random House Canada',
      'isbn': '978-0-7710-7081-5',
      'place': 3,
      'category': 'poetry',
      'src': require(`./images/books/en/poetry/TheBlueClerk.jpg`),
      'imageSrc': 'TheBlueClerk.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'This Wound is a World',
      'author': 'Billy-Ray Belcourt',
      'publisher': 'Frontenac House',
      'distributor': 'Alpine Book Peddlers',
      'isbn': '978-1-927823-64-4',
      'place': 4,
      'category': 'poetry',
      'src': require(`./images/books/en/poetry/ThisWoundIsAWorld.jpg`),
      'imageSrc': 'ThisWoundIsAWorld.jpg',
      'lang': 'en',
      'sypnosis': ''
    },
    {
      'title': 'Wayside Sang',
      'author': 'Cecily Nicholson',
      'publisher': 'Talonbooks',
      'distributor': 'PGC Books/Raincoast',
      'isbn': '978-1-77201-182-1',
      'place': 0,
      'category': 'poetry',
      'src': require(`./images/books/en/poetry/WaysideSang.jpg`),
      'imageSrc': 'WaysideSang.jpg',
      'lang': 'en',
      'sypnosis': ''
    },

    // fr - poetry
    {
      'title': 'Cruauté du jeu',
      'author': 'France Théoret',
      'publisher': 'Écrits des Forges',
      'distributor': 'Prologue',
      'isbn': '978-2-89645-348-1',
      'place': 1,
      'category': 'poetry',
      'src': require(`./images/books/fr/poetry/CruauteDuJeu.jpg`),
      'imageSrc': 'CruauteDuJeu.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },
    {
      'title': 'La dévoration des fées ',
      'author': 'Catherine Lalonde',
      'publisher': 'Le Quartanier',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89698-326-1',
      'place': 2,
      'category': 'poetry',
      'src': require(`./images/books/fr/poetry/LaDevorationDesFees.jpg`),
      'imageSrc': 'LaDevorationDesFees.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },
    {
      'title': 'La raison des fleurs',
      'author': 'Michaël Trahan',
      'publisher': 'Le Quartanier',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89698-359-9',
      'place': 0,
      'category': 'poetry',
      'src': require(`./images/books/fr/poetry/LaRaisonDesFleurs.jpg`),
      'imageSrc': 'LaRaisonDesFleurs.jpg',
      'lang': 'fr',
      'sypnosis': 'For years I was haunted by the waves, the surf, the memory of a body caught on the bottom of the sea. I was trying to work through a scene I couldn’t get over. I lived in a dream that did not belong to me, a photograph taken in the 1950s, then forgotten or lost before it was developed. Someone discovered the negative by chance in a flea market half a century later. A woman stands on the beach. The sun is setting on a horizon of blue, pink, and purple. The sea rolls in at her feet. The woman is looking into the distance. We can barely see the profile of her face. It is not really an answer. It is a fiction of disappearance, an investigation into the silence of a few images I’ve been dragging around for too long. It is a requiem: a song that calms both the dead and the living. It is the logic of ink pushed to the very limit of truth.'
    },
    {
      'title': 'Le revers',
      'author': 'Roxane Desjardins',
      'publisher': 'Les Herbes rouges',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-89419-633-5',
      'place': 3,
      'category': 'poetry',
      'src': require(`./images/books/fr/poetry/LeRevers.jpg`),
      'imageSrc': 'LeRevers.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },
    {
      'title': 'Ne faites pas honte à votre siècle',
      'author': 'Daria Colonna',
      'publisher': 'Poètes de brousse',
      'distributor': 'Diffusion Dimedia',
      'isbn': '978-2-924671-10-8',
      'place': 4,
      'category': 'poetry',
      'src': require(`./images/books/fr/poetry/NeFaitesPasHonteAVotreSiecle.jpg`),
      'imageSrc': 'NeFaitesPasHonteAVotreSiecle.jpg',
      'lang': 'fr',
      'sypnosis': ''
    },


  ],
  categories: [
    {
      'name': 'fiction',
      'title': 'Fiction'
    },
    {
      'name': 'poetry',
      'title': 'Poetry'
    },
    {
      'name': 'drama',
      'title': 'Drama'
    },
    {
      'name': 'non-fiction',
      'title': 'Non-Fiction'
    },
    {
      'name': 'young-people-lit-text',
      'title': 'Young People\'s Literature - Text'
    },
    {
      'name': 'young-people-lit-illustrated',
      'title': 'Young People\'s Literature - Illustrated Books'
    },
    {
      'name': 'translation',
      'title': 'Translation'
    },
  ],
};

module.exports = data;