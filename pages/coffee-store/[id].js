import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log('params', params);

    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id; //dynamic id
            })
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } }
        ],
        fallback: true,
    }
}

export default function CoffeeStore(props) {
    const router = useRouter();
    console.log("router", router);

    console.log('props', props);

    return (
        <>
            <div>
                coffee store page {router.query.id}
                <Link href="/">Back to home</Link>
                <Link href="/coffee-store/dynamic">Go to page dynamic</Link>
                <p>{props.coffeeStore.address}</p>
                <p>{props.coffeeStore.name}</p>
            </div>
        </>
    );
}