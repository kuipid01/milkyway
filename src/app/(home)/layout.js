import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { VolumeProvider } from "@/components/context/VolumeControlContext";
import AudioPlayer from "@/components/ui/AudioPlayer";
import { getUser } from "@/utils/actions";
import Image from "next/image";

export default async function RootLayout({ children }) {
  const currentUser = await getUser();
  return (
    <main className="relative w-full overflow-hidden ">
      <div className="wave-bg w-full h-full absolute top-0 left-0"></div>
      <Image
        src={"/bg1.png"}
        fill
        alt="bg"
        priority={true}
      
        quality={100}
        objectPosition="center"
        className="z-[-2]"
      />
      <Header user={currentUser} />
      {children}
      <Footer />
      <AudioPlayer />
    </main>
  );
}
