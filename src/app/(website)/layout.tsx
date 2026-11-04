import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function WebsiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
