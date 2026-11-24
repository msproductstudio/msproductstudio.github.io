import Studio from "@/components/Studio";
import { studioCopy } from "@/studio-content";
export const metadata = { description: studioCopy.pt.description, openGraph: {title:"MS Product Studio",description:studioCopy.pt.description,locale:"pt_BR",type:"website",url:"/",images:[{url:"/studio-social.png",width:1200,height:630}]}, alternates: { canonical: "/", languages: {"pt-BR": "/", en: "/en/","x-default":"/"} } };
export default function Home(){return <html lang="pt-BR"><body><Studio lang="pt"/></body></html>;}
