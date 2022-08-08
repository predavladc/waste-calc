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
    <div class="bg-neutral-800 text-neutral-200 h-screen">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addFridge}
      >
        Add Fridge
      </button>
      <p>{getfridgesPowerEst()} kW/month</p>
      <div class="flex flex-wrap">
        {getElectricityFormInfo().fridges.map((fridges, i) => (
          <form
            class="w-1/2 flex flex-col justify-top text-neutral-200 bg-neutral-800 text-center"
            onSubmit={handleSubmit}
          >
            <div class="flex  flex-col spfridgese-y-2 self-center w-5/6">
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
