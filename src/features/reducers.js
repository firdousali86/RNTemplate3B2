import authSlice from './auth/authSlice';
import itemsSlice from './items/itemsSlice';
import userSlice from './user/userSlice';
import networkInfoSlice from './networkInfo/networkInfoSlice';
import appStateSlice from './appState/appStateSlice';
import feedsSlice from './feeds/feedsSlice';
import {todosApi} from '../config/todosApi';

export default {
  todos: todosApi.reducer,
  appState: appStateSlice,
  auth: authSlice,
  items: itemsSlice,
  user: userSlice,
  networkInfo: networkInfoSlice,
  feeds: feedsSlice,
};
