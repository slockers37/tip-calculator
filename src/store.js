import { create } from 'zustand'

const useStore = create((set) => ({
  activePercentage: null,
  billAmount: 0,
  numberOfPeople: 0,
  customPercentage: '', // new state for custom input
  setActivePercentage: (value) => set(() => ({ activePercentage: value })),
  setBillAmount: (value) => set(() => ({ billAmount: value })),
  setNumberOfPeople: (value) => set(() => ({ numberOfPeople: value })),
  setCustomPercentage: (value) => set(() => ({ customPercentage: value })), // new setter for custom input
  tipAmountPerPerson: 0,
  totalAmountPerPerson: 0,
  setTipAndTotal: (billAmount, numberOfPeople, tipPercentage) =>
    set(() => {
      // Ensure all values are numbers, default to 0 if not
      billAmount = isNaN(billAmount) ? 0 : billAmount
      numberOfPeople = isNaN(numberOfPeople) ? 1 : numberOfPeople // default to 1 to avoid division by zero
      tipPercentage = isNaN(tipPercentage) ? 0 : tipPercentage

      return {
        tipAmountPerPerson: (billAmount * tipPercentage) / 100 / numberOfPeople,
        totalAmountPerPerson:
          billAmount / numberOfPeople +
          (billAmount * tipPercentage) / 100 / numberOfPeople,
      }
    }),
  reset: () =>
    set(() => ({
      activePercentage: null,
      billAmount: 0,
      numberOfPeople: 1,
      tipAmountPerPerson: 0,
      totalAmountPerPerson: 0,
      customPercentage: '', // reset custom input
    })),
}))

export default useStore
