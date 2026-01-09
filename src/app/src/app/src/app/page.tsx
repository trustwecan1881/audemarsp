export interface Watch {
  id: string;
  name: string;
  collection: string;
  ref: string;
  image: string;
  category: "current" | "legacy";
}

export const watches: Watch[] = [
  {
    id: "1",
    name: "Royal Oak Selfwinding",
    collection: "Royal Oak",
    ref: "15510ST.OO.1320ST.06",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800",
    category: "current",
  },
  {
    id: "2",
    name: "Royal Oak 'Jumbo' Extra-Thin",
    collection: "Royal Oak",
    ref: "15202ST.OO.1240ST.01",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=800",
    category: "legacy",
  },
  {
    id: "3",
    name: "Code 11.59 Chronograph",
    collection: "Code 11.59",
    ref: "26393ST.OO.A002KB.01",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800",
    category: "current",
  },
  {
    id: "4",
    name: "Royal Oak Offshore",
    collection: "Offshore",
    ref: "26420CE.OO.A043VE.01",
    image: "https://images.unsplash.com/photo-1619134769032-e9d758315846?auto=format&fit=crop&q=80&w=800",
    category: "legacy",
  },
];
