import type { Metadata } from "next";
import { ServiceEditorial } from "@/components/service-editorial";
import { pageMetadata } from "@/lib/site";
export const metadata: Metadata = pageMetadata("Naturopathie à Avize, près d’Épernay", "Naturopathie près d’Épernay et gemmothérapie à Avize avec Emma Peynet : un accompagnement personnalisé autour de l’hygiène de vie.", "/naturopathie");
function ServiceDetail(props: Record<string, unknown>) {
    void props;
    return <ServiceEditorial
        path="/naturopathie"
        breadcrumbLabel="Naturopathie"
        eyebrow="Naturopathie & gemmothérapie"
        title="Naturopathie et gemmothérapie à Avize"
        heroLead="Prenez le temps de mieux comprendre vos habitudes et de prendre soin de votre équilibre au quotidien."
        heroImage="/images/naturopathie-nutrition.webp"
        heroImageAlt="Plantes, bourgeons et aliments associés à l’accompagnement en naturopathie"
        introduction={[
            "La naturopathie est une approche de bien-être qui s’intéresse aux habitudes de vie dans leur ensemble : alimentation, sommeil, activité physique, rythme quotidien et gestion du stress.",
            "L’objectif d’un accompagnement est d’aider chacun à réfléchir à ses habitudes et à identifier des ajustements réalistes, adaptés à ses besoins et à son mode de vie.",
            "À Avize, Emma Peynet propose une approche fondée sur l’écoute, le dialogue et la personnalisation, à proximité d’Épernay et de Blancs-Coteaux.",
        ]}
        introductionCta="Parler de mes besoins"
        principle={{
            eyebrow: "Une vision d’ensemble",
            title: "Qu’est-ce que la naturopathie ?",
            paragraphs: [
                "La naturopathie observe la façon dont les habitudes du quotidien s’articulent : ce que l’on mange, la place du repos, le mouvement, le rythme des journées et les moments de détente. Le dialogue permet de comprendre ce qui est déjà en place avant d’envisager des changements.",
                "L’accompagnement individuel vise des habitudes durables et compatibles avec la vie réelle. Il ne s’agit pas d’appliquer une méthode identique à chacun, mais de sélectionner des pistes accessibles et de les ajuster progressivement.",
                "En France, la naturopathie n’est pas une profession médicale réglementée. Elle ne permet ni de diagnostiquer ni de traiter une maladie et ne remplace jamais les soins conventionnels, un traitement prescrit ou l’avis d’un professionnel de santé.",
            ],
            note: "En cas de symptôme, de pathologie, de grossesse, d’allaitement ou de traitement en cours, l’avis du professionnel de santé compétent reste indispensable.",
        }}
        featureBlocks={[
            {
                eyebrow: "Les piliers de l’accompagnement",
                title: "Des habitudes reliées entre elles.",
                paragraphs: [
                    "L’alimentation peut être explorée à partir des habitudes existantes, avec l’idée d’encourager une alimentation variée et adaptée au quotidien. Le sommeil et le rythme de vie invitent à réfléchir aux routines et aux conditions qui favorisent le repos.",
                    "La place du mouvement peut être abordée en tenant compte des possibilités et des préférences de chacun. Enfin, la détente rappelle l’importance de repérer des moments de pause réalistes, même modestes, dans l’organisation de la semaine.",
                ],
                image: "/images/portrait-emma.webp",
                imageAlt: "Portrait d’Emma Peynet, naturopathe à Avize",
                imagePosition: "center 28%",
            },
            {
                eyebrow: "Gemmothérapie",
                title: "La gemmothérapie : découvrir l’univers des bourgeons végétaux.",
                paragraphs: [
                    "La gemmothérapie désigne une pratique développée au XXe siècle autour de préparations obtenues notamment à partir de bourgeons et de jeunes pousses. Elle s’inscrit dans l’univers des usages traditionnels des végétaux.",
                    "Son histoire et ses principes peuvent être présentés sans attribuer à ces préparations des propriétés médicales démontrées : les preuves scientifiques disponibles sont insuffisantes pour conclure à une efficacité thérapeutique.",
                    "Les produits végétaux ne sont pas anodins. Ils peuvent nécessiter des précautions d’emploi et présenter des interactions ou contre-indications selon la situation. Ils ne doivent jamais conduire à interrompre ou remplacer un médicament prescrit.",
                ],
                reverse: true,
                note: "Avant toute utilisation, signalez à Emma vos traitements et situations particulières, et demandez conseil à un professionnel de santé ou pharmacien lorsque cela est nécessaire.",
            },
        ]}
        cards={{
            eyebrow: "Pourquoi consulter ?",
            title: "Faire le point pour avancer avec plus de clarté.",
            intro: "La démarche se concentre sur vos habitudes et votre équilibre quotidien, sans diagnostic ni promesse médicale.",
            items: [
                { title: "Observer ses habitudes", text: "Prendre du recul sur son alimentation, son rythme, son repos et son organisation." },
                { title: "Être accompagné individuellement", text: "Disposer d’un espace d’écoute où les conseils tiennent compte de votre réalité." },
                { title: "Réfléchir à son équilibre", text: "Relier les différentes dimensions du quotidien au lieu de les examiner séparément." },
                { title: "Changer progressivement", text: "Choisir quelques ajustements réalistes plutôt qu’une transformation brutale." },
            ],
        }}
        middleCta={{ title: "Vous ne savez pas par où commencer ?", text: "Vous pouvez simplement expliquer votre situation à Emma. Un premier échange aide à déterminer si cet accompagnement correspond à votre demande.", buttonLabel: "Échanger avec Emma" }}
        journey={{
            eyebrow: "Un accompagnement personnalisé",
            title: "Construire des repères à partir de votre quotidien.",
            intro: "L’accompagnement peut progresser depuis une compréhension globale de vos habitudes vers quelques actions concrètes et réalistes.",
            steps: [
                { title: "Échange initial", text: "Un premier temps peut permettre d’exprimer vos attentes, votre rythme de vie et les sujets que vous souhaitez aborder." },
                { title: "Habitudes et objectifs", text: "Les habitudes existantes et les objectifs personnels peuvent être clarifiés sans jugement." },
                { title: "Conseils d’hygiène de vie", text: "Des pistes générales et personnalisées peuvent être envisagées autour des dimensions pertinentes pour vous." },
                { title: "Ajustements éventuels", text: "Lors d’un suivi, les propositions peuvent être réexaminées à partir de votre expérience et de vos contraintes." },
            ],
            confirmation: "L’ordre, le contenu et les modalités de ces étapes restent à confirmer directement avec Emma avant le rendez-vous.",
        }}
        faq={[
            { question: "Quelle différence entre naturopathie et médecine ?", answer: "La médecine est exercée par des professionnels de santé réglementés qui diagnostiquent et prennent en charge les maladies. La naturopathie présentée ici est un accompagnement de bien-être autour des habitudes de vie ; elle ne remplace aucun soin médical." },
            { question: "À qui s’adresse cet accompagnement ?", answer: "Il peut intéresser les personnes qui souhaitent faire le point sur leurs habitudes quotidiennes. Pour toute problématique médicale, le professionnel de santé compétent reste l’interlocuteur prioritaire." },
            { question: "Qu’est-ce que la gemmothérapie ?", answer: "C’est une pratique utilisant des préparations issues notamment de bourgeons et de jeunes pousses. Son efficacité thérapeutique n’est pas suffisamment établie et son usage demande des précautions." },
            { question: "Faut-il déjà avoir un objectif précis ?", answer: "Non. Un premier échange peut justement servir à clarifier ce que vous souhaitez comprendre ou faire évoluer." },
            { question: "Comment se déroule un premier échange ?", answer: "Il peut porter sur vos attentes et vos habitudes de vie. Le déroulement exact et les informations à préparer sont à confirmer avec Emma lors de la prise de contact." },
        ]}
        finalCta={{ eyebrow: "Commencer simplement", title: "Chaque petit changement commence par une première conversation.", text: "Contactez Emma pour présenter votre demande et vérifier ensemble les modalités d’un accompagnement à Avize.", buttonLabel: "Échanger avec Emma" }}
        exclude="/naturopathie"
    />;
}
export default function Page() { return <ServiceDetail eyebrow="Naturopathie & gemmothérapie" title={<>Cultiver son équilibre, <em>naturellement.</em></>} intro="Emma Peynet propose un accompagnement en naturopathie à Avize, près d'Épernay, pour observer son hygiène de vie et retrouver des repères adaptés à sa réalité." image="/images/naturopathie-nutrition.webp" imageAlt="Bourgeons, plantes et aliments naturels sur une table en bois" sectionTitle={<>Une approche globale du <em>bien-être.</em></>} paragraphs={["La naturopathie envisage ensemble plusieurs dimensions de l'hygiène de vie : alimentation, rythme quotidien, sommeil, mouvement et équilibre émotionnel. L'objectif est de mieux comprendre ses habitudes et d'identifier des ajustements accessibles.", "Les conseils sont personnalisés et progressifs. Ils ne constituent ni un diagnostic ni une prescription médicale et tiennent compte des suivis de santé déjà en place."]} quote="Chercher des ajustements possibles, pas une perfection impossible : c'est souvent là que commencent les changements durables." detailSections={[{ title: "Hygiène de vie", text: "Observer le rythme, le repos, l'alimentation et le mouvement pour faire émerger des pistes cohérentes." }, { title: "Conseils personnalisés", text: "Sélectionner quelques repères concrets compatibles avec vos besoins et votre organisation." }, { title: "Gemmothérapie", text: "La gemmothérapie utilise des préparations issues de bourgeons et de jeunes pousses. Elle est abordée simplement, avec attention aux précautions d'emploi." }, { title: "Vision globale", text: "Relier les habitudes entre elles sans isoler une difficulté ni proposer de solution universelle." }]} steps={[{ title: "Faire le point", text: "Un échange approfondi permet de comprendre votre rythme de vie et vos priorités." }, { title: "Clarifier", text: "Nous identifions ensemble quelques axes d'attention réalistes." }, { title: "Expérimenter", text: "Vous repartez avec des pistes concrètes à intégrer progressivement." }]} pillars={[{ title: "Global", text: "Regarder les habitudes dans leur ensemble." }, { title: "Progressif", text: "Choisir des évolutions compatibles avec votre quotidien." }, { title: "Prudent", text: "Tenir compte des traitements, contre-indications et suivis en cours." }]} videoTitle="Comprendre la naturopathie et la gemmothérapie" faq={[{ question: "Qu'est-ce qu'un accompagnement en naturopathie ?", answer: "C'est un temps d'échange consacré à vos habitudes de vie et à des pistes de bien-être personnalisées. Il ne remplace pas une consultation médicale." }, { question: "Qu'est-ce que la gemmothérapie ?", answer: "Elle repose sur des préparations à base de bourgeons et de jeunes pousses. Leur utilisation demande de tenir compte des précautions, traitements et situations particulières." }, { question: "Dois-je signaler mes traitements ?", answer: "Oui. Informez Emma de tout traitement, grossesse, allaitement ou situation de santé afin que les conseils restent prudents et adaptés." }, { question: "Où l'accompagnement est-il proposé ?", answer: "Selon les modalités convenues avec Emma : au cabinet à Avize, à domicile, en entreprise ou en maison senior." }]} note="La naturopathie et la gemmothérapie ne remplacent pas un suivi médical. Signalez tout traitement, grossesse, allaitement ou situation particulière avant l'usage de produits à base de plantes." exclude="/naturopathie"/>; }
