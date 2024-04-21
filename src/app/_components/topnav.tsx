import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export function TopNav(){
    return (
      <nav className="flex w-full items-center justify-between text-xl font-semibold border-b p-4">
        <div>Galeri</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
}