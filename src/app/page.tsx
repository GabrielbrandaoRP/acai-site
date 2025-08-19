import Promocoes from "./_components/Promocoes";
import QuemSomos from "./_components/QuemSomos";


export default function Home() {
  return (
    <>
     
      <main className="bg-zinc-200 flex flex-col gap-2 ">
        <Promocoes />
        <QuemSomos />
      </main>
    </>
  );
}
