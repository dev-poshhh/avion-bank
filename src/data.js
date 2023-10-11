const DATA = [
  {
    email: "admin@admin.com",
    password: "abc123",
    fullname: "Admin Account",
    type: "Savings Peso",
    number: "47290539480",
    balance: 1000,
    isAdmin: true,
    transactions: [],
  },
  {
    email: "jeff@gmail.com",
    password: "abc123",
    fullname: "Jeffrey de Lara",
    type: "Savings Peso",
    number: "47290539481",
    balance: 1029300.43,
    isAdmin: true,
    transactions: [],
  },
  {
    email: "laylacorar@gmail.com",
    password: "corar2@1",
    fullname: "Layla Kyla Corar",
    type: "Savings Peso",
    number: "47290539482",
    balance: 250000.22,
    isAdmin: false,
    budget: [
      //   {
      //     title: "Tuition fee",
      //     amount: 12000,
      //   },
      //   {
      //     title: "Food take out during the pandemic",
      //     amount: 4000,
      //   },
    ],
    transactions: [
      // {
      //   title: "Withdraw",
      //   amount: 10000,
      //   type: "debit",
      //   date: "Februa 7, 2021",
      // },
      {
        title: "Profit Deposit",
        amount: 80000.22,
        type: "credit",
        date: "July 11, 2022",
      },
      {
        title: "Withdraw",
        amount: 10000,
        type: "debit",
        date: "April 11, 2022",
      },
      {
        title: "Profit Deposit",
        amount: 110000,
        type: "credit",
        date: "November 13, 2021",
      },
      {
        title: "Fund Deposit",
        amount: 70000,
        type: "credit",
        date: "January 4 , 2021",
      },
    ],
  },
  {
    email: "user24@gmail.com",
    password: "abc123",
    fullname: "Peter de Castro",
    type: "Savings Peso",
    number: "47290539483",
    balance: 102938.34,
    isAdmin: false,
    transactions: [],
  },
  {
    email: "user34@gmail.com",
    password: "abc123",
    fullname: "Noli Enriquez",
    type: "Checking Peso",
    number: "47290539484",
    balance: 837495.38,
    isAdmin: false,
    transactions: [],
  },

  {
    email: "derek@gmail.com",
    password: "abc123",
    fullname: "Karen Davila",
    type: "Checking Peso",
    number: "47290539485",
    balance: 574839.58,
    isAdmin: false,
    transactions: [],
  },
  {
    email: "client@client.com",
    password: "abc123",
    fullname: "Client Demo Account",
    type: "Savings Peso",
    number: "47290539486",
    balance: 1000,
    isAdmin: false,
    transactions: [],
  },
];

export default DATA;
