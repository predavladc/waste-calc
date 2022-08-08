import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addLight,
  getLightMonthEst,
  updateLight,
  deleteLight,
  tryingLightThing,
} from "../../../State/calculator";
import { BULB_TYPE_ENUM } from "../../../enums";

function Lighting() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class="bg-neutral-800 text-neutral-200 snap-center h-screen">
      <button
        class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
        onClick={addLight}
      >
        Add Light
      </button>
      <p>{getLightMonthEst()} kW/month</p>
      <div class="flex flex-wrap w-screen flex-shrink">
        {getElectricityFormInfo().lights.map((light, i) => (
          <form
            class=" flex flex-col justify-center text-neutral-200 bg-neutral-800 text-center  md:w-1/2 sm:justify-center sm:w-auto object-center"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col space-y-2 self-center w-5/6">
              <h2 class="text-2xl">Light unit #{i + 1} </h2>

              <input
                type="range"
                value={light.avgUsage}
                min="1"
                max="24"
                oninput={function (e) {
                  console.log(i, "avgUsage", e.target.value);
                  updateLight(i, "avgUsage", e.target.value);
                }}
              />
              <output class="pb-10">
                Average Hours used per Day: {light.avgUsage}
              </output>

              {/* Power draw per hour (in W) */}
              <input
                name="power"
                type="range"
                value={light.power}
                min="5"
                max="100"
                step={5}
                oninput={function (e) {
                  console.log(i, "power", e.target.value);
                  updateLight(i, "power", e.target.value);
                }}
              />
              <output>Power Usage: {light.power} W/hour</output>

              {/* Radio Buttons */}
              <div>
                <p class=" font-bold">OR</p>
                Select one of the following presets:
                <div>
                  <button
                    id="led"
                    class={`p-3 px-6 border-4 rounded-lg m-1 ${
                      light.type === BULB_TYPE_ENUM.LED
                        ? "border-green-300"
                        : "border-stone-200"
                    }`}
                    onClick={function (e) {
                      console.log(`${BULB_TYPE_ENUM.LED} clicked.`);
                      tryingLightThing(i, "power", 5);
                      tryingLightThing(i, "type", BULB_TYPE_ENUM.LED);
                    }}
                  >
                    {BULB_TYPE_ENUM.LED}
                  </button>
                </div>
                <div>
                  <button
                    id="halogen"
                    class={`p-3 px-6 border-4 rounded-lg m-1 ${
                      light.type === BULB_TYPE_ENUM.Halogen
                        ? "border-green-300"
                        : "border-stone-200"
                    }`}
                    onClick={function (e) {
                      console.log(`${BULB_TYPE_ENUM.Halogen} clicked.`);
                      tryingLightThing(i, "power", 30);
                      tryingLightThing(i, "type", BULB_TYPE_ENUM.Halogen);
                    }}
                  >
                    {BULB_TYPE_ENUM.Halogen}
                  </button>
                </div>
                <div>
                  <button
                    id="incandescent"
                    class={`p-3 px-6 border-4 rounded-xl m-1  ${
                      light.type === BULB_TYPE_ENUM.Incandescent
                        ? "border-green-300"
                        : "border-stone-200"
                    }`}
                    onClick={function (e) {
                      console.log(`${BULB_TYPE_ENUM.Incandescent} clicked.`);
                      tryingLightThing(i, "power", 60);
                      tryingLightThing(i, "type", BULB_TYPE_ENUM.Incandescent);
                    }}
                  >
                    {BULB_TYPE_ENUM.Incandescent}
                  </button>
                </div>
              </div>
              <button
                class="text-2xl py-3 bg-green-600 m-3 p-4 hover:bg-green-900 rounded-2xl mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  deleteLight(i);
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

export default Lighting;
