const PATHS = {
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  'arrow-down': <path d="M12 5v14m0 0-6-6m6 6 6-6" />,
  'arrow-left': <path d="M19 12H5m0 0 6-6m-6 6 6 6" />,
  'arrow-right': <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  send: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
}

export default function Icon({ name, size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  )
}
