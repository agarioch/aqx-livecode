export type PriceData = {
  symbol: string;
  name: string;
  price: number;
  movement: number;
  segment: "APEX" | "ACCESS";
};

const priceData: PriceData[] = [
  {
    symbol: "ALSP",
    name: "Ace Liberty & Stone",
    price: 40,
    movement: 5,
    segment: "APEX",
  },
  {
    symbol: "ADS",
    name: "Adsure Services",
    price: 300,
    movement: -5,
    segment: "ACCESS",
  },
  {
    symbol: "ATC",
    name: "All Things Considered",
    price: 120,
    movement: 0,
    segment: "APEX",
  },
  {
    symbol: "ANA",
    name: "Ananda Developments",
    price: 10,
    movement: -2,
    segment: "ACCESS",
  },
  {
    symbol: "AQX",
    name: "Aquis Exchange",
    price: 700,
    movement: 20,
    segment: "APEX",
  },
  {
    symbol: "ARBB",
    name: "Arbuthnot Banking Group",
    price: 2650,
    movement: 10,
    segment: "ACCESS",
  },
  {
    symbol: "AWLP",
    name: "Asia Wealth Group Holdings",
    price: 50,
    movement: -5,
    segment: "ACCESS",
  },
  {
    symbol: "BSP",
    name: "Black Sea Property",
    price: 30,
    movement: 0,
    segment: "ACCESS",
  },
  {
    symbol: "BWAP",
    name: "BWA Group",
    price: 50,
    movement: 5,
    segment: "ACCESS",
  },
  {
    symbol: "CFCP",
    name: "Capital for Colleagues",
    price: 1000,
    movement: -10,
    segment: "APEX",
  },
  {
    symbol: "CIA",
    name: "Clean Invest Africa",
    price: 320,
    movement: -20,
    segment: "ACCESS",
  },
];

export default priceData;
