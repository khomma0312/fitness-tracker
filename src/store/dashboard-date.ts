import { atom, useAtomValue } from 'jotai';

const initDate = new Date();
const dateAtom = atom(initDate);

// タイトルの日付の6ヶ月前の年月を取得
const startDateStrAtom = atom((get) => {
  const date = get(dateAtom);
  const startDate = new Date(date);
  startDate.setMonth(startDate.getMonth() - 6);

  return `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}`;
});

// タイトルの日付の1ヶ月前の年月を取得
const endDateStrAtom = atom((get) => {
  const date = get(dateAtom);
  const endDate = new Date(date);
  endDate.setMonth(endDate.getMonth() - 1);

  return `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}`;
});

export const useTitleDateValue = () => useAtomValue(dateAtom);
export const useStartDateStrValue = () => useAtomValue(startDateStrAtom);
export const useEndDateStrValue = () => useAtomValue(endDateStrAtom);
