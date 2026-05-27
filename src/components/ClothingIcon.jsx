const G = '#c9a84c'
const F = '#252830'
const S = '#3a3d45'
const L = '#2c2f38'

const Tee = () => (
  <svg viewBox="0 0 240 260" fill="none" width="100%" height="100%">
    <path d="M98 44 Q120 62 142 44 L184 30 L224 76 L192 100 L186 100 L186 234 L54 234 L54 100 L48 100 L16 76 L56 30 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M98 44 Q120 64 142 44" stroke={G} strokeWidth="2" fill="none" opacity="0.7"/>
    <line x1="120" y1="100" x2="120" y2="234" stroke={S} strokeWidth="1" strokeDasharray="4 5" opacity="0.35"/>
    <rect x="107" y="174" width="26" height="16" rx="1.5" fill="none" stroke={G} strokeWidth="0.8" opacity="0.5"/>
    <text x="120" y="185" textAnchor="middle" fill={G} fontSize="4.8" fontFamily="Montserrat" fontWeight="800" opacity="0.8">BC44</text>
    <path d="M66 112 L96 112 L96 140 L66 140 Z" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="66" y1="124" x2="96" y2="124" stroke={S} strokeWidth="0.8"/>
    <circle cx="172" cy="118" r="3" fill={G} opacity="0.6"/>
    <circle cx="172" cy="135" r="3" fill={G} opacity="0.6"/>
  </svg>
)

const Cargo = () => (
  <svg viewBox="0 0 220 300" fill="none" width="100%" height="100%">
    <rect x="40" y="20" width="140" height="22" rx="3" fill={F} stroke={S} strokeWidth="1.5"/>
    <line x1="60" y1="20" x2="55" y2="12" stroke={S} strokeWidth="2"/>
    <line x1="80" y1="20" x2="76" y2="12" stroke={S} strokeWidth="2"/>
    <line x1="140" y1="20" x2="144" y2="12" stroke={S} strokeWidth="2"/>
    <line x1="160" y1="20" x2="165" y2="12" stroke={S} strokeWidth="2"/>
    <rect x="100" y="14" width="20" height="14" rx="2" fill={G} opacity="0.7"/>
    <path d="M40 42 L55 42 L55 284 L15 284 L10 120 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M180 42 L165 42 L165 284 L205 284 L210 120 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <rect x="18" y="110" width="42" height="52" rx="3" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="18" y1="128" x2="60" y2="128" stroke={S} strokeWidth="0.8"/>
    <path d="M24 110 L24 104 L54 104 L54 110" stroke={S} strokeWidth="1.2" fill="none"/>
    <rect x="160" y="110" width="42" height="52" rx="3" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="160" y1="128" x2="202" y2="128" stroke={S} strokeWidth="0.8"/>
    <path d="M166 110 L166 104 L196 104 L196 110" stroke={S} strokeWidth="1.2" fill="none"/>
    <line x1="110" y1="42" x2="110" y2="284" stroke={S} strokeWidth="1.5"/>
    <line x1="55" y1="110" x2="15" y2="110" stroke={S} strokeWidth="0.8" strokeDasharray="3 4"/>
    <line x1="165" y1="110" x2="205" y2="110" stroke={S} strokeWidth="0.8" strokeDasharray="3 4"/>
    <text x="110" y="264" textAnchor="middle" fill={G} fontSize="5" fontFamily="Montserrat" fontWeight="700" opacity="0.5">BC44</text>
  </svg>
)

