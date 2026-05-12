export default function ClinicLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 180 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-label="D.O.R. Clínica Espinhal"
      role="img"
    >
      <text
        x="1"
        y="25"
        fontSize="28"
        fontWeight="700"
        fontFamily="Sora, system-ui, sans-serif"
        letterSpacing="5"
      >
        D.O.R.
      </text>

      <text
        x="3"
        y="37"
        fontSize="8.5"
        fontWeight="500"
        fontFamily="Sora, system-ui, sans-serif"
        letterSpacing="4.5"
        opacity="0.70"
      >
        CLÍNICA ESPINHAL
      </text>

      <path
        d="M 2 43 C 50 38, 115 46, 172 40"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  )
}