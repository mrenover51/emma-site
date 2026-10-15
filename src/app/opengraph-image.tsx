import { ImageResponse } from "next/og";
export const alt="Parenth'Emma — Réflexologie, naturopathie et nutrition à Avize";
export const size={width:1200,height:630};export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",background:"#354A40",color:"#FAF8F3",padding:"70px",flexDirection:"column",justifyContent:"space-between"}}><div style={{fontSize:28,letterSpacing:5,textTransform:"uppercase",color:"#D8C5A5"}}>Emma Peynet • Avize</div><div style={{display:"flex",flexDirection:"column"}}><div style={{fontFamily:"serif",fontSize:100,lineHeight:1}}>Parenth&apos;Emma</div><div style={{fontSize:32,marginTop:24,color:"#D7DED5"}}>Réflexologie • Naturopathie • Nutrition</div></div></div>,size)}
