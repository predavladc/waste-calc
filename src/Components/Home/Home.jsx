import { Link } from "@solidjs/router";

function Home() {
  return (
    <div class="flex justify-center w-screen text-neutral-200 text-center align-middle">
      <div class="space-y-4 flex flex-col">
        <p class="text-4xl  pt-3 ">Waste Calculator</p>
        <img
          class=" border-t-black object-contain h-1/3 md:h-1/2"
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80"
        />
        <Link href="/me/overview">
          <button class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4">
            Waste Away!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