const Bomber = () => (
  <svg viewBox="0 0 260 280" fill="none" width="100%" height="100%">
    <rect x="55" y="230" width="150" height="18" rx="6" fill={L} stroke={S} strokeWidth="1.5"/>
    <path d="M55 248 L50 252 L210 252 L205 248 Z" fill={S} opacity="0.5"/>
    <path d="M80 70 L55 248 L205 248 L180 70 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M80 70 L55 50 L20 90 L45 150 L60 145 L60 248" stroke={S} strokeWidth="0" fill={F}/>
    <path d="M80 70 L55 50 L18 90 L46 155 L62 148 L55 248" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M180 70 L205 50 L242 90 L214 155 L198 148 L205 248" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M105 58 Q130 44 155 58 L152 70 Q130 55 108 70 Z" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M108 70 L105 58" stroke={S} strokeWidth="1"/>
    <path d="M152 70 L155 58" stroke={S} strokeWidth="1"/>
    <line x1="130" y1="70" x2="130" y2="248" stroke={G} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5"/>
    <circle cx="130" cy="110" r="4" fill={G} opacity="0.8"/>
    <circle cx="130" cy="135" r="4" fill={G} opacity="0.8"/>
    <circle cx="130" cy="160" r="4" fill={G} opacity="0.8"/>
    <rect x="80" y="110" width="36" height="28" rx="2" fill={L} stroke={S} strokeWidth="1"/>
    <rect x="144" y="110" width="36" height="28" rx="2" fill={L} stroke={S} strokeWidth="1"/>
    <path d="M48 148 Q35 152 36 165 Q37 175 48 175" stroke={G} strokeWidth="1.2" fill="none" opacity="0.5"/>
    <path d="M212 148 Q225 152 224 165 Q223 175 212 175" stroke={G} strokeWidth="1.2" fill="none" opacity="0.5"/>
  </svg>
)

const Shirt = () => (
  <svg viewBox="0 0 240 300" fill="none" width="100%" height="100%">
    <path d="M95 38 L60 28 L18 72 L48 100 L54 98 L54 268 L186 268 L186 98 L192 100 L222 72 L180 28 L145 38 Q120 55 95 38 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M95 38 L105 55 L120 60 L135 55 L145 38" stroke={S} strokeWidth="1.2" fill={L}/>
    <path d="M105 55 L120 62 L135 55" stroke={G} strokeWidth="1.5" fill="none" opacity="0.6"/>
    <line x1="120" y1="62" x2="120" y2="268" stroke={S} strokeWidth="1" strokeDasharray="5 5" opacity="0.3"/>
    <circle cx="120" cy="105" r="4.5" fill="none" stroke={G} strokeWidth="1" opacity="0.7"/>
    <circle cx="120" cy="128" r="4.5" fill="none" stroke={G} strokeWidth="1" opacity="0.7"/>
    <circle cx="120" cy="151" r="4.5" fill="none" stroke={G} strokeWidth="1" opacity="0.7"/>
    <circle cx="120" cy="174" r="4.5" fill="none" stroke={G} strokeWidth="1" opacity="0.7"/>
    <circle cx="120" cy="197" r="4.5" fill="none" stroke={G} strokeWidth="1" opacity="0.7"/>
    <rect x="72" y="100" width="36" height="28" rx="2" fill={L} stroke={S} strokeWidth="1.1"/>
    <path d="M80" y1="115" x2="100" y2="115" stroke={S} strokeWidth="0.8"/>
    <line x1="55" y1="98" x2="55" y2="240" stroke={S} strokeWidth="1.5"/>
    <line x1="185" y1="98" x2="185" y2="240" stroke={S} strokeWidth="1.5"/>
    <path d="M54 240 L54 260 Q54 268 65 268" stroke={S} strokeWidth="1.2" fill="none"/>
    <path d="M186 240 L186 260 Q186 268 175 268" stroke={S} strokeWidth="1.2" fill="none"/>
  </svg>
)

