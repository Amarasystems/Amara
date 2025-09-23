export const CHANNELS = [
  { id: 1, name: "Facebook", icon: "f", color: "#1877F2", size: "lg" },
  { id: 2, name: "Instagram", icon: "ig", color: "#E1306C", size: "md" },
  { id: 3, name: "YouTube", icon: "yt", color: "#FF0000", size: "sm" },
  { id: 4, name: "LinkedIn", icon: "in", color: "#0A66C2", size: "md" },
  { id: 5, name: "TikTok", icon: "tt", color: "#000000", size: "lg" },
  { id: 6, name: "Pinterest", icon: "p", color: "#E60023", size: "sm" },
  { id: 7, name: "X (Twitter)", icon: "x", color: "#000000", size: "sm" },
  { id: 8, name: "Snapchat", icon: "sc", color: "#FFFC00", size: "md" },
];

export type Channel = (typeof CHANNELS)[number];
