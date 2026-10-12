import { LogoMarquee, type Logo } from "@/components/ui/logo-marquee";
import figma from "@/assets/logos/figma.svg";
import framer from "@/assets/logos/framer.svg";
import rive from "@/assets/logos/rive.svg";
import lottie from "@/assets/logos/lottiefiles.svg";
import blender from "@/assets/logos/blender.svg";
import unity from "@/assets/logos/unity.svg";
import webflow from "@/assets/logos/webflow.svg";
import threejs from "@/assets/logos/threedotjs.svg";

const LOGOS: Logo[] = [
  { src: rive, alt: "Rive" },
  { src: lottie, alt: "LottieFiles" },
  { src: figma, alt: "Figma" },
  { src: framer, alt: "Framer" },
  { src: blender, alt: "Blender" },
  { src: unity, alt: "Unity" },
  { src: webflow, alt: "Webflow" },
  { src: threejs, alt: "Three.js" },
];

export function SkillsMarquee() {
  return <LogoMarquee logos={LOGOS} className="mx-0 max-w-none" />;
}
