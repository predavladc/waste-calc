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
        lights: [
          {
            power: 35,
            avgUsage: 4,
          },
        ],
        washingMachines: [
          {
            power: 500,
            avgUsage: 1,
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
    lighting: true,
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

export const addHeater = () => {
  setElectricityFormInfo((p) => ({
    ...p,
    heaters: [
      ...p.heaters,
      {
        power: 4000,
        avgUsage: 3,
      },
    ],
  }));
};
export const addLight = () => {
  setElectricityFormInfo((p) => ({
    ...p,
    lights: [
      ...p.lights,
      {
        power: 35,
        avgUsage: 4,
      },
    ],
  }));
};
export const addWashingMachine = () => {
  setElectricityFormInfo((p) => ({
    ...p,
    washingMachines: [
      ...p.washingMachines,
      {
        power: 500,
        avgUsage: 1,
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
  }));
};
export const updateHeater = (i, label, value) => {
  const _updatedHeaters = [...getElectricityFormInfo().heaters];
  _updatedHeaters[i][label] = value;

  setElectricityFormInfo((p) => ({
    ...p,
    heaters: _updatedHeaters,
  }));
};

export const updateLight = (i, label, value) => {
  const _updatedLight = [...getElectricityFormInfo().lights];
  _updatedLight[i][label] = value;

  setElectricityFormInfo((p) => ({
    ...p,
    lights: _updatedLight,
  }));
};

export const updateWashingMachine = (i, label, value) => {
  const _updatedWashingMachine = [...getElectricityFormInfo().washingMachines];
  _updatedWashingMachine[i][label] = value;

  setElectricityFormInfo((p) => ({
    ...p,
    washingMachines: _updatedWashingMachine,
  }));
};

//Radio buttons onInput
export const tryingLightThing = (i, label, value) => {
  const _targetLight = [...getElectricityFormInfo().lights];
  _targetLight[i][label] = value;
  console.log(_targetLight);

  setElectricityFormInfo((p) => ({
    ...p,
    lights: _targetLight,
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
    };
    console.log(newState);
    return newState;
  });
};
export const deleteHeater = (i) => {
  console.log(i);
  setElectricityFormInfo((p) => {
    const newState = {
      ...p,
      heaters: p.heaters.filter((ac, j) => {
        console.log({ i, j });
        return j !== i;
      }),
    };
    console.log(newState);
    return newState;
  });
};
export const deleteLight = (i) => {
  console.log(i);
  setElectricityFormInfo((p) => {
    const newState = {
      ...p,
      lights: p.lights.filter((ac, j) => {
        console.log({ i, j });
        return j !== i;
      }),
    };
    console.log(newState);
    return newState;
  });
};

export const deleteWashingMachine = (i) => {
  console.log(i);
  setElectricityFormInfo((p) => {
    const newState = {
      ...p,
      washingMachines: p.washingMachines.filter((ac, j) => {
        console.log({ i, j });
        return j !== i;
      }),
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

export const getHeaterMonthEst = getElectricityFormInfo().heaters.reduce(
  (total, heater) => {
    return Math.round(total + (heater.power * heater.avgUsage * 30) / 1000);
  },
  0
);
export const getLightMonthEst = getElectricityFormInfo().lights.reduce(
  (total, light) => {
    return Math.round(total + (light.power * light.avgUsage * 30) / 1000);
  },
  0
);
export const getWashingMachineEst =
  getElectricityFormInfo().washingMachines.reduce((total, WashingMachine) => {
    return Math.round(
      total + (WashingMachine.power * WashingMachine.avgUsage * 30) / 1000
    );
  }, 0);

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
