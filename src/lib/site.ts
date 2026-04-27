// ─── Business constants ───────────────────────────────────────────────────────
export const SITE = {
  name:        'Huella Eterna',
  tagline:     'Un tributo a la altura de su amor.',
  description: 'Bustos impresos en 3D en Bogotá: esculturas 3D personalizadas de mascotas pintadas a mano. Impresión 3D de alta resolución con acabados artísticos premium. 20cm de pura emoción. Envíos a toda Colombia.',
  keywords:    'bustos impresos en 3D Bogotá, impresión 3D mascotas Colombia, bustos 3D mascotas personalizados, figura 3D mascota Bogotá, busto mascota impresión 3D Colombia, memorial mascotas Bogotá impresión 3D, regalo impresión 3D mascota Colombia, escultura 3D mascota pintada a mano, Huella Eterna Bogotá',
  url:         'https://huellaeterna.co',
  locale:      'es_CO',
  city:        'Bogotá',
  country:     'Colombia',
  phone:       '+573504171477',
  whatsapp:    '573504171477',
  instagram:   'https://www.instagram.com/huella.eterna.co/',
  tiktok:      'https://www.tiktok.com/@huella.eterna.co',
} as const;

// ─── WhatsApp links ───────────────────────────────────────────────────────────
const WA_BASE = `https://wa.me/${SITE.whatsapp}`;

export const WA = {
  default:      `${WA_BASE}?text=${encodeURIComponent('Hola! Quiero cotizar un busto impreso en 3D para mi mascota 🐾')}`,
  memorial:     `${WA_BASE}?text=${encodeURIComponent('Hola, perdí a mi mascota y quisiera un busto 3D en su memoria 💔 ¿me pueden ayudar?')}`,
  gift:         `${WA_BASE}?text=${encodeURIComponent('Hola, quiero un busto 3D como regalo especial para alguien que ama a su mascota 🎁 ¿me cuentan más?')}`,
  alive:        `${WA_BASE}?text=${encodeURIComponent('Hola, quiero un busto 3D de mi mascota que está viva 🐾 es para tener en casa, ¿me cuentan más?')}`,
  quote:        `${WA_BASE}?text=${encodeURIComponent('Hola! Quiero cotizar un busto 3D de mi mascota 🐾')}`,
  escultorico:  `${WA_BASE}?text=${encodeURIComponent('Hola! Me interesa el busto Escultórico impreso en 3D con acabado mármol 🐾 ¿me cuentan más?')}`,
  retrato:      `${WA_BASE}?text=${encodeURIComponent('Hola! Me interesa el busto Retrato impreso en 3D con acabado policromado ✨ ¿me cuentan más?')}`,
} as const;

// ─── Content: story cards ─────────────────────────────────────────────────────
export const STORY_CARDS = [
  {
    emoji: '🌙',
    title: 'Memoriales en Bogotá',
    body:  'Honra su memoria con un busto impreso en 3D que capture su mirada exacta. Un tributo solemne hecho a mano para mantener su esencia siempre cerca.',
    waKey: 'memorial' as const,
  },
  {
    emoji: '🎁',
    title: 'El regalo definitivo',
    body:  'El regalo más especial: un busto impreso en 3D personalizado de 20cm. Una obra artesanal única que ninguna otra tienda puede igualar.',
    waKey: 'gift' as const,
  },
  {
    emoji: '🏠',
    title: 'Esculturas en vida',
    body:  'Captura a tu compañero hoy en un busto impreso en 3D pintado a mano. Cada detalle de su pelaje y mirada, inmortalizado para siempre.',
    waKey: 'alive' as const,
  },
] as const;

// ─── Content: process steps ───────────────────────────────────────────────────
export const STEPS = [
  {
    emoji: '📸',
    title: 'Captura de Esencia',
    body:  'Solo necesitamos 3-5 fotos de tu mascota. Iniciamos con un abono del 50% para comenzar la escultura digital.',
  },
  {
    emoji: '🎨',
    title: 'Escultura Digital 3D',
    body:  'Nuestros artistas modelan cada rasgo en 3D digitalmente. Recibes una vista previa renderizada para tu aprobación total.',
  },
  {
    emoji: '🖨️',
    title: 'Impresión 3D Artesanal',
    body:  'Imprimimos en 3D en alta resolución con filamento premium PETG. Luego aplicamos acabados artísticos pintados a mano.',
  },
  {
    emoji: '🚚',
    title: 'El Reencuentro',
    body:  'Enviamos tu busto 3D asegurado a toda Colombia. Una pieza de 20cm lista para ocupar el lugar de honor que merece.',
  },
] as const;

