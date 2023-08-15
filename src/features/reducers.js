import authSlice from './auth/authSlice';
import itemsSlice from './items/itemsSlice';
import userSlice from './user/userSlice';
import networkInfoSlice from './networkInfo/networkInfoSlice';
import appStateSlice from './appState/appStateSlice';

export default {
  appState: appStateSlice,
  auth: authSlice,
  items: itemsSlice,
  user: userSlice,
  networkInfo: networkInfoSlice,
};
