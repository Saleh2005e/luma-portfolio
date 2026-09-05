export function generateStaticParams() {
  return ["about","portfolio","services","contact"].map((page) => ({ page }));
}

import { Interior } from "../../components/interior";
export default async function Page({params}:{params:Promise<{page:string}>}){const{page}=await params;return <Interior page={page}/>;}
