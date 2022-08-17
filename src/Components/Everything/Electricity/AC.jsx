import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addAircon,
  getAirconMonthEst,
  updateAircon,
  deleteAircon,
} from "../../../State/calculator";

function AC() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class=" text-neutral-200 snap-center min-h-screen pb-44">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addAircon}
      >
        Add AirCon
      </button>
      <div class="flex justify-center">
        <p class="font-bold border-spacing-4 border-2 text-size-xl p-4 w-3/12 my-4 rounded-xl ">
          Total consumption: {getAirconMonthEst()} kW/month
        </p>
      </div>
      <div class="flex flex-wrap w-screen justify-center">
        {getElectricityFormInfo().aircons.map((ac, i) => (
          <form
            class=" flex flex-col  text-neutral-200  text-center  md:w-3/6 w-5/6 justify-items-center px-3 py-3"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col space-y-2">
              <h2 class="text-2xl">Air Conditioning unit #{i + 1}</h2>

              <input
                type="range"
                value={ac.avgUsage}
                min="1"
                max="24"
                oninput={function (e) {
                  console.log(i, "avgUsage", e.target.value);
                  updateAircon(i, "avgUsage", e.target.value);
                }}
              />
              <output class="pb-10">
                Average Hours used per Day:{" "}
                <span class="font-bold">{ac.avgUsage}</span>
              </output>

              {/* Power draw per hour (in W) */}
              <input
                name="power"
                type="range"
                value={ac.power}
                min="200"
                max="4500"
                step={100}
                // defaultValue={1000}
                oninput={function (e) {
                  // js array replace value in object of arrays useState
                  console.log(i, "power", e.target.value);
                  updateAircon(i, "power", e.target.value);
                  // setElectricityFormInfo((p) => ({
                  //   ...p,
                  //   aircons: [
                  //     ...p.aircons,
                  //     {
                  //       power: e.target.value,
                  //     },
                  //   ],
                  // }));
                }}
              />
              <output>Power Usage:{ac.power} W/hour</output>
              <button
                class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  deleteAircon(i);
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

export default AC;
