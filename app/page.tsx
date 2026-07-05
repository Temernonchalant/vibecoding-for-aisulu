import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Page() {
  return (
    <main className="relative min-h-svh w-screen overflow-hidden">
      <h1 className="absolute text-center font-extrabold tracking-tighter z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-black text-3xl md:text-5xl">
        Background Gradient Animation
      </h1>
      <BackgroundGradientAnimation />
    </main>
  );
}
