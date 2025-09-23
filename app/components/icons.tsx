import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { color?: string };

function Base({
  children,
  color = "currentColor",
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
      {...props}
    >
      <g fill={color}>{children}</g>
    </svg>
  );
}

export const Facebook = (p: IconProps) => (
  <Base color="#1877F2" {...p}>
    <path d="M14 8.5h2V5.6A20.7 20.7 0 0 0 13.9 5c-2.3 0-3.9 1.4-3.9 4v2.3H7v3h3v7h3v-7h2.4l.6-3H13V9.4c0-.9.3-1 1-1Z" />
  </Base>
);

export const Discord = (p: IconProps) => (
  <Base color="#5865F2" {...p}>
    <path d="M19.5 6.3A12 12 0 0 0 15.8 5l-.3.6a10 10 0 0 1 2.5 1.3 9 9 0 0 0-9.8 0c.8-.6 1.6-1 2.5-1.3L10.4 5A12 12 0 0 0 6.7 6.3C3.5 11 4.2 15.5 4.2 15.5a8 8 0 0 0 4 2l.6-.9c-.8-.3-1.6-.8-2.3-1.4.8.6 1.8 1 2.8 1.3a10 10 0 0 0 2 .2 10 10 0 0 0 2-.2c1-.2 2-.7 2.8-1.3-.7.6-1.5 1.1-2.3 1.4l.6.9a8 8 0 0 0 4-2s.7-4.6-2.5-9.2ZM9.7 13.2c-.6 0-1.2-.6-1.2-1.3s.5-1.3 1.2-1.3c.6 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3Zm4.6 0c-.6 0-1.2-.6-1.2-1.3s.5-1.3 1.2-1.3 1.2.6 1.2 1.3c0 .7-.5 1.3-1.2 1.3Z" />
  </Base>
);

export const LinkedIn = (p: IconProps) => (
  <Base color="#0A66C2" {...p}>
    <path d="M4 9h3v11H4V9Zm1.5-6A1.8 1.8 0 1 0 7.3 4 1.8 1.8 0 0 0 5.5 3ZM10 9h3v1.6c.4-.8 1.5-1.8 3.3-1.8 3.1 0 3.7 2 3.7 4.6V20h-3v-5.5c0-1.3 0-2.9-1.8-2.9-1.7 0-2 1.3-2 2.8V20h-3V9Z" />
  </Base>
);

export const YouTube = (p: IconProps) => (
  <Base color="#FF0000" {...p}>
    <path d="M21.8 8.7a3.4 3.4 0 0 0-2.4-2.4C17.6 6 12 6 12 6s-5.6 0-7.4.3A3.4 3.4 0 0 0 2.2 8.7C2 10.5 2 12 2 12s0 1.5.2 3.3a3.4 3.4 0 0 0 2.4 2.4C6.4 18 12 18 12 18s5.6 0 7.4-.3a3.4 3.4 0 0 0 2.4-2.4C22 13.5 22 12 22 12s0-1.5-.2-3.3ZM10 14.5v-5l5 2.5-5 2.5Z" />
  </Base>
);

export const Google = (p: IconProps) => (
  <Base color="#4285F4" {...p}>
    <path d="M21 12.2c0-.7-.1-1.2-.2-1.7H12v3.1h5.2a4.6 4.6 0 0 1-1.9 3v2.4h3.1c1.8-1.7 2.9-4.1 2.9-6.8Z" />
    <path
      color="#34A853"
      d="M12 22a9.8 9.8 0 0 0 6.7-2.3l-3.1-2.4c-.9.6-2 .9-3.6.9a6.2 6.2 0 0 1-5.9-4.3H2.9v2.6A10 10 0 0 0 12 22Z"
    />
    <path
      color="#FBBC05"
      d="M6.4 14a6.1 6.1 0 0 1 0-3.9V7.5H2.9a10 10 0 0 0 0 8.9l3.5-2.4Z"
    />
    <path
      color="#EA4335"
      d="M12 5.9c1.9 0 3.1.8 3.8 1.5L18.8 4A9.9 9.9 0 0 0 12 2 10 10 0 0 0 2.9 7.5L6.4 10c.8-2.4 3-4 5.6-4Z"
    />
  </Base>
);

export const Pinterest = (p: IconProps) => (
  <Base color="#E60023" {...p}>
    <path d="M12 2a10 10 0 0 0-3.6 19.4c-.1-.8-.2-2 .1-2.9l1.3-5c-.2-.4-.3-1-.3-1.5 0-1.4.8-2.5 1.8-2.5.8 0 1.2.6 1.2 1.4 0 .8-.5 2-1 3.1-.3 1 .6 1.8 1.6 1.8 2 0 3.5-2.2 3.5-5.3 0-2.8-2-4.7-4.8-4.7-3.2 0-5.1 2.4-5.1 4.8 0 .9.3 1.8.8 2.4.1.1.1.1 0 .3l-.3 1.1c0 .1-.1.2-.2.1-1-.4-1.7-1.8-1.7-3.4 0-2.4 2-5.2 6-5.2 3.3 0 5.5 2.4 5.5 5.1 0 3.5-1.9 6.2-4.8 6.2-.9 0-1.8-.5-2.1-1 0 0-.5 2-0.6 2.4-.2.9-.8 2.1-1.2 2.8a10 10 0 1 0 3.5-19.5Z" />
  </Base>
);

export const Messenger = (p: IconProps) => (
  <Base color="#00B2FF" {...p}>
    <path d="M12 3a9 9 0 0 0-9 9c0 5 4 9 9 9 1.6 0 3.2-.4 4.5-1.1l2.5 1-1-2.5A9 9 0 0 0 21 12c0-5-4-9-9-9Zm4.6 9.8-2.6-1.4-2.5 1.4 2.5-3.7 2.6 1.4 2.5-1.4-2.5 3.7Z" />
  </Base>
);

export const TwitterX = (p: IconProps) => (
  <Base color="#000000" {...p}>
    <path d="M18.5 3h-2.4l-4 5.2L8.9 3H3l6.7 9.7L3.4 21h2.4l4.5-5.9 3.4 5.9h5.7l-7-10.2L18.5 3Z" />
  </Base>
);

export const Twitch = (p: IconProps) => (
  <Base color="#9146FF" {...p}>
    <path d="M4 4h16v9l-4 4h-3l-3 3H8v-3H4V4Zm14 2H6v9h3v3l3-3h3l3-3V6Zm-3 7h-2V8h2v5Zm-5 0H8V8h2v5Z" />
  </Base>
);

export const Icons = {
  Facebook,
  Discord,
  LinkedIn,
  YouTube,
  Google,
  Pinterest,
  Messenger,
  TwitterX,
  Twitch,
};

export type IconSpec = {
  id: number;
  name: string;
  href: string;
  size: "sm" | "md" | "lg";
  Icon: (p: IconProps) => React.ReactElement;
};
