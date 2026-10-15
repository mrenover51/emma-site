import { ServiceSeo } from "@/components/service-seo";

const description = "Accompagnement en naturopathie, hygiène de vie et gemmothérapie avec Emma Peynet à Avize, dans la Côte des Blancs.";

export default function NaturopathieLayout({ children }: { children: React.ReactNode }) {
  return <><ServiceSeo name="Naturopathie et gemmothérapie" description={description} path="/naturopathie" />{children}</>;
}
