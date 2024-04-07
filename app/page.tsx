"use client"
import Buttons from "@/components/Buttons";
import Buttons2 from "@/components/Buttons2";
import ViewModal from "@/components/ViewModal";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hola
        <Buttons />
        <Buttons2 />
        <ViewModal />
      </main>
    </NextUIProvider>
  );
}
