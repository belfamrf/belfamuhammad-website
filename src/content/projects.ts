// Concept projects shown on the desk. All three are fictional businesses,
// so every card is labelled "Concept project".
export type Project = {
  slug: string;
  kind: string;
  place: string;
  goal: string;
  audience: string;
  action: string;
  scope: string;
};

export const projects: Project[] = [
  {
    slug: "wellness",
    kind: "Personal training studio",
    place: "Lisbon, Portugal",
    goal: "Turn Instagram followers into paying clients.",
    audience: "Busy professionals who want one-to-one coaching.",
    action: "Book a free intro session.",
    scope: "Logo + website",
  },
  {
    slug: "contractor",
    kind: "Renovation contractor",
    place: "Melbourne, Australia",
    goal: "Win bigger renovation jobs.",
    audience: "Homeowners comparing three quotes before they commit.",
    action: "Request a site visit.",
    scope: "Website",
  },
  {
    slug: "villa",
    kind: "Private villa",
    place: "Bali, Indonesia",
    goal: "More direct bookings, fewer platform commissions.",
    audience: "Couples and families planning a trip to Bali.",
    action: "Check dates and book direct.",
    scope: "Website",
  },
];
