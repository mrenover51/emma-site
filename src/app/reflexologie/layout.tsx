import { ServiceSeo } from "@/components/service-seo";

const description = "Séances de réflexologie plantaire et palmaire avec Emma Peynet à Avize, près d’Épernay, dans une approche de bien-être personnalisée.";

export default function ReflexologieLayout({ children }: { children: React.ReactNode }) {
  return <><ServiceSeo name="Réflexologie plantaire et palmaire" description={description} path="/reflexologie" />{children}</>;
}