const Dress = () => (
  <svg viewBox="0 0 220 320" fill="none" width="100%" height="100%">
    <path d="M110 30 Q130 22 148 30 L155 55 L140 70 L155 300 L65 300 L80 70 L65 55 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M72 30 Q80 22 92 28" stroke={S} strokeWidth="1.2" fill="none" opacity="0.6"/>
    <path d="M72 30 L65 55 L80 70" stroke={S} strokeWidth="1.2" fill="none"/>
    <path d="M148 30 L155 55 L140 70" stroke={S} strokeWidth="1.2" fill="none"/>
    <path d="M90 28 Q110 40 130 28" stroke={G} strokeWidth="2" fill="none" opacity="0.7"/>
    <path d="M80 70 L65 300 M140 70 L155 300" stroke={S} strokeWidth="0.8" opacity="0.3" strokeDasharray="4 6"/>
    <path d="M72 28 L42 80 L62 88" fill={F} stroke={S} strokeWidth="1.3"/>
    <path d="M148 28 L178 80 L158 88" fill={F} stroke={S} strokeWidth="1.3"/>
    <path d="M80 100 Q110 110 140 100" stroke={G} strokeWidth="1.2" fill="none" opacity="0.5"/>
    <line x1="110" y1="70" x2="110" y2="300" stroke={S} strokeWidth="0.8" strokeDasharray="4 6" opacity="0.25"/>
    <path d="M65 200 Q80 195 80 210 Q80 220 65 220" fill={L} stroke={S} strokeWidth="1"/>
    <path d="M155 200 Q140 195 140 210 Q140 220 155 220" fill={L} stroke={S} strokeWidth="1"/>
    <text x="110" y="285" textAnchor="middle" fill={G} fontSize="4.5" fontFamily="Montserrat" fontWeight="700" opacity="0.5">BC44</text>
  </svg>
)

const Blazer = () => (
  <svg viewBox="0 0 260 310" fill="none" width="100%" height="100%">
    <path d="M62 68 L38 56 L14 95 L48 120 L52 118 L52 278 L208 278 L208 118 L212 120 L246 95 L222 56 L198 68 Q160 52 130 52 Q100 52 62 68 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M130 52 L115 80 L104 130 L130 145 L156 130 L145 80 Z" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M115 80 L90 68 L52 118" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M145 80 L170 68 L208 118" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M115 80 Q122 88 130 86 Q138 88 145 80" stroke={G} strokeWidth="1.5" fill="none" opacity="0.7"/>
    <circle cx="130" cy="160" r="5.5" fill="none" stroke={G} strokeWidth="1.2" opacity="0.8"/>
    <circle cx="130" cy="185" r="5.5" fill="none" stroke={G} strokeWidth="1.2" opacity="0.8"/>
    <rect x="78" y="125" width="40" height="8" rx="2" fill={L} stroke={S} strokeWidth="1"/>
    <rect x="78" y="230" width="44" height="30" rx="2" fill={L} stroke={S} strokeWidth="1"/>
    <rect x="138" y="230" width="44" height="30" rx="2" fill={L} stroke={S} strokeWidth="1"/>
    <line x1="52" y1="118" x2="52" y2="278" stroke={S} strokeWidth="1.2"/>
    <line x1="208" y1="118" x2="208" y2="278" stroke={S} strokeWidth="1.2"/>
    <path d="M52 118 Q58 140 52 160" stroke={G} strokeWidth="1" fill="none" opacity="0.3"/>
    <path d="M208 118 Q202 140 208 160" stroke={G} strokeWidth="1" fill="none" opacity="0.3"/>
  </svg>
)

const CropTop = () => (
  <svg viewBox="0 0 220 200" fill="none" width="100%" height="100%">
    <path d="M90 40 Q110 54 130 40 L162 30 L194 65 L170 85 L165 84 L165 178 L55 178 L55 84 L50 85 L26 65 L58 30 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M90 40 Q110 56 130 40" stroke={G} strokeWidth="2" fill="none" opacity="0.7"/>
    <line x1="110" y1="84" x2="110" y2="178" stroke={S} strokeWidth="1" strokeDasharray="4 5" opacity="0.3"/>
    <rect x="78" y="98" width="30" height="22" rx="2" fill={L} stroke={S} strokeWidth="1.1"/>
    <line x1="78" y1="108" x2="108" y2="108" stroke={S} strokeWidth="0.7"/>
    <circle cx="150" cy="108" r="3.5" fill={G} opacity="0.7"/>
    <circle cx="150" cy="123" r="3.5" fill={G} opacity="0.7"/>
    <path d="M55 155 Q110 168 165 155" stroke={G} strokeWidth="1.5" fill="none" opacity="0.4"/>
    <text x="110" y="168" textAnchor="middle" fill={G} fontSize="4.5" fontFamily="Montserrat" fontWeight="700" opacity="0.5">BC44</text>
  </svg>
)

