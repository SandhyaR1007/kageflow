import Link from "next/link";


export default function Home() {
  return (
 <div>
  <nav className="px-5 py-2 flex gap-5 items-center">
    <span className="text-xl ">KageFlow</span>
    <ul className="flex gap-3">
      <li>Library</li>
      <li>Progress</li>
    </ul>
    <span className="">Profile</span>
  </nav>
 <main className="flex items-center justify-center h-96">
  <Link href="/library" className="rounded-md p-3 bg-violet-500 text-white shadow-sm">GET STARTED</Link>

 </main>
 </div>
  );
}
