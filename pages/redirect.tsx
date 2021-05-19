import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        window.location.href = "https://zider.media";
    }, [])
    return (<div></div>)
}
