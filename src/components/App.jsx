import user from '../data/user.json';
import Profile from './Profile/Profile';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics';
import friends from '../data/friends.json';
import FriendsList from './Friends/FriendsList';
import transactions from '../data/transactions.json';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#d1d1d1',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />

      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
