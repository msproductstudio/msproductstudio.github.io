import { notFound } from "next/navigation";
import Studio from "@/components/Studio";
import { studioCopy } from "@/studio-content";
export function generateStaticParams(){ return [{lang:"pt"},{lang:"en"}]; }
export const dynamicParams = false;
export async function generateMetadata({params}: {params: Promise<{lang:string}>}) {
 const {lang}=await params; if(lang!=="pt" && lang!=="en") notFound();
 return {title: "MS Product Studio",description:studioCopy[lang].description,alternates:{canonical:lang==="pt"?"/":"/en/",languages:{"pt-BR":"/",en:"/en/","x-default":"/"}},openGraph:{title:"MS Product Studio",description:studioCopy[lang].description,url:lang==="pt"?"/":"/en/",locale:lang==="pt"?"pt_BR":"en_US",type:"website",images:[{url:"/studio-social.png",width:1200,height:630}]}};
}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(lang!=="pt"&&lang!=="en")notFound();return <html lang={lang==="pt"?"pt-BR":"en"}><body><Studio lang={lang}/></body></html>;}
