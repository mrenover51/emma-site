import type { Metadata } from "next";
import { ServiceEditorial } from "@/components/service-editorial";
import { pageMetadata } from "@/lib/site";
export const metadata: Metadata = pageMetadata("Coaching en nutrition à Avize, près d’Épernay", "Coaching en nutrition avec Emma Peynet à Avize, près d’Épernay : des repères alimentaires personnalisés, progressifs et sans culpabilité.", "/coaching-nutrition");
function ServiceDetail(props: Record<string, unknown>) {
    void props;
    return <ServiceEditorial
        path="/coaching-nutrition"
        breadcrumbLabel="Coaching en nutrition"
        eyebrow="Coaching en nutrition"
        title="Coaching en nutrition à Avize, près d’Épernay"
        heroLead="Retrouvez le plaisir de manger à votre rythme, sans pression ni culpabilité."
        heroImage="/images/coaching-nutrition.webp"
        heroImageAlt="Fruits, noix et carnet pour réfléchir à ses habitudes alimentaires"
        introduction={[
            "Entre les journées chargées, les habitudes installées et les nombreuses informations parfois contradictoires sur l’alimentation, il n’est pas toujours facile de savoir par où commencer.",
            "Le coaching en nutrition propose un accompagnement pour mieux comprendre ses habitudes alimentaires, définir des objectifs réalistes et avancer progressivement vers une organisation qui correspond à son quotidien.",
            "L’approche proposée par Emma Peynet à Avize repose sur l’écoute, la simplicité et la recherche d’un équilibre durable, à proximité d’Épernay et de la Côte des Blancs.",
        ]}
        introductionCta="Parler de mon quotidien"
        principle={{
            eyebrow: "Comprendre le rôle",
            title: "Qu’est-ce qu’un coach en nutrition ?",
            paragraphs: [
                "Le coaching en nutrition accompagne une réflexion générale sur les habitudes alimentaires : organisation des repas, variété, préférences, contraintes et objectifs du quotidien. Il s’agit d’un conseil non médical, destiné à rendre les choix plus lisibles et plus faciles à intégrer.",
                "Il se distingue du suivi diététique réalisé par un professionnel de santé réglementé. Le titre de diététicien correspond à une profession encadrée, et Emma n’est pas présentée sur ce site comme diététicienne ni comme nutritionniste diplômée.",
                "Les besoins liés à une pathologie, une allergie, un trouble du comportement alimentaire, une prescription ou une prise en charge clinique doivent être confiés à un médecin, un diététicien ou un autre professionnel de santé qualifié.",
            ],
            note: "Le coaching ne pose pas de diagnostic, ne prescrit pas de régime thérapeutique et ne remplace pas un suivi médical ou diététique lorsque celui-ci est nécessaire.",
        }}
        featureBlocks={[
            {
                eyebrow: "Des repères concrets",
                title: "Une alimentation adaptée à votre vraie vie.",
                paragraphs: [
                    "Manger de façon plus équilibrée ne demande pas nécessairement de tout transformer. La réflexion peut commencer par la variété alimentaire, l’organisation des repas et les habitudes qui structurent déjà les journées.",
                    "Les préférences, le plaisir de manger, la convivialité et les contraintes pratiques ont leur place. La flexibilité permet de construire des objectifs progressifs, suffisamment simples pour trouver leur place dans la durée.",
                ],
                image: "/images/naturopathie-nutrition.webp",
                imageAlt: "Aliments variés, plantes et carnet dans une ambiance naturelle",
                imagePosition: "center",
            },
            {
                eyebrow: "Sans culpabilité",
                title: "Faire évoluer ses habitudes sans multiplier les interdictions.",
                paragraphs: [
                    "Une démarche alimentaire durable n’a pas besoin de reposer sur une liste rigide d’aliments autorisés ou interdits. Elle peut au contraire s’appuyer sur l’observation, la souplesse et des choix adaptés à la situation de chacun.",
                    "L’écoute des goûts, du mode de vie, du budget, de l’organisation et des contraintes personnelles permet de chercher des pistes réalistes. Le but n’est ni la perfection ni un résultat garanti, mais une progression qui reste vivable et personnelle.",
                ],
                reverse: true,
            },
        ]}
        cards={{
            eyebrow: "Pourquoi se faire accompagner ?",
            title: "Retrouver de la simplicité dans son assiette.",
            intro: "L’accompagnement crée un espace pour comprendre ce qui fonctionne déjà et choisir ce qui mérite réellement d’évoluer.",
            items: [
                { title: "Faire le point", text: "Observer ses habitudes actuelles et identifier les situations qui posent question." },
                { title: "Simplifier son organisation", text: "Chercher des repères compatibles avec les journées, les envies et les contraintes." },
                { title: "Sortir des injonctions", text: "Prendre du recul face aux règles contradictoires et éviter la culpabilisation." },
                { title: "Avancer à son rythme", text: "Définir des objectifs accessibles et les ajuster selon son expérience." },
            ],
        }}
        middleCta={{ title: "Votre alimentation doit pouvoir vivre avec vous.", text: "Un premier échange permet de présenter vos habitudes et de vérifier si le coaching proposé correspond à vos attentes.", buttonLabel: "Contacter Emma" }}
        journey={{
            eyebrow: "Comment se déroule le coaching ?",
            title: "Du premier échange aux ajustements du quotidien.",
            intro: "Le coaching peut être envisagé comme un chemin progressif, construit à partir de ce que vous vivez réellement.",
            steps: [
                { title: "Premier échange", text: "Vous pouvez présenter votre situation, vos questions et ce qui motive votre démarche." },
                { title: "Habitudes et attentes", text: "Les repas, l’organisation, les goûts et les contraintes peuvent être observés sans jugement." },
                { title: "Objectifs accessibles", text: "Une ou plusieurs priorités réalistes peuvent être définies avec Emma." },
                { title: "Conseils pratiques", text: "Des pistes simples peuvent être proposées pour faciliter leur intégration dans le quotidien." },
                { title: "Suivi éventuel", text: "Si cela est pertinent, un nouveau point peut permettre d’ajuster les repères à partir de votre expérience." },
            ],
            confirmation: "Ces étapes sont présentées à titre indicatif. Leur contenu, leur ordre et l’éventualité d’un suivi doivent être confirmés directement avec Emma.",
        }}
        faq={[
            { question: "Faut-il suivre un régime ?", answer: "Non. Le coaching est présenté comme une réflexion sur les habitudes alimentaires, sans régime miracle, interdictions systématiques ni promesse de perte de poids." },
            { question: "Peut-on conserver ses aliments préférés ?", answer: "Les goûts et le plaisir de manger font partie des éléments à prendre en compte. Les conseils cherchent à s’adapter à votre réalité plutôt qu’à imposer un modèle unique." },
            { question: "Le coaching est-il personnalisé ?", answer: "Oui, l’objectif est de partir de vos habitudes, de vos contraintes et de vos objectifs. Les modalités exactes sont à confirmer avec Emma." },
            { question: "Quelle différence avec un diététicien ?", answer: "Le diététicien est un professionnel de santé réglementé, compétent notamment pour les prises en charge diététiques. Le coaching proposé ici reste un accompagnement général et non médical des habitudes alimentaires." },
            { question: "Comment prendre rendez-vous ?", answer: "Vous pouvez contacter Emma depuis le formulaire, lui écrire ou l’appeler au 06 95 32 18 22. Aucun système de réservation automatique n’est utilisé." },
        ]}
        finalCta={{ eyebrow: "Avancer autrement", title: "Et si une relation plus sereine avec votre alimentation commençait ici ?", text: "Présentez simplement votre demande à Emma pour vérifier si cet accompagnement correspond à votre situation.", buttonLabel: "Prendre contact" }}
        exclude="/coaching-nutrition"
    />;
}
export default function Page() { return <ServiceDetail eyebrow="Coaching en nutrition" title={<>Manger avec plus de repères, <em>moins de pression.</em></>} intro="Un accompagnement alimentaire bienveillant à Avize pour faire évoluer ses habitudes avec souplesse, cohérence et plaisir, selon ses propres objectifs." image="/images/coaching-nutrition.webp" imageAlt="Fruits, noix, tisane et carnet pour un accompagnement en nutrition" sectionTitle={<>Avancer sans <em>injonctions.</em></>} paragraphs={["Le coaching en nutrition part de ce que vous mangez réellement, de vos goûts, de votre organisation et de vos contraintes. Il ne s'agit pas d'imposer un modèle unique, mais de retrouver des repères plus lisibles.", "Ensemble, les intentions générales deviennent des pistes concrètes : organisation, composition des repas, écoute des sensations et évolution progressive des habitudes."]} quote="Une alimentation équilibrée peut rester vivante, conviviale et profondément personnelle." detailSections={[{ title: "Objectifs individuels", text: "Clarifier ce que vous souhaitez faire évoluer et choisir une priorité réaliste pour votre quotidien." }, { title: "Habitudes alimentaires", text: "Observer les rythmes, l'organisation et les choix actuels sans jugement ni logique punitive." }, { title: "Conseils personnalisés", text: "Construire des repères concrets en tenant compte de vos goûts, contraintes et possibilités." }, { title: "Progression durable", text: "Ajuster les pistes au fil de l'accompagnement, sans régime miracle ni résultat garanti." }]} steps={[{ title: "Observer", text: "Nous regardons vos habitudes actuelles sans jugement et identifions vos besoins." }, { title: "Prioriser", text: "Nous choisissons un objectif clair et accessible plutôt qu'une longue liste de règles." }, { title: "Ajuster", text: "Les pistes évoluent avec votre expérience, vos contraintes et vos retours." }]} pillars={[{ title: "Pratique", text: "Des idées applicables dans la vraie vie." }, { title: "Souple", text: "Aucune recherche de perfection ni logique punitive." }, { title: "Personnel", text: "Vos goûts et votre contexte guident l'accompagnement." }]} videoTitle="Découvrir le coaching en nutrition" faq={[{ question: "S'agit-il d'un régime ?", answer: "Non. L'accompagnement vise à retrouver des repères adaptés à votre quotidien, sans régime miracle, promesse de perte de poids ou résultat garanti." }, { question: "Comment définir mon objectif ?", answer: "Emma vous aide à formuler une priorité personnelle, concrète et compatible avec vos contraintes actuelles." }, { question: "Cet accompagnement remplace-t-il une consultation diététique ou médicale ?", answer: "Non. En cas de pathologie, trouble alimentaire, allergie ou besoin clinique, adressez-vous au professionnel de santé compétent." }, { question: "Comment se déroule le suivi ?", answer: "Après un premier état des lieux, des pistes sont choisies ensemble puis ajustées selon votre expérience et vos retours." }]} note="Le coaching proposé relève du bien-être et de l'éducation alimentaire. Toute pathologie, allergie ou situation clinique nécessite l'avis et le suivi du professionnel de santé compétent." exclude="/coaching-nutrition"/>; }
