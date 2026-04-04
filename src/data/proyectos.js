import biblioteca from '@/assets/biblioteca_udea.webp'
import resena from '@/assets/resena_historica.webp'

export const proyectos = {
    educativo: {
        nombre: 'Sitio web educativo',
        etiqueta: 'informacion institucional',
        descripcion: 'Diseño claro y fácil de entender, pensado para que los visitantes encuentren la información sin esfuerzo.',
        imagen: biblioteca,
        alt: 'Proyecto educativo',
        url: 'https://bibliotecaudea.netlify.app/'
    },
    informativo: {
        nombre: 'Pagina informativa escolar',
        etiqueta: 'Contenido y navegacion clara',
        descripcion: 'Estructura simple que genera confianza y facilita que los visitantes tomen acción.',
        imagen: resena,
        alt: 'Proyecto informativo',
        url: 'https://resena-historica.netlify.app/'
    }
}

export const comentarios = {
    cliente1: {
        nombre: 'Carlos Méndez',
        etiqueta: 'Emprendedor Independiente',
        texto: '"Me ayudó a tener mi primera página web. Ahora mis clientes pueden encontrarme más fácil y se ve mucho más profesional."'
    },
    cliente2: {
        nombre: 'Lucía Rivas',
        etiqueta: 'Cliente',
        texto: '"No sabía nada de páginas web y se encargaron de todo. Fue más fácil de lo que esperaba."'
    }
}