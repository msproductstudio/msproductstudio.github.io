import {notFound} from "next/navigation";
import Portfolio from "@/components/Portfolio";
import {copy, type Locale} from "@/content";
export function generateStaticParams(){ return [{lang:"pt"},{lang:"en"}]; }
export const dynamicParams = false;
export async function generateMetadata({params}: {params: Promise<{lang:string}>}) {
 const {lang}=await params; if(lang!=="pt" && lang!=="en") notFound();
 return {title: "Matheus Silva — MS Product Studio",description:copy[lang].description,alternates:{canonical:`/${lang}/`,languages:{"pt-BR":"/pt/",en:"/en/","x-default":"/"}},openGraph:{title:"Matheus Silva — MS Product Studio",description:copy[lang].description,url:`/${lang}/`,locale:lang==="pt"?"pt_BR":"en_US",type:"website",images:[{url:"/social.png",width:1200,height:630}]}};
}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(lang!=="pt"&&lang!=="en")notFound();return <html lang={lang==="pt"?"pt-BR":"en"}><body><Portfolio lang={lang as Locale} content={copy[lang]}/></body></html>;}
