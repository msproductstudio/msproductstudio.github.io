import Portfolio from "@/components/Portfolio";
import { copy } from "@/content";
export const metadata = { description: copy.pt.description, openGraph: {title:"Matheus Silva — MS Product Studio",description:copy.pt.description,locale:"pt_BR",type:"website",images:[{url:"/social.png",width:1200,height:630}]}, alternates: { canonical: "/", languages: {"pt-BR": "/pt/", en: "/en/"} } };
export default function Home(){ return <html lang="pt-BR"><body><Portfolio lang="pt" content={copy.pt}/></body></html>; }
