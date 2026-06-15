// Partner / participant logos. Files live in public/partners/.
// Display names are derived for alt text.
export const partnerLogos: string[] = [
  'a-pizza-nero.png',
  'albino-armani.png',
  'angelucci-trasporti.png',
  'bhb.png',
  'bioagro.png',
  'campo-d-oro.png',
  'caseificio-gallone.png',
  'cesar-arredamenti.png',
  'ciavolino.png',
  'ciprogest.png',
  'crich.png',
  'csqa.png',
  'eureka.png',
  'farmo.png',
  'fattorie-gennargentu.png',
  'fb-berton.png',
  'fox.png',
  'grissitalia.png',
  'henry-glass.png',
  'intermizoo.png',
  'italpepe.png',
  'kleis-generale.png',
  'lzo.png',
  'mancuso-group-sar-consulting.png',
  'manuel-caffe.png',
  'oleodinamiche-marchesini.png',
  'omnia-link.png',
  'oropan.png',
  'pagnan.png',
  'pasta-lori.png',
  'point-srl.png',
  'quality-food-spa.png',
  'reploid.png',
  'reynaers.png',
  'rhizolife.png',
  'salviani.png',
  'socado.png',
  'studio-heussen.png',
  'value-partners.png',
  'vcr.png',
  'veneto-agrocoltura.png',
  'zangrando.png',
];

export function logoAlt(file: string): string {
  return file
    .replace(/\.png$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
