export const steps = [
  {
    selector: '[data-search]',
    content: 'Empecemos. Aquí puedes realizar una búsqueda acorde a tu ubicación en el mapa.',
  },
  {
    selector: '[data-select]',
    content:
      'Aquí puedes filtrar tus búsquedas por establecimiento. Por defecto, aparecerá cualquier tipo (hoteles, supermercados, etc).',
  },
  {
    selector: 'img[src="https://maps.gstatic.com/mapfiles/transparent.png"]',
    content:
      'Aquí estás tú. El círculo representa tu zona y muestra los 20 lugares cercanos a ti. Puedes mover el círculo arrastrándolo para cargar nuevos lugares. También puedes hacer clic en un icono para obtener más información.',
  },
  {
    selector: '[data-filter]',
    content:
      'Los iconos están en color azul por defecto, lo que significa que su accesibilidad es desconocida.',
  },
  {
    selector: '[data-lugar=accesible]',
    content:
      'Al hacer clic en los iconos y nuevos lugares, se pondrán de color verde si son accesibles.',
  },
  {
    selector: '[data-lugar=no-accesible]',
    content:
      'Al hacer clic en los iconos y nuevos lugares, se pondrán de color rojo si no son accesibles.',
  },
  {
    selector: '[data-filter]',
    content: 'Al hacer clic nuevamente, se desactivará el filtro.',
  },
  {
    selector: '[data-feedback]',
    content:
      'Esto es lo básico. Puedes seguir probando y, si tienes alguna mejora o consulta, siéntete libre de dar tu feedback.',
  },
];
