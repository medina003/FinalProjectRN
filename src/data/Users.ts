export const Users = [
  {
    email: "a",
    password: "z",
    paymentMethod: {
      nameOfCard: "Leo card",
      hexCode: "1234567812345678",
      date: "27/02",
      cvv: "999",
    },
    deliveryAdress: "",
    deliveryOpptions: "I'll pick it up by myself",
    nonContactDelivery: false,
    favorites: [],
    cart: [
      {
        title: "Boston Lettuce",
        price: 1.1,
        country: "Spain",
        description:
          "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
        isFavorite: false,
        isInCart: false,
        img: require("../images/vegetables/BostonLettuce.jpeg"),
        isPiece: false,
      },
    ],
  },
];
