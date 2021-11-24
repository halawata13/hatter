import { atom } from 'recoil';

export const sideNavStateAtom = atom({
  key: 'SIDE_NAV_STATE',
  default: {
    open: false,
  },
});
