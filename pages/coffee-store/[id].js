import { useRouter } from "next/router";
import Link from "next/link";

export default function CoffeeStore() {
    const router = useRouter();
    console.log("router", router);

    return (
        <>
            <div>
                coffee store page {router.query.id}
                <Link href="/">Back to home</Link>
                <Link href="/coffee-store/dynamic">Go to page dynamic</Link>
            </div>
        </>
    );
}