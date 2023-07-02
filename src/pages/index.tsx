import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import GameBoard from "@/components/UI/GameBoard";
import WinModal from "@/components/modal/Modal";
import { useState } from "react";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [modalShowing, setModalShowing] = useState(false)

  return (
    <>
      <Head>
        <title>Tic-Tac-Toe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-full items-center">
        <div className="py-16">
          <GameBoard toggleModal={setModalShowing}/>
          <WinModal isShowing={modalShowing} toggleModal={setModalShowing}/>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
