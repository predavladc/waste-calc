import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addFridge,
  getfridgesPowerEst,
  updateFridge,
  deleteFridge,
} from "../../../State/calculator";

function Fridge() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="bg-neutral-800 text-neutral-200 snap-center min-h-screen pb-44">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addFridge}
      >
        Add Fridge
      </button>
      <div class="flex justify-center">
        <p class="font-bold border-spacing-4 border-2 text-size-xl p-4 w-3/12 my-4 rounded-xl ">
          Total consumption: {getfridgesPowerEst()} kW/month
        </p>
      </div>
      <div class="flex flex-wrap w-screen justify-center">
        {getElectricityFormInfo().fridges.map((fridges, i) => (
          <form
            class=" flex flex-col  text-neutral-200 bg-neutral-800 text-center  md:w-3/6 w-5/6 justify-items-center px-3 py-3"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col space-y-2">
              <h2 class="text-2xl">Fridge unit #{i + 1} </h2>

              <input
                class=" hidden"
                type="range"
                value={fridges.avgUsage}
                min="1"
                max="24"
                oninput={function (e) {
                  console.log(i, "avgUsage", e.target.value);
                  updateFridge(i, "avgUsage", e.target.value);
                }}
              />
              <output class="pb-10">
                Average Hours used per Day: {fridges.avgUsage}
              </output>

              {/* Power draw per hour (in W) */}
              <input
                name="power"
                type="range"
                value={fridges.power}
                min="50"
                max="700"
                step={10}
                oninput={function (e) {
                  console.log(i, "power", e.target.value);
                  updateFridge(i, "power", e.target.value);
                }}
              />
              <output>Power Usage: {fridges.power} W/hour</output>
              <button
                class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  deleteFridge(i);
                }}
              >
                Delete
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Fridge;
