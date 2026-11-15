/** Techtoil Infosol Private Limited — public company & contact details */

export const company = {
  legalName: 'Techtoil Infosol Private Limited',
  brandName: 'Techtoil',
  cin: 'U62013DL2023PTC413696',
  email: 'contact@techtoil.com',
  phones: [
    { label: 'Primary', display: '+91 80 772 795 65', href: 'tel:+918077279565' },
    { label: 'Alternate', display: '+91 79825 77818', href: 'tel:+917982577818' },
  ],
  registeredOffice: {
    label: 'Registered Office',
    lines: [
      '55, 2nd Floor, Westend Marg',
      'Saidullajab, Gadaipur',
      'South West Delhi, New Delhi',
      'Delhi 110030, India',
    ],
    singleLine:
      '55, 2nd Floor, Westend Marg, Saidullajab, Gadaipur, South West Delhi, New Delhi, Delhi 110030, India',
    mapsQuery:
      '55, 2nd Floor, Westend Marg, Saidullajab, Gadaipur, New Delhi, Delhi 110030, India',
  },
  operationsOffice: {
    label: 'Operations',
    lines: [
      'Block A, Industrial Area',
      'Sector 62, Noida',
      'Uttar Pradesh 201309, India',
    ],
    singleLine:
      'Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India',
    mapsQuery: 'Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309',
  },
} as const

export function mapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`
}

export function mapsOpenUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
