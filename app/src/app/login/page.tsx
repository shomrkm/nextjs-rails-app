import { LoginButton, LogoutButton } from "@/app/components/buttons";

export default async function Home() {
  return (
    <main className="flex justify-center items-center h-[70vh]">
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
    </main>
  );
}
