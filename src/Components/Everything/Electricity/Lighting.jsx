import {
  getElectricityFormInfo,
  setElectricityFormInfo,
  addLight,
  getLightMonthEst,
  updateLight,
  deleteLight,
  tryingLightThing,
} from "../../../State/calculator";

function Lighting() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("!!!!!!!!", getElectricityFormInfo());
  };

  return (
    <div class="bg-neutral-800 text-neutral-200 snap-center">
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
                Average Hours used per Day {light.avgUsage}
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
              <output>Power Usage:{light.power} W/hour</output>

              {/* Radio Buttons */}

              <div>
                <input
                  type="radio"
                  id="led"
                  name={light.power}
                  value={5}
                  oninput={function (e) {
                    tryingLightThing(i, "power", e.target.value);
                  }}
                />
                <label for="led">LED</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="halogen"
                  name={light.power}
                  value={30}
                  oninput={function (e) {
                    tryingLightThing(i, "power", e.target.value);
                  }}
                />
                <label for="halogen">Halogen</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="incandescent"
                  name={light.power}
                  value={60}
                  oninput={function (e) {
                    tryingLightThing(i, "power", e.target.value);
                  }}
                />
                <label for="incandescent">Incandescent</label>
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
