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
        heaters: [
          {
            power: 4000,
            avgUsage: 3,
          },
        ],
      }
);

// electricity.aircons[5].power = 1000

export const [getCategorySelectedStates, setCategorySelectedStates] =
  createSignal({
    AC: true,
    fridge: true,
    heater: true,
  });

// Add Button Section
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

export const addFridge = () => {
  setElectricityFormInfo((p) => ({
    ...p,
    fridges: [
      ...p.fridges,
      {
        power: 150,
        avgUsage: 24,
      },
    ],
  }));
};

//Update section

export const updateAircon = (i, label, value) => {
  const _updatedAircons = [...getElectricityFormInfo().aircons];
  _updatedAircons[i][label] = value;

  setElectricityFormInfo((p) => ({
    ...p,
    aircons: _updatedAircons,
    //index === i ? { ...aircon, [label]: value } : aircon
  }));
};
export const updateFridge = (i, label, value) => {
  const _updatedFridges = [...getElectricityFormInfo().fridges];
  _updatedFridges[i][label] = value;

  setElectricityFormInfo((p) => ({
    ...p,
    fridges: _updatedFridges,
    //index === i ? { ...aircon, [label]: value } : aircon
  }));
};

//Delete section
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
export const deleteFridge = (i) => {
  console.log(i);
  setElectricityFormInfo((p) => {
    const newState = {
      ...p,
      fridges: p.fridges.filter((ac, j) => {
        console.log({ i, j });
        return j !== i;
      }),
      //index === i ? { ...aircon, [label]: value } : aircon
    };
    console.log(newState);
    return newState;
  });
};

//States

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
    return total + (aircon.power * aircon.avgUsage * 30) / 1000;
  },
  0
);

export const getfridgesPowerEst = getElectricityFormInfo().fridges.reduce(
  (total, fridge) => {
    return Math.round(total + (fridge.power * fridge.avgUsage * 30) / 2 / 1000);
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
