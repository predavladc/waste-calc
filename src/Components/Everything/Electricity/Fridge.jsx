import {
  getElectricityFormInfo,
  setElectricityFormInfo,
} from "../../../State/calculator";

function Fridge() {
  return (
    <div>
      <form class="flex flex-col justify-top w-screen text-neutral-200 bg-neutral-800 h-screen text-center">
        <div class="flex  flex-col space-y-2 self-center w-5/6">
          <h2 class="text-2xl">Fridge</h2>
          <h2 class="text-4xl">A</h2>
          <input
            type="range"
            value="1"
            min="1"
            max="10"
            oninput={function (e) {
              setElectricityFormInfo((p) => ({
                ...p,
                fridgeNo: e.target.value,
              }));
            }}
          />
          <output class="pb-10">
            Number of units: {getElectricityFormInfo().fridgeNo}
          </output>
          <input
            type="range"
            value="1"
            min="50"
            max="700"
            step={10}
            // defaultValue={1000}
            oninput={function (e) {
              setElectricityFormInfo((p) => ({
                ...p,
                fridgePower: e.target.value,
              }));
            }}
          />
          <output>
            Power Usage: {getElectricityFormInfo().fridgePower} W/hour
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
    </div>
  );
}

export default Fridge;
