import { Link } from "@solidjs/router";

function Electricity() {
  return (
    <div class="flex flex-col justify-top w-screen text-neutral-200 bg-neutral-800 h-screen text-center">
      <h2>Electricity: select category</h2>
      <Link href="/me/electricity/ac">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          AC
        </button>{" "}
      </Link>

      <Link href="/me/electricity/fridge">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          fridge
        </button>
      </Link>
      <Link href="/me/electricity/heater">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          heater
        </button>
      </Link>
      <Link href="/me/electricity/lighting">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          lighting
        </button>
      </Link>
      <Link href="/me/electricity/washing-machine">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          washing-machine
        </button>
      </Link>
    </div>
  );
}

export default Electricity;
