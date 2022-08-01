import { createSignal } from "solid-js";

export const [getElectricityFormInfo, setElectricityFormInfo] = createSignal(
  localStorage.getItem("electricityFormInfo")
    ? JSON.parse(localStorage.getItem("electricityFormInfo"))
    : {
        airconNo: 1,
        airconPower: 1000,
      }
);

export const [getCategorySelectedStates, setCategorySelectedStates] =
  createSignal({
    AC: true,
    lighting: true,
  });

export const [getCategoryCompletionStates, setCategoryCompletionStates] =
  createSignal({
    AC: false,
    fridge: false,
    heater: false,
    lighting: false,
    "washing-machine": false,
  });
