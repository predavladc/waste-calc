import { Link } from "@solidjs/router";

function Overview() {
  return (
    <div class="flex flex-col justify-top w-screen text-neutral-200 bg-neutral-800 h-screen text-center">
      <h2 class="text-2xl pt-2">Select Type of Waste</h2>
      <div class=" flex flex-col justify-top">
        <Link href="../../me/electricity">
          <button class="text-2xl py-3 bg-green-600 m-3 p-10  hover:bg-green-900 rounded-lg mt-4 ">
            Electricity
          </button>
        </Link>{" "}
        <Link href="">
          <button class="text-2xl py-3 bg-green-600 m-3 p-10 hover:bg-green-900 rounded-lg mt-4">
            Water
          </button>
        </Link>{" "}
        <Link href="">
          <button class="text-2xl py-3 bg-green-600 m-3 p-10  hover:bg-green-900 rounded-lg mt-4">
            Plastics
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Overview;
