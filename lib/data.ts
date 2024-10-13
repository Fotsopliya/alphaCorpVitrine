import boardImage from "@public/board.png"
import Pliya from "@public/img/team/pliya.jpg"
import Stephane from "@public/img/team/StephaneG.jpg"
import logo from "@public/logo.png"


export const navbarLinks = [
    {
        route: "/",
        label: "Acceuil"
    },
    {
        route: "/services",
        label: "Nos services"
    },
    {
        route: "/team",
        label: "Notre équipe dirigeante"
    },
    {
        route: "/contact",
        label: "Contactez-nous"
    }
]

export const boardMembers = [
    {
        image: Stephane,
        alt: "Germain Stephane",
        role: "co-fondateur, PDG, Dev web & app de bureau",
        name: "Germain Stephane"
    },
    {
        image: boardImage,
        alt: "Jiotang Rostov",
        role: "co-fondateur, UI/UX design, dev web & mobile",
        name: "Jiotang Rostov"
    },
    {
        image: boardImage,
        alt: "Noubissi Walter",
        role: "co-fondateur, design",
        name: "Noubissi Walter"
    },
    {
        image: Pliya,
        alt: "Njine Pliya",
        role: "co-fondateur, UI/UX design, dev web & mobile",
        name: "Njine Pliya"
    }

]

export const services = [
    {
        image: "/img/services/des2.jpg",
        title: "UX/UI Design",
        desc: "Le service en ux/ui design, ou Conception d'expérience utilisateur et conception d'interface utilisateur..."
    },
    {
        image: "/img/services/des1.jpg",
        title: "sites web & CMS",
        desc: "Notre service de site web et Content Management System est là pour vous..."
    },
    {
        image: "/img/services/des2.jpg",
        title: "Déveleppement d'application web et mobile",
        desc: "Le service de développement web et mobile est là pour concevoir, créer et..."
    },
    {
        image: "/img/services/des2.jpg",
        title: "Conception et Maintenance logiciel SAAS",
        desc: "Ce service est là pour concevoir, et maintenir vos..."
    },
    {
        image: "/img/services/des2.jpg",
        title: "Assistance 7j/7",
        desc: "Ce service est là pour répondre à vos..."
    }
]

export const blogPosts = [
    {
        "id": 1,
        "title": "Lancement du nouveau projet d'intelligence artificielle",
        "description": "Notre start-up a récemment lancé un projet innovant en intelligence artificielle pour automatiser les processus de service client.",
        "date": "10 Aout, 2024",
        "author": "Alice Dupont",
        "imageUrl": "/img/services/des2.jpg",
        "alt": "aiProject",
        "content": "Nous sommes fiers d'annoncer le lancement de notre tout nouveau projet d'intelligence artificielle, conçu pour automatiser et optimiser les processus de service client. Ce projet utilise des algorithmes avancés pour analyser les interactions client et fournir des réponses instantanées et personnalisées. L'équipe travaille sur ce projet depuis plusieurs mois et nous sommes ravis de partager les premiers résultats prometteurs.",
        "tags": ["Intelligence Artificielle", "Service Client", "Innovation"]
    },
    {
        "id": 2,
        "title": "Partenariat stratégique avec une entreprise de biotechnologie",
        "description": "Nous avons signé un partenariat stratégique avec BioTech Innovators pour développer des solutions technologiques dans le domaine de la santé.",
        "date": "28 juillet, 2024",
        "author": "Jean Martin",
        "imageUrl": "/img/services/des1.jpg",
        "alt": "partenaria",
        "content": "Dans le cadre de notre expansion dans le domaine de la santé, nous sommes ravis d'annoncer un partenariat stratégique avec BioTech Innovators, une entreprise de premier plan dans le domaine de la biotechnologie. Ce partenariat vise à combiner nos compétences en développement technologique avec leur expertise en biotechnologie pour créer des solutions innovantes destinées à améliorer les soins de santé.",
        "tags": ["Partenaria, santé, biotechnologie"]
    }
]