const Palazzo = () => (
  <svg viewBox="0 0 240 320" fill="none" width="100%" height="100%">
    <rect x="70" y="18" width="100" height="20" rx="3" fill={F} stroke={S} strokeWidth="1.5"/>
    <rect x="108" y="12" width="24" height="14" rx="2" fill={G} opacity="0.65"/>
    <line x1="85" y1="18" x2="82" y2="10" stroke={S} strokeWidth="1.8"/>
    <line x1="100" y1="18" x2="98" y2="10" stroke={S} strokeWidth="1.8"/>
    <line x1="140" y1="18" x2="142" y2="10" stroke={S} strokeWidth="1.8"/>
    <line x1="155" y1="18" x2="158" y2="10" stroke={S} strokeWidth="1.8"/>
    <path d="M70 38 L20 305 L108 305 L120 38 Z" fill={F} stroke={S} strokeWidth="1.4"/>
    <path d="M170 38 L220 305 L132 305 L120 38 Z" fill={F} stroke={S} strokeWidth="1.4"/>
    <line x1="120" y1="38" x2="120" y2="305" stroke={S} strokeWidth="1.5"/>
    <path d="M70 38 Q45 120 20 305" stroke={G} strokeWidth="0.8" fill="none" opacity="0.3"/>
    <path d="M170 38 Q195 120 220 305" stroke={G} strokeWidth="0.8" fill="none" opacity="0.3"/>
    <path d="M78 160 L98 160 L98 190 L78 190 Z" fill={L} stroke={S} strokeWidth="1.1"/>
    <path d="M142 160 L162 160 L162 190 L142 190 Z" fill={L} stroke={S} strokeWidth="1.1"/>
    <text x="120" y="288" textAnchor="middle" fill={G} fontSize="4.5" fontFamily="Montserrat" fontWeight="700" opacity="0.5">BC44</text>
  </svg>
)

const Belt = () => (
  <svg viewBox="0 0 300 130" fill="none" width="100%" height="100%">
    <rect x="10" y="38" width="220" height="54" rx="6" fill={F} stroke={S} strokeWidth="1.5"/>
    {[0,1,2,3,4,5,6].map(i => (
      <line key={i} x1={25+i*28} y1="42" x2={25+i*28} y2="86" stroke={S} strokeWidth="1" opacity="0.4"/>
    ))}
    <rect x="230" y="26" width="60" height="78" rx="5" fill={L} stroke={G} strokeWidth="1.8"/>
    <rect x="238" y="40" width="44" height="50" rx="3" fill={F}/>
    <rect x="244" y="48" width="32" height="34" rx="2" fill="none" stroke={G} strokeWidth="1.2"/>
    <line x1="260" y1="48" x2="260" y2="82" stroke={G} strokeWidth="1.5" opacity="0.8"/>
    <circle cx="260" cy="65" r="5" fill={G} opacity="0.9"/>
    <path d="M10 65 Q15 54 10 42" stroke={G} strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M10 65 Q15 76 10 88" stroke={G} strokeWidth="1" fill="none" opacity="0.4"/>
    {[0,1,2].map(i => (
      <circle key={i} cx={50+i*30} cy="65" r="3.5" fill={G} opacity="0.6"/>
    ))}
  </svg>
)

