import { GlitchFx } from "@/once-ui/components";
import { Footer } from "@/app/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlitchFx>
      {children}
      <Footer />
    </GlitchFx>
  );
}
