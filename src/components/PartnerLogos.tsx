interface PartnerLogoProps {
  name: string;
  className?: string;
}

function PartnerLogo({ name, className = "" }: PartnerLogoProps) {
  const logos = {
    Microsoft: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
        <rect x="13" y="0" width="11" height="11" fill="#7FBA00"/>
        <rect x="0" y="13" width="11" height="11" fill="#00A4EF"/>
        <rect x="13" y="13" width="11" height="11" fill="#FFB900"/>
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <path fill="#FF9900" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    Cisco: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <path fill="#1BA0D7" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        <circle cx="12" cy="12" r="8" fill="none" stroke="#1BA0D7" strokeWidth="2"/>
        <path fill="#1BA0D7" d="M8 8h8v8H8z"/>
      </svg>
    ),
    IBM: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <path fill="#052FAD" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="#052FAD" d="M8 6h8v2H8zm0 3h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"/>
        <text x="12" y="16" textAnchor="middle" fill="#052FAD" fontSize="6" fontWeight="bold">IBM</text>
      </svg>
    ),
    Splunk: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <path fill="#65B34C" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="white" d="M8 8l4 4 4-4v8H8V8z"/>
        <circle cx="12" cy="12" r="3" fill="#65B34C"/>
      </svg>
    ),
    "Palo Alto": (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <path fill="#FF6B35" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="white" d="M6 8h12v2H6zm0 3h12v2H6zm0 3h8v2H6z"/>
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#FF6B35" strokeWidth="2"/>
      </svg>
    )
  };

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300 ${className}`}>
      {logos[name as keyof typeof logos] || <span className="text-gray-400 font-semibold text-sm">{name}</span>}
    </div>
  );
}

export default function PartnerLogos() {
  const partners = ['Microsoft', 'AWS', 'Cisco', 'IBM', 'Splunk', 'Palo Alto'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {partners.map((partner) => (
        <PartnerLogo key={partner} name={partner} />
      ))}
    </div>
  );
}
