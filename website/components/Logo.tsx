
export const Logo = () => {
  return (
    <svg fill='white' style={{ background: 'black' }} viewBox="0 0 1000 200" width="100%">
      <g>
        <text y="120" textLength="700" font-family="Fira Code" font-size="60">PAINTBOX</text>
        <line x1="805" y1="30" x2="10000" y2="30" stroke='red' strokeWidth='30' stroke-linecap="round" />
        <line x1="805" y1="60" x2="10000" y2="60" stroke='orange' strokeWidth='30' stroke-linecap="round" />
        <line x1="805" y1="90" x2="10000" y2="90" stroke='yellow' strokeWidth='30' stroke-linecap="round"/>
        <line x1="805" y1="120" x2="10000" y2="120" stroke='lime' strokeWidth='30' stroke-linecap="round"/>
        <line x1="805" y1="150" x2="10000" y2="150" stroke='#265cde' strokeWidth='30' strokeLinecap="round"/>
        <line x1="805" y1="180" x2="10000" y2="180" stroke='purple' strokeWidth='30' strokeLinecap="round" />
        <path d="M690,190 L800,20 L910,190 z" fill='black' stroke='white' strokeWidth="10" stroke-linejoin="round"></path>
      </g>
    </svg>
  )
}
