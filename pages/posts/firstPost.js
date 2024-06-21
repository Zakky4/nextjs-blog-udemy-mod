import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>最初の投稿</h1>
      <p>こんにちは</p>
      <Link href="/"><a>ホームへ戻る</a></Link>
      <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
    </div>  
  );
}
