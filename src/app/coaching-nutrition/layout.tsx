import { ServiceSeo } from "@/components/service-seo";

const description = "Coaching en nutrition et accompagnement alimentaire personnalisé avec Emma Peynet à Avize, près d’Épernay.";

export default function NutritionLayout({ children }: { children: React.ReactNode }) {
  return <><ServiceSeo name="Coaching en nutrition" description={description} path="/coaching-nutrition" />{children}</>;
}
