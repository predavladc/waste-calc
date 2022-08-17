import { Link } from "@solidjs/router";

function Electricity() {
  return (
    <div class="flex flex-col justify-top w-screen text-neutral-200 text-center">
      <h2>Electricity: select category</h2>
      <Link href="/me/electricity/ac">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          Air Conditioning
        </button>{" "}
      </Link>

      <Link href="/me/electricity/fridge">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          Fridge
        </button>
      </Link>
      <Link href="/me/electricity/heater">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          Heater
        </button>
      </Link>
      <Link href="/me/electricity/lighting">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          Lighting
        </button>
      </Link>
      <Link href="/me/electricity/washing-machine">
        {" "}
        <button class="text-2xl py-2 bg-green-600 m-4 p-10  hover:bg-green-900 rounded-md  ">
          Washing Machine
        </button>
      </Link>
    </div>
  );
}

export default Electricity;
