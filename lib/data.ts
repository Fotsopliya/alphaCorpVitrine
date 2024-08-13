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
        label: "Contact"
    }
]

export const boardMembers = [
    {
        image: Stephane,
        alt: "Germain Stephane",
        role: "co-fondateur, PDG, Ing. Logiciel",
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
        image: "/img/des2.jpg",
        title: "UX/UI Design",
        desc: "Le service en ux/ui design, ou Conception d'expérience utilisateur et conception d'interface utilisateur..."
    },
    {
        image: "/img/des1.jpg",
        title: "sites web & CMS",
        desc: "Notre service de site web et Content Management System est là pour vous..."
    },
    {
        image: "/img/des2.jpg",
        title: "Déveleppement d'application web et mobile",
        desc: "Le service de développement web et mobile est là pour concevoir, créer et..."
    },
    {
        image: "/img/des2.jpg",
        title: "Conception et Maintenance logiciel SAAS",
        desc: "Ce service est là pour concevoir, et maintenir vos..."
    },
    {
        image: "/img/des2.jpg",
        title: "Assistance 7j/7",
        desc: "Ce service est là pour répondre à vos..."
    }
]