const Cap = () => (
  <svg viewBox="0 0 280 210" fill="none" width="100%" height="100%">
    <path d="M40 130 Q140 45 240 130" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M40 130 Q45 160 140 165 Q235 160 240 130 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M30 158 Q140 180 250 158 L260 172 Q140 198 20 172 Z" fill={L} stroke={S} strokeWidth="1.3"/>
    <path d="M120 130 L122 165" stroke={S} strokeWidth="1.2"/>
    <path d="M158 130 L156 165" stroke={S} strokeWidth="1.2"/>
    <path d="M120 130 Q140 118 158 130" stroke={G} strokeWidth="1.5" fill="none" opacity="0.7"/>
    <rect x="125" y="78" width="30" height="22" rx="3" fill={L} stroke={G} strokeWidth="1.2"/>
    <text x="140" y="93" textAnchor="middle" fill={G} fontSize="7" fontFamily="Montserrat" fontWeight="900" opacity="0.85">44</text>
    <path d="M70 120 Q85 116 100 120" stroke={S} strokeWidth="0.8" fill="none" opacity="0.4"/>
    <path d="M180 120 Q195 116 210 120" stroke={S} strokeWidth="0.8" fill="none" opacity="0.4"/>
    <circle cx="140" cy="55" r="5" fill={G} opacity="0.4"/>
    <line x1="140" y1="55" x2="140" y2="48" stroke={G} strokeWidth="1.5" opacity="0.4"/>
    <path d="M20 172 Q140 200 260 172" stroke={G} strokeWidth="0.8" fill="none" opacity="0.3"/>
  </svg>
)

const Wallet = () => (
  <svg viewBox="0 0 280 180" fill="none" width="100%" height="100%">
    <rect x="20" y="20" width="240" height="140" rx="8" fill={F} stroke={S} strokeWidth="1.8"/>
    <line x1="140" y1="20" x2="140" y2="160" stroke={G} strokeWidth="1.5" opacity="0.5"/>
    <rect x="28" y="32" width="100" height="55" rx="4" fill={L} stroke={S} strokeWidth="1"/>
    <rect x="28" y="94" width="100" height="55" rx="4" fill={L} stroke={S} strokeWidth="1"/>
    <rect x="150" y="28" width="100" height="104" rx="6" fill={L} stroke={G} strokeWidth="1.2"/>
    <rect x="160" y="42" width="80" height="76" rx="4" fill={F}/>
    <text x="200" y="82" textAnchor="middle" fill={G} fontSize="10" fontFamily="Montserrat" fontWeight="900" opacity="0.6">BC44</text>
    <path d="M160 65 L240 65" stroke={S} strokeWidth="0.8"/>
    <path d="M160 88 L240 88" stroke={S} strokeWidth="0.8"/>
    <circle cx="90" cy="135" r="12" fill="none" stroke={G} strokeWidth="1" opacity="0.5"/>
    <text x="90" y="139" textAnchor="middle" fill={G} fontSize="7" fontFamily="Montserrat" fontWeight="700" opacity="0.6">RFID</text>
  </svg>
)

const Trench = () => (
  <svg viewBox="0 0 280 380" fill="none" width="100%" height="100%">
    <path d="M90 50 L58 38 L16 88 L50 118 L55 116 L55 340 L225 340 L225 116 L230 118 L264 88 L222 38 L190 50 Q140 32 90 50 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M90 50 L100 72 L140 82 L180 72 L190 50" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M100 72 Q140 90 180 72" stroke={G} strokeWidth="1.8" fill="none" opacity="0.7"/>
    <path d="M100 72 L80 50 L55 116" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M180 72 L200 50 L225 116" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="140" y1="82" x2="140" y2="340" stroke={S} strokeWidth="1" strokeDasharray="4 6" opacity="0.25"/>
    <rect x="88" y="96" width="48" height="10" rx="3" fill={G} opacity="0.5"/>
    {[130,155,180,210,240,270].map(y => (
      <circle key={y} cx="140" cy={y} r="4.5" fill={G} opacity="0.75"/>
    ))}
    <rect x="65" y="140" width="52" height="40" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <rect x="163" y="140" width="52" height="40" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <rect x="65" y="260" width="52" height="48" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <rect x="163" y="260" width="52" height="48" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <path d="M90 215 L190 215 L190 250 L90 250 Z" fill={L} stroke={G} strokeWidth="1.2" opacity="0.6"/>
    <rect x="128" y="225" width="24" height="14" rx="2" fill={G} opacity="0.6"/>
    <path d="M55 116 Q45 140 48 170" stroke={G} strokeWidth="1" fill="none" opacity="0.3"/>
    <path d="M225 116 Q235 140 232 170" stroke={G} strokeWidth="1" fill="none" opacity="0.3"/>
  </svg>
)

