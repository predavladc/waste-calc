import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addWashingMachine,
  getWashingMachineEst,
  updateWashingMachine,
  deleteWashingMachine,
} from "../../../State/calculator";

function WashingMachine() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class="bg-neutral-800 text-neutral-200 snap-center min-h-screen pb-44">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addWashingMachine}
      >
        Add Washing Machine
      </button>
      <p>{getWashingMachineEst()} kW/month</p>
      <div class="flex flex-wrap w-screen justify-center">
        {getElectricityFormInfo().washingMachines.map((washingMachine, i) => (
          <form
            class=" flex flex-col  text-neutral-200 bg-neutral-800 text-center  md:w-3/6 w-5/6 justify-items-center px-3 py-3"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col space-y-2">
              <h2 class="text-2xl">Washing Machine unit #{i + 1} </h2>

              <input
                type="range"
                value={washingMachine.avgUsage}
                min="1"
                max="24"
                oninput={function (e) {
                  console.log(i, "avgUsage", e.target.value);
                  updateWashingMachine(i, "avgUsage", e.target.value);
                }}
              />
              <output class="pb-10">
                Average Hours used per Day: {washingMachine.avgUsage}
              </output>

              {/* Power draw per hour (in W) */}
              <input
                name="power"
                type="range"
                value={washingMachine.power}
                min="300"
                max="2000"
                step={100}
                oninput={function (e) {
                  console.log(i, "power", e.target.value);
                  updateWashingMachine(i, "power", e.target.value);
                }}
              />
              <output>Power Usage: {washingMachine.power} W/hour</output>
              <button
                class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  deleteWashingMachine(i);
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

export default WashingMachine;
