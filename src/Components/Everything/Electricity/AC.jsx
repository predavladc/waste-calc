import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addAircon,
  getAirconMonthEst,
  updateAircon,
  deleteAircon,
} from "../../../State/calculator";

function AC() {
  // const elecCalcAC = () => {
  //   const avgHrMonth = getElectricityFormInfo().airconAvgUsage * 30;
  //   console.log(
  //     (avgHrMonth *
  //       (getElectricityFormInfo().airconNo *
  //         getElectricityFormInfo().airconPower)) /
  //       1000
  //   );
  // };

  // const handleChange = (event) => {
  //   setElectricityFormInfo((p) => ({
  //     ...p,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class="bg-neutral-800 text-neutral-200 snap-center">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addAircon}
      >
        Add AirCon
      </button>
      <p>{getAirconMonthEst()} kW/month</p>
      <div class="flex flex-wrap w-screen flex-shrink">
        {getElectricityFormInfo().aircons.map((ac, i) => (
          <form
            class=" flex flex-col justify-center text-neutral-200 bg-neutral-800 text-center  md:w-1/2 sm:justify-center sm:w-auto object-center"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col space-y-2 self-center w-5/6">
              <h2 class="text-2xl">Air Conditioning unit #{i + 1} </h2>

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
                Average Hours used per Day {ac.avgUsage}
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
