import type { Metadata } from "next";
import { ServiceEditorial } from "@/components/service-editorial";
import { pageMetadata } from "@/lib/site";
export const metadata: Metadata = pageMetadata("Réflexologie plantaire et palmaire à Avize", "Découvrez la réflexologie plantaire et palmaire proposée par Emma Peynet à Avize, près d'Épernay.", "/reflexologie");
function ServiceDetail(props: Record<string, unknown>) {
    void props;
    return <ServiceEditorial
        path="/reflexologie"
        breadcrumbLabel="Réflexologie"
        eyebrow="Réflexologie plantaire & palmaire"
        title="Réflexologie plantaire et palmaire à Avize"
        heroLead="Accordez-vous une parenthèse de détente, à l’écoute de votre corps."
        heroImage="/images/reflexologie.webp"
        heroImageAlt="Gestes de réflexologie plantaire réalisés sur un pied"
        introduction={[
            "La réflexologie est une pratique manuelle de bien-être qui repose sur la stimulation de zones spécifiques situées notamment sur les pieds et les mains.",
            "Dans un quotidien parfois rythmé par le stress, les responsabilités et le manque de temps pour soi, elle offre l’occasion de ralentir, de relâcher les tensions ressenties et de profiter d’un moment de relaxation.",
            "Emma Peynet vous accueille à Avize, près d’Épernay, pour vous faire découvrir cette approche dans un cadre chaleureux et attentif.",
        ]}
        introductionCta="Poser une question à Emma"
        principle={{
            eyebrow: "Comprendre la pratique",
            title: "Qu’est-ce que la réflexologie ?",
            paragraphs: [
                "La pratique s’appuie sur une cartographie traditionnelle de zones dites « réflexes ». Des pressions et gestes manuels sont appliqués sur certaines parties du pied ou de la main, avec une intensité ajustée au confort de la personne.",
                "Selon les principes traditionnels de la réflexologie, ces zones seraient mises en correspondance avec différentes parties du corps. Ces correspondances supposées avec les organes ne sont toutefois pas scientifiquement établies.",
                "La réflexologie est donc présentée ici comme une pratique complémentaire de détente et de bien-être. Elle ne pose pas de diagnostic, ne traite pas une maladie et ne remplace pas une consultation ou un suivi médical.",
            ],
            note: "L’objectif annoncé est de proposer un moment de relaxation et d’écoute des sensations, sans promesse thérapeutique ni résultat garanti.",
        }}
        featureBlocks={[
            {
                eyebrow: "Réflexologie plantaire",
                title: "Vos pieds méritent aussi toute votre attention.",
                paragraphs: [
                    "La réflexologie plantaire concentre le travail manuel sur différentes zones du pied. Les gestes et les pressions sont adaptés au ressenti, dans une recherche de confort et de détente.",
                    "Au-delà de la technique, la séance peut devenir une expérience sensorielle : le rythme ralentit, l’attention revient vers le corps et un temps est enfin réservé à soi-même.",
                ],
                image: "/images/soin-emma.webp",
                imageAlt: "Séance de réflexologie plantaire dans l’univers Parenth’Emma",
                imagePosition: "center 35%",
            },
            {
                eyebrow: "Réflexologie palmaire",
                title: "Une autre façon de retrouver un moment de calme.",
                paragraphs: [
                    "La réflexologie palmaire repose sur un travail doux réalisé sur les mains. Elle offre une autre manière de découvrir la pratique, dans une zone facile d’accès et familière.",
                    "Elle peut constituer une alternative à la réflexologie plantaire selon les préférences, la sensibilité et le confort de chacun. Le choix de la zone travaillée se discute simplement avec Emma avant la séance.",
                ],
                reverse: true,
            },
        ]}
        cards={{
            eyebrow: "Pourquoi la découvrir ?",
            title: "Quatre invitations à ralentir.",
            intro: "La réflexologie ne promet pas de traiter un trouble : elle propose avant tout un cadre attentif pour vivre un temps de détente.",
            items: [
                { title: "S’accorder une pause", text: "Mettre le quotidien entre parenthèses et réserver un moment à son propre bien-être." },
                { title: "Favoriser la relaxation", text: "Profiter de gestes manuels ajustés dans une atmosphère calme et respectueuse." },
                { title: "Se recentrer sur ses sensations", text: "Porter une attention nouvelle à son ressenti, sans objectif de performance." },
                { title: "Être accompagné avec attention", text: "Bénéficier d’un échange personnalisé et d’une pratique adaptée à son confort." },
            ],
        }}
        middleCta={{ title: "Vous hésitez entre les pieds et les mains ?", text: "Un échange avec Emma permet de parler de vos préférences et de choisir l’approche qui vous semble la plus confortable.", buttonLabel: "Échanger avec Emma" }}
        journey={{
            eyebrow: "Comment se déroule une séance ?",
            title: "Un rendez-vous en trois temps.",
            intro: "Le rendez-vous peut s’organiser comme une progression simple, laissant une vraie place à l’écoute et au confort.",
            steps: [
                { title: "Un temps d’échange", text: "La séance peut commencer par une conversation autour de votre demande, de vos préférences et de ce que vous souhaitez vivre pendant ce moment." },
                { title: "Une séance adaptée", text: "Les gestes, la pression et la zone travaillée peuvent être ajustés à votre confort et à votre ressenti." },
                { title: "Un moment de retour", text: "Un temps calme peut permettre de partager vos sensations et de terminer le rendez-vous sans précipitation." },
            ],
            confirmation: "Ces étapes sont proposées à titre indicatif et doivent être confirmées avec Emma lors de la prise de contact.",
        }}
        faq={[
            { question: "Faut-il une préparation particulière ?", answer: "Aucune préparation précise n’est annoncée. Une tenue dans laquelle vous vous sentez à l’aise peut être privilégiée ; Emma pourra vous indiquer les modalités pratiques lors du rendez-vous." },
            { question: "Quelle différence entre réflexologie plantaire et palmaire ?", answer: "La première se concentre sur les pieds, la seconde sur les mains. Le choix dépend surtout de vos préférences et de votre confort." },
            { question: "La séance est-elle douloureuse ?", answer: "La pratique est présentée dans une recherche de confort. Si une pression vous semble désagréable, il est important de le signaler afin qu’elle puisse être adaptée." },
            { question: "Peut-on choisir la zone travaillée ?", answer: "Vos préférences peuvent être évoquées avec Emma. Le choix entre les pieds et les mains est à confirmer avec elle selon les modalités de la séance." },
            { question: "Comment prendre rendez-vous ?", answer: "Vous pouvez utiliser la page contact, envoyer un e-mail ou appeler Emma au 06 95 32 18 22." },
        ]}
        finalCta={{ eyebrow: "Votre parenthèse", title: "Et si vous preniez enfin un moment pour vous ?", text: "Emma vous répond directement pour préciser votre demande et les modalités d’un rendez-vous à Avize.", buttonLabel: "Contacter Emma" }}
        exclude="/reflexologie"
    />;
}
export default function Page() { return <ServiceDetail eyebrow="Réflexologie plantaire & palmaire" title={<>Retrouver de l&apos;espace, <em>du bout des pieds.</em></>} intro="Emma Peynet propose des séances de réflexologie à Avize, près d'Épernay : une pratique manuelle douce qui invite à la relaxation et à la détente." image="/images/reflexologie.webp" imageAlt="Mains pratiquant une séance de réflexologie plantaire" sectionTitle={<>Qu&apos;est-ce que la <em>réflexologie ?</em></>} paragraphs={["La réflexologie est une pratique manuelle de bien-être qui s'appuie sur des pressions précises exercées sur certaines zones des pieds ou des mains. La séance offre un temps de calme pour ralentir et porter attention à ses sensations.", "L'approche ne pose pas de diagnostic. Elle est adaptée à votre confort, à votre demande et aux éléments partagés lors de l'échange initial."]} quote="Créer les conditions d'une vraie pause : un cadre tranquille, une écoute présente et un toucher respectueux." detailSections={[{ title: "Réflexologie plantaire", text: "Le travail s'effectue sur les pieds par des gestes et pressions adaptés. Vous restez habillé·e et confortablement installé·e." }, { title: "Réflexologie palmaire", text: "La séance se concentre sur les mains. Cette modalité peut être privilégiée selon vos préférences et votre confort." }, { title: "Relaxation & détente", text: "La séance est conçue comme une parenthèse attentive, sans promesse médicale ni résultat standardisé." }, { title: "Approche personnalisée", text: "L'intensité, le rythme et les zones travaillées sont ajustés en fonction de vos échanges avec Emma." }]} steps={[{ title: "Échanger", text: "Nous commençons par faire le point sur votre demande, vos habitudes et vos attentes." }, { title: "S'installer", text: "La séance se déroule habillé·e, confortablement installé·e, et s'adapte à votre ressenti." }, { title: "Revenir à soi", text: "Un dernier temps permet d'accueillir les sensations et de terminer sans précipitation." }]} pillars={[{ title: "Plantaire", text: "Un travail doux et précis au niveau des pieds." }, { title: "Palmaire", text: "Une approche par les mains, selon vos besoins et votre confort." }, { title: "Sur mesure", text: "Une séance ajustée, sans protocole rigide." }]} videoTitle="Découvrir la réflexologie avec Emma" practiceImage={{ src: "/images/soin-emma.webp", alt: "Emma Peynet pendant une séance de réflexologie plantaire au cabinet", title: "Le geste, l’écoute et la présence.", text: "Cette photographie montre Emma dans sa pratique : une séance attentive, dans un cadre chaleureux, où chaque geste est adapté à la personne accompagnée." }} faq={[{ question: "Faut-il prévoir une tenue particulière ?", answer: "Une tenue souple et confortable est préférable. La séance de réflexologie se déroule habillé·e." }, { question: "Comment choisir entre plantaire et palmaire ?", answer: "Ce choix se fait avec Emma selon votre demande, vos préférences et votre confort." }, { question: "La réflexologie remplace-t-elle un suivi médical ?", answer: "Non. Il s'agit d'une pratique de bien-être complémentaire qui ne remplace ni diagnostic, ni traitement, ni suivi médical." }, { question: "Où les séances sont-elles proposées ?", answer: "Selon les modalités convenues avec Emma : au cabinet à Avize, à domicile, en entreprise ou en maison senior." }]} note="La réflexologie est une pratique de bien-être complémentaire. Elle ne remplace ni une consultation médicale, ni un diagnostic, ni un traitement." exclude="/reflexologie"/>; }