// ─── Content: product finishes ────────────────────────────────────────────────
export const FINISHES = [
  {
    name:        'Escultórico',
    subtitle:    'Acabado Clásico',
    price:       '$120.000',
    priceNum:    '120000',
    currency:    'COP',
    description: 'Impreso en 3D con filamento premium, acabado mármol o bronce. La sobriedad elegante en una pieza eterna de 20cm, hecha a mano en Bogotá.',
    features:    ['Impresión 3D alta resolución', 'Acabado Mármol o Bronce', 'Altura: 20 cm', 'Aprobación de diseño previa'],
    highlight:   false,
    highlightLabel: '',
    waKey:       'escultorico' as const,
    img:         '/images/productos/busto-3d-marmol-scottish-terrier-lola-colombia.jpeg',
    imgAlt:      'Busto 3D impreso en acabado mármol de Scottish Terrier — Huella Eterna Bogotá',
  },
  {
    name:        'Retrato',
    subtitle:    'Obra Maestra',
    price:       '$280.000',
    priceNum:    '280000',
    currency:    'COP',
    description: 'Impresión 3D de alta resolución con pintura policromada a mano. Capturamos la mirada real, el pelaje y cada detalle único de tu mascota.',
    features:    ['Impresión 3D máxima resolución', 'Base y letras a elección del cliente', 'Pintura policromada a mano', 'Aprobación de diseño previa'],
    highlight:   true,
    highlightLabel: 'La más elegida',
    waKey:       'retrato' as const,
    img:         '/images/productos/busto-3d-policromado-gato-dushi-colombia.jpeg',
    imgAlt:      'Busto 3D impreso con pintura policromada a mano de gato — Huella Eterna Colombia',
  },
] as const;

// ─── Content: testimonials ────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:  '"Cuando abrí la caja y vi el busto de Lola... me quebré. Es idéntica. Las orejas paradas, su expresión exacta. Está en la sala y la miro todos los días. Gracias."',
    author: 'María C.',
    city:   'Bogotá',
    detail: 'Busto 3D mármol · Lola',
    rating: '5',
    date:   '2025-09-15',
  },
  {
    quote:  '"Lo pedí de regalo para mi pareja. Cuando vio el busto 3D de Verde no podía creerlo. Literalmente lloró. Capturaron su mirada perfectamente. Es el regalo más especial que le he dado."',
    author: 'Andrés M.',
    city:   'Medellín',
    detail: 'Busto 3D bronce · Verde',
    rating: '5',
    date:   '2025-10-22',
  },
  {
    quote:  '"El policromado de Morfeo quedó espectacular, hasta la lengua. Todos los que llegan a casa preguntan dónde lo compramos. La atención fue increíble desde el primer mensaje."',
    author: 'Valentina R.',
    city:   'Cali',
    detail: 'Busto 3D policromado · Morfeo',
    rating: '5',
    date:   '2025-11-08',
  },
] as const;

// ─── Content: funnel CTAs ─────────────────────────────────────────────────────
export const FUNNEL_CTAS = [
  {
    label:  'Mi mascota ya no está',
    desc:   'Un busto impreso en 3D y pintado a mano para que su recuerdo siempre esté presente en tu hogar.',
    emoji:  '💔',
    cta:    'Quiero este recuerdo',
    waKey:  'memorial' as const,
  },
  {
    label:  'Quiero darlo de regalo',
    desc:   'El regalo más único: un busto impreso en 3D personalizado. Nadie más puede dar algo así.',
    emoji:  '🎁',
    cta:    'Cotizar el regalo',
    waKey:  'gift' as const,
  },
  {
    label:  'Mi mascota está viva',
    desc:   'Inmortaliza a tu compañero hoy en un busto 3D pintado a mano, con cada detalle de su pelaje.',
    emoji:  '🐾',
    cta:    'Quiero el busto 3D',
    waKey:  'alive' as const,
  },
] as const;

// ─── Content: price features ──────────────────────────────────────────────────
export const PRICE_FEATURES = [
  '🖨️ Impresión 3D alta resolución',
  '📏 Gran tamaño: 20 cm de alto',
  '💳 Pago cómodo: 50% inicio / 50% entrega',
  '🚚 Envíos asegurados a todo Colombia',
] as const;
