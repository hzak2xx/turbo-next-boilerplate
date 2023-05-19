import { Header } from "components";
import { LoginButton } from "@/components/LoginButton";
import { LogoutButton } from "@/components/LogoutButton";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <LoginButton />
      <LogoutButton />
    </>
  );
}
