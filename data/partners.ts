export const ITEMS = [
  { id: 1, name: "agency", icon: "🏢" },
  { id: 2, name: "application", icon: "☁️" },
  { id: 3, name: "business", icon: "◆" },
  { id: 4, name: "company", icon: "▦" },
  { id: 5, name: "enterprise", icon: "⬢" },
  { id: 6, name: "startup", icon: "↗︎" },
  { id: 7, name: "institute", icon: "◖" },
  { id: 8, name: "organization", icon: "↻" },
];

export type Partner = (typeof ITEMS)[number];
