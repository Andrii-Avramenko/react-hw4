import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';

import data from './data.json';
import friends from './friends.json';


export const App = () => {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};