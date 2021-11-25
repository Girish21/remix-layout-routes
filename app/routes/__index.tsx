import { Link, Outlet } from "remix";

export default function IndexLayout() {
  return (
    <main className="h-screen">
      <div className="flex h-full">
        <aside className="sidenav flex flex-col gap-6 items-center">
          <Link to="">Index</Link>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
        </aside>
        <section className="h-full w-full grid place-content-center">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