const Puffer = () => (
  <svg viewBox="0 0 280 300" fill="none" width="100%" height="100%">
    <path d="M92 54 L65 42 L22 82 L55 108 L60 106 L60 258 L220 258 L220 106 L225 108 L258 82 L215 42 L188 54 Q140 38 92 54 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    {[75,102,128,154,180,210,238].map(y => (
      <line key={y} x1="60" y1={y} x2="220" y2={y} stroke={G} strokeWidth="1.2" opacity="0.35"/>
    ))}
    {[75,102,128,154,180,210,238].map(y => (
      <line key={`l${y}`} x1="22" y1={y} x2="60" y2={y} stroke={G} strokeWidth="1.2" opacity="0.35"/>
    ))}
    {[75,102,128,154,180,210,238].map(y => (
      <line key={`r${y}`} x1="220" y1={y} x2="258" y2={y} stroke={G} strokeWidth="1.2" opacity="0.35"/>
    ))}
    <path d="M105 42 Q140 28 175 42 L172 54 Q140 40 108 54 Z" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="140" y1="54" x2="140" y2="258" stroke={G} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
    <rect x="88" y="108" width="44" height="36" rx="3" fill={L} stroke={S} strokeWidth="1"/>
    <rect x="148" y="108" width="44" height="36" rx="3" fill={L} stroke={S} strokeWidth="1"/>
    <circle cx="140" cy="82" r="5" fill={G} opacity="0.8"/>
    <circle cx="140" cy="102" r="5" fill={G} opacity="0.8"/>
  </svg>
)

const Overcoat = () => (
  <svg viewBox="0 0 270 380" fill="none" width="100%" height="100%">
    <path d="M88 52 L58 40 L16 85 L52 112 L57 110 L57 345 L213 345 L213 110 L218 112 L254 85 L212 40 L182 52 Q135 34 88 52 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M88 52 L102 75 L135 84 L168 75 L182 52" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M102 75 Q135 94 168 75" stroke={G} strokeWidth="2" fill="none" opacity="0.7"/>
    <path d="M102 75 L80 52 L57 110" fill={L} stroke={S} strokeWidth="1.2"/>
    <path d="M168 75 L190 52 L213 110" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="135" y1="84" x2="135" y2="345" stroke={S} strokeWidth="1" strokeDasharray="5 6" opacity="0.2"/>
    {[148,175,205].map(y => (
      <circle key={y} cx="135" cy={y} r="5.5" fill="none" stroke={G} strokeWidth="1.3" opacity="0.8"/>
    ))}
    <rect x="63" y="135" width="50" height="38" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <rect x="157" y="135" width="50" height="38" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <rect x="63" y="265" width="50" height="48" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <rect x="157" y="265" width="50" height="48" rx="3" fill={L} stroke={S} strokeWidth="1.1"/>
    <path d="M57 110 Q47 135 50 160" stroke={G} strokeWidth="0.9" fill="none" opacity="0.3"/>
    <path d="M213 110 Q223 135 220 160" stroke={G} strokeWidth="0.9" fill="none" opacity="0.3"/>
    <text x="135" y="328" textAnchor="middle" fill={G} fontSize="5" fontFamily="Montserrat" fontWeight="800" opacity="0.5">BRANDCLOTHS44</text>
  </svg>
)

