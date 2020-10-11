// Do not modify , file linked with Airtable
const teams = {
  vue: "VueJS",
  python: "Python",
  js: "JavaScript",
  node: "NodeJS",
  react: "React",
  ruby: "Ruby",
  angular: "Angular",
  aws: "AWS",
  fcc: "Free Code Camp",
  git: "Git",
  flutter: "Flutter",
  csharp: "CSharp",
  swift: "Swift",
  php: "PHP",
  eng: "English",
  git: "Git",
}
const exp = {
  novice: "Principiante/Entusiasta",
  default: "1 - 2 Años de exp.",
  pro: "Más de 2 años de exp.",
}
const timing = {
  h1: "1 Hora por semana",
  h2: "2 Horas por semana",
  h3: "3 Horas por semana",
  plus: "Más de 3 horas por semana",
}

module.exports.mentors = [
  {
    exp: exp.pro,
    name: "Gerardo Lopéz",
    teams: [teams.python, teams.aws],
    timing: timing.plus,
    discord: "glop97#0298",
    twitter: "gerardev_",
    image:
      "https://cdn.discordapp.com/attachments/756482229009514507/756482745731121244/46210069_2008385289255990_3372877451507007488_o.jpg",
  },
  {
    exp: exp.default,
    name: "Sergio Bernal",
    teams: [teams.python, teams.node, teams.js],
    timing: timing.h3,
    discord: "nhulox97",
    twitter: "nodeschoolsm",
    image:
      "https://cdn.discordapp.com/attachments/756482229009514507/756708191626330202/perfil.png",
  },
  {
    exp: exp.pro,
    name: "Mario Menjívar",
    teams: [teams.react, teams.node, teams.js, teams.eng, teams.csharp],
    timing: timing.h2,
    discord: "mariomenjr",
    twitter: "mariomenjr",
    image:
      "https://cdn.discordapp.com/attachments/756482229009514507/756482403266068480/86460255_2995952337105658_6291319162341949440_o.jpg",
  },
  {
    exp: exp.pro,
    name: "Juan Trejo",
    teams: [
      teams.vue,
      teams.aws,
      teams.eng,
      teams.node,
      teams.git,
      teams.ruby,
      teams.js,
    ],
    timing: timing.plus,
    discord: "Juan Trejo",
    twitter: "_trejosv",
    image:
      "https://cdn.discordapp.com/attachments/756482229009514507/756482827247157310/2290322.jpeg",
  },
]
