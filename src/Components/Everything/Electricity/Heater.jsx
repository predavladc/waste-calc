import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addHeater,
  getHeaterMonthEst,
  updateHeater,
  deleteHeater,
} from "../../../State/calculator";

function Heater() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class="bg-neutral-800 text-neutral-200 snap-center h-screen">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addHeater}
      >
        Add Heater
      </button>
      <p>{getHeaterMonthEst()} kW/month</p>
      <div class="flex flex-wrap w-screen flex-shrink">
        {getElectricityFormInfo().heaters.map((heater, i) => (
          <form
            class=" flex flex-col justify-center text-neutral-200 bg-neutral-800 text-center  md:w-1/2 sm:justify-center sm:w-auto object-center"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col space-y-2 self-center w-5/6">
              <h2 class="text-2xl">Heater unit #{i + 1} </h2>

              <input
                type="range"
                value={heater.avgUsage}
                min="1"
                max="24"
                oninput={function (e) {
                  console.log(i, "avgUsage", e.target.value);
                  updateHeater(i, "avgUsage", e.target.value);
                }}
              />
              <output class="pb-10">
                Average Hours used per Day: {heater.avgUsage}
              </output>

              {/* Power draw per hour (in W) */}
              <input
                name="power"
                type="range"
                value={heater.power}
                min="1000"
                max="7000"
                step={250}
                oninput={function (e) {
                  console.log(i, "power", e.target.value);
                  updateHeater(i, "power", e.target.value);
                }}
              />
              <output>Power Usage: {heater.power} W/hour</output>
              <button
                class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  deleteHeater(i);
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

export default Heater;
