import { auth } from "@/auth";
import UserLanding from "../../components/UserLanding";
import LandingPage from "../../components/LandingPage";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const session = await auth();
  return (
    <>
      {session && <UserLanding searchParams={Promise.resolve(searchParams)} />}
      {!session && <LandingPage />}h
    </>
  );
}
