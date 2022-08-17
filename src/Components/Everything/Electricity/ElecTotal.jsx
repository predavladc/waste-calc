import { Link } from "@solidjs/router";

//Currently hardcoded, will be dynamic after finishing all the other elec appliances

function ElecTotal() {
  return (
    <div class="flex justify-center w-screen text-neutral-200 text-center">
      <div class="space-y-1 ">
        <p class="text-4xl  pt-3 ">You are currently using</p>
        <img
          class=" border-t-black object-contain h-1/2 md:h-1/4 m-auto"
          src="https://images.unsplash.com/photo-1494280986787-c49b328829dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <p> 1000 Kw per Month!</p>
        <div>
          <Link href="/me/overview">
            <button class="text-2xl py-3  bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4">
              Statistics
            </button>
          </Link>
          <Link href="/me/overview">
            <button class="text-2xl py-3  bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ElecTotal;
