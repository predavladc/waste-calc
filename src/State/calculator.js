import { createSignal, createEffect } from "solid-js";

export const [getElectricityFormInfo, setElectricityFormInfo] = createSignal(
  localStorage.getItem("electricityFormInfo")
    ? JSON.parse(localStorage.getItem("electricityFormInfo"))
    : {
        aircons: [
          {
            power: 900,
            avgUsage: 3,
          },
        ],
        fridges: [
          {
            power: 150,
            avgUsage: 24,
          },
        ],
      }
);

export const [getCategorySelectedStates, setCategorySelectedStates] =
  createSignal({
    AC: true,
    fridge: true,
  });

export const addAircon = () => {
  setElectricityFormInfo((p) => ({
    ...p,
    aircons: [
      ...p.aircons,
      {
        power: 2,
        avgUsage: 200,
      },
    ],
  }));
};

export const [getCategoryCompletionStates, setCategoryCompletionStates] =
  createSignal({
    AC: false,
    fridge: false,
    heater: false,
    lighting: false,
    "washing-machine": false,
  });

export const getAirconMonthEst = getElectricityFormInfo().aircons.reduce(
  (total, aircon) => {
    return total + aircon.power * aircon.avgUsage;
  },
  0
);

export const fridgesPowerEst = getElectricityFormInfo().fridges.reduce(
  (total, fridge) => {
    return total + fridge.power * fridge.avgUsage;
  },
  0
);

createEffect(
  () =>
    localStorage.setItem(
      "electricityFormInfo",
      JSON.stringify(getElectricityFormInfo())
    ),
  [getElectricityFormInfo()]
);
createEffect(
  () =>
    localStorage.setItem(
      "categorySelectedStates",
      JSON.stringify(getCategorySelectedStates())
    ),
  [getCategorySelectedStates()]
);
createEffect(
  () =>
    localStorage.setItem(
      "categoryCompletionStates",
      JSON.stringify(getCategoryCompletionStates())
    ),
  [getCategoryCompletionStates()]
);
