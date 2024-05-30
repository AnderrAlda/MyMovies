"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { UploadButton } from '~/utils/uploadthing'
const TopNav = () => {
    const router = useRouter();

    return (
        <nav className="flex items-center justify-between w-full p-4 text-2xl font-semibold">
            <div>My movies</div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint='imageUploader'
                    onClientUploadComplete={() => {
                        router.refresh();
                    }} />
                <UserButton />

            </SignedIn>
        </nav>
    )
}

export default TopNav