const Hoodie = () => (
  <svg viewBox="0 0 260 300" fill="none" width="100%" height="100%">
    <path d="M90 60 L60 48 L18 88 L50 118 L56 116 L56 260 L204 260 L204 116 L210 118 L242 88 L200 48 L170 60 Q130 44 90 60 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M90 60 Q110 30 130 28 Q150 30 170 60 L165 70 Q148 62 130 60 Q112 62 95 70 Z" fill={L} stroke={S} strokeWidth="1.3"/>
    <path d="M95 70 Q112 80 130 78 Q148 80 165 70" stroke={G} strokeWidth="1.5" fill="none" opacity="0.6"/>
    <path d="M95 70 L90 60" stroke={S} strokeWidth="1.1"/>
    <path d="M165 70 L170 60" stroke={S} strokeWidth="1.1"/>
    <line x1="130" y1="78" x2="130" y2="180" stroke={G} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.45"/>
    <rect x="80" y="180" width="100" height="46" rx="4" fill={L} stroke={S} strokeWidth="1.2"/>
    <line x1="130" y1="180" x2="130" y2="226" stroke={S} strokeWidth="1" opacity="0.4"/>
    <circle cx="116" cy="203" r="7" fill={F} stroke={G} strokeWidth="1"/>
    <circle cx="144" cy="203" r="7" fill={F} stroke={G} strokeWidth="1"/>
    <line x1="91" y1="116" x2="91" y2="260" stroke={S} strokeWidth="0.8" strokeDasharray="3 6" opacity="0.25"/>
    <line x1="169" y1="116" x2="169" y2="260" stroke={S} strokeWidth="0.8" strokeDasharray="3 6" opacity="0.25"/>
    <path d="M56 116 Q46 135 48 158" stroke={G} strokeWidth="0.9" fill="none" opacity="0.3"/>
    <path d="M204 116 Q214 135 212 158" stroke={G} strokeWidth="0.9" fill="none" opacity="0.3"/>
    <text x="130" y="250" textAnchor="middle" fill={G} fontSize="4.5" fontFamily="Montserrat" fontWeight="800" opacity="0.55">BC44</text>
  </svg>
)

const Scarf = () => (
  <svg viewBox="0 0 300 200" fill="none" width="100%" height="100%">
    <path d="M20 50 Q80 30 150 45 Q220 60 280 40 L285 80 Q215 100 150 85 Q85 70 15 90 Z" fill={F} stroke={S} strokeWidth="1.5"/>
    <path d="M20 80 Q80 60 150 75 Q220 90 280 70" stroke={G} strokeWidth="1" fill="none" opacity="0.3"/>
    <path d="M20 95 Q80 75 150 90 Q220 105 280 85" stroke={G} strokeWidth="0.7" fill="none" opacity="0.2"/>
    {[30,50,70,90,110,130,150,170,190,210,230,250,270].map(x => (
      <line key={x} x1={x} y1="90" x2={x-4} y2="50" stroke={G} strokeWidth="0.6" opacity="0.2"/>
    ))}
    {[15,18,21,24,27].map((x,i) => (
      <line key={x} x1={x} y1={50+i*6} x2={x-10} y2={50+i*6+3} stroke={F} strokeWidth="3" strokeLinecap="round"/>
    ))}
    {[15,18,21,24,27].map((x,i) => (
      <line key={`r${x}`} x1={284-x+15} y1={40+i*6} x2={284-x+25} y2={40+i*6+3} stroke={F} strokeWidth="3" strokeLinecap="round"/>
    ))}
    {[15,18,21,24,27].map((x,i) => (
      <line key={`f${x}`} x1={x} y1={50+i*6} x2={x-10} y2={50+i*6+3} stroke={G} strokeWidth="0.8" strokeLinecap="round" opacity="0.7"/>
    ))}
    {[15,18,21,24,27].map((x,i) => (
      <line key={`rf${x}`} x1={284-x+15} y1={40+i*6} x2={284-x+25} y2={40+i*6+3} stroke={G} strokeWidth="0.8" strokeLinecap="round" opacity="0.7"/>
    ))}
    <path d="M80 65 Q150 55 220 68" stroke={G} strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="8 6"/>
    <path d="M100 80 Q150 70 200 78" stroke={G} strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5 8"/>
  </svg>
)

const icons = {
  tee: Tee, cargo: Cargo, bomber: Bomber, shirt: Shirt,
  dress: Dress, blazer: Blazer, crop: CropTop, palazzo: Palazzo,
  belt: Belt, cap: Cap, wallet: Wallet, trench: Trench,
  puffer: Puffer, overcoat: Overcoat, hoodie: Hoodie, scarf: Scarf,
}

export default function ClothingIcon({ type }) {
  const Icon = icons[type] || Tee
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <Icon />
    </div>
  )
}
