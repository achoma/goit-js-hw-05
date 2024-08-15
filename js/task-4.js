// Napisz funkcję strzałkową getTotalBalanceByGender(users, gender), która przyjmuje dwa parametry:
//  * pierwszy parametr users — tablica obiektów użytkowników,
//  * drugi parametr gender — ciąg znaków przechowujący płeć.
// Funkcja powinna używać łańcucha wywołań metod i zwracać saldo użytkowników
//     (właściwość balance), których płeć(właściwość gender) odpowiada wartości parametru gender.
const allUsers = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863
