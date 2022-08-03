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

// electricity.aircons[5].power = 1000

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
        power: 900,
        avgUsage: 3,
      },
    ],
  }));
};

export const updateAircon = (i, label, value) => {
  const _updatedAircons = [...getElectricityFormInfo().aircons];
  _updatedAircons[i][label] = value;

  setElectricityFormInfo((p) => ({
    ...p,
    aircons: _updatedAircons,
    //index === i ? { ...aircon, [label]: value } : aircon
  }));
};
export const deleteAircon = (i) => {
  console.log(i);
  setElectricityFormInfo((p) => {
    const newState = {
      ...p,
      aircons: p.aircons.filter((ac, j) => {
        console.log({ i, j });
        return j !== i;
      }),
      //index === i ? { ...aircon, [label]: value } : aircon
    };
    console.log(newState);
    return newState;
  });
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
    return (total + aircon.power * aircon.avgUsage * 30) / 1000;
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
