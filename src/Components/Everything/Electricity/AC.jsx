import {
  getElectricityFormInfo,
  setElectricityFormInfo,
} from "../../../State/calculator";

function AC() {
  return (
    <div class="flex flex-col justify-top w-screen text-neutral-200 bg-neutral-800 h-screen text-center">
      <div class="flex  flex-col space-y-2 self-center w-5/6">
        <h2 class="text-2xl">Air Conditionning</h2>
        <input
          type="range"
          defaultValue="1"
          min="1"
          max="20"
          oninput={function (e) {
            setElectricityFormInfo((p) => ({ ...p, airconNo: e.target.value }));
          }}
        />
        <output class="pb-10">
          Number of units: {getElectricityFormInfo().airconNo}
        </output>
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
        <button></button>
      </div>
    </div>
  );
}

export default AC;
