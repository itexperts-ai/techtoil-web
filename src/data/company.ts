/** Techtoil Infosol Private Limited — public company & contact details */

export const company = {
  legalName: 'Techtoil Infosol Private Limited',
  brandName: 'Techtoil',
  cin: 'U62013DL2023PTC413696',
  email: 'contact@techtoil.in',
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
    // Exact pin near 55 Westend Marg, Saidulajab (same building cluster)
    lat: 28.519608,
    lng: 77.201959,
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
    lat: 28.6271,
    lng: 77.3649,
  },
  assessmentSla: 'We respond within 1 business day with a scoped next step.',
} as const

export function mapsEmbedUrl(office: {
  lat: number
  lng: number
  mapsQuery: string
}) {
  const label = encodeURIComponent(office.mapsQuery)
  return `https://maps.google.com/maps?q=${office.lat},${office.lng}(${label})&ll=${office.lat},${office.lng}&z=17&output=embed&iwloc=A`
}

export function mapsOpenUrl(office: {
  lat: number
  lng: number
  mapsQuery: string
}) {
  return `https://www.google.com/maps/search/?api=1&query=${office.lat}%2C${office.lng}`
}

export function mapsDirectionsUrl(office: {
  lat: number
  lng: number
}) {
  return `https://www.google.com/maps/dir/?api=1&destination=${office.lat}%2C${office.lng}`
}
