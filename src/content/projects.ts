// Concept projects shown on the desk. All three are fictional businesses,
// so every card is labelled "Concept project".
export type Project = {
  slug: string;
  name?: string;
  kind: string;
  place: string;
  goal: string;
  audience: string;
  action: string;
  scope: string;
  /** Public address of the built demo, once it is live. */
  live?: string;
  /** Case study page on this site. */
  caseHref?: string;
};

export const projects: Project[] = [
  {
    slug: "wellness",
    name: "KERN",
    kind: "Personal training studio",
    place: "Copenhagen, Denmark",
    goal: "Turn a quiet studio into a full intro calendar.",
    audience: "Busy professionals, 30 to 50, who want to get stronger without a crowded gym.",
    action: "Book a free intro session.",
    scope: "Brand identity, logo, website",
    live: "https://kern.belfamuhammad.com",
    caseHref: "/work/kern",
  },
  {
    slug: "contractor",
    name: "Kelso & Reid",
    kind: "Renovation contractor",
    place: "Melbourne, Australia",
    goal: "Win bigger renovation jobs.",
    audience: "Homeowners comparing three quotes before they commit.",
    action: "Request a site visit.",
    scope: "Website",
    live: "https://renovation.belfamuhammad.com",
    caseHref: "/work/renovation",
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
