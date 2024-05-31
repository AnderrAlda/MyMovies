
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import UploadButton from '~/app/_components/uploadButton';

const TopNav = () => {


    return (
        <nav className="flex items-center justify-between w-full p-4 text-2xl font-semibold">
            <div>My movies</div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton />
                <UserButton />

            </SignedIn>
        </nav>
    )
}

export default TopNav