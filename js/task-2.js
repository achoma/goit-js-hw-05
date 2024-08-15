// Napisz funkcję strzałkową getUsersWithFriend(users, friendName), która przyjmuje dwa parametry:
//  * pierwszy parametr users — tablica obiektów użytkowników,
//  * drugi parametr friendName — nazwa znajomych do wyszukania.
// Funkcja powinna zwrócić tablicę wszystkich użytkowników z tablicy users,
//     którzy mają znajomego o nazwie friendName.
//     Znajomi każdego użytkownika są przechowywani we właściwości friends.
//     Jeśli nie ma użytkowników, którzy mają takiego znajomego, funkcja powinna zwrócić pustą tablicę.
// Wskazówki:
// Metoda filter() może być użyta do utworzenia nowej tablicy z elementami spełniającymi określony warunek.
// Użyj metody includes(), aby sprawdzić czy tablica friends zawiera friendName.

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []
