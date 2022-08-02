import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addAircon,
} from "../../../State/calculator";

function AC() {
  const elecCalcAC = () => {
    const avgHrMonth = getElectricityFormInfo().airconAvgUsage * 30;
    console.log(
      (avgHrMonth *
        (getElectricityFormInfo().airconNo *
          getElectricityFormInfo().airconPower)) /
        1000
    );
  };

  const handleChange = (event) => {
    setElectricityFormInfo((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class="bg-neutral-800">
      <button onClick={addAircon}>add aircon</button>
      <div class="flex flex-wrap">
        {getElectricityFormInfo().aircons.map((ac, i) => (
          <form
            class="w-1/2 flex flex-col justify-top text-neutral-200 bg-neutral-800 text-center"
            onSubmit={handleSubmit}
          >
            <div class="flex  flex-col space-y-2 self-center w-5/6">
              <h2 class="text-2xl">Air Conditioning unit #{i + 1} </h2>

              {/* Number of ACs */}
              <input
                type="range"
                defaultValue="1"
                min="1"
                max="20"
                oninput={function (e) {
                  setElectricityFormInfo((p) => ({
                    ...p,
                    airconNo: e.target.value,
                  }));
                }}
              />
              <output class="pb-10">
                Number of units: {getElectricityFormInfo().airconNo}
              </output>
              {/* Hours AC is used per day */}
              <output class="pb-10">
                Numbers of hours used per day:{" "}
                {getElectricityFormInfo().airconAvgUsage}
              </output>

              {/* Power draw per hour (in W) */}
              <input
                type="range"
                value="1"
                min="200"
                max="4500"
                step={100}
                // defaultValue={1000}
                oninput={function (e) {
                  setElectricityFormInfo((p) => ({
                    ...p,
                    airconPower: e.target.value,
                  }));
                }}
              />
              <output>
                Power Usage: {getElectricityFormInfo().airconPower} W/hour
              </output>
              <div>
                <button
                  class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}

export default AC;
