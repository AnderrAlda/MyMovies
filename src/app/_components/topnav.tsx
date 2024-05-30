import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const TopNav = () => {
    return (
        <nav className="flex items-center justify-between w-full p-4 text-2xl font-semibold">
            <div>My movies</div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default TopNav