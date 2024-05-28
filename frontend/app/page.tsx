import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="container">
        <nav className="flex justify-center gap-4 p-4 border-b mb-4">
          <Link href="/signin">Sign-in</Link>
          <Link href="/signup">Sign-up</Link>
        </nav>
      </div>
      <div className="container">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        explicabo earum nihil officiis numquam molestias exercitationem
        reiciendis facere tempora ex reprehenderit deserunt facilis magni,
        obcaecati iure aliquam nostrum nobis quas.
      </div>
    </section>
  );
}
