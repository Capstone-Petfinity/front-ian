import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist();
export const uuidState = atom({
  key: 'uuidState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
