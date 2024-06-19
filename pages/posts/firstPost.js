import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1>最初の投稿</h1>
      <p>こんにちは</p>
      <Link href="/"><a>ホームへ戻る</a></Link>
    </div>  
  );
}
