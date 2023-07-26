import user from '../user/user.json';
import stats from '../data/data.json';
import friends from '../friends/friends.json';
import FriendList from '../friends/friends.js';
import transactions from '../transaction/transactions.json';
import TransactionHistory from '../transaction/transaction.js';
import Profile from '../profile/profile.js';
import Statistics from '../statistics/statistics.js';


const App = ({ app }) => {
  return (
    <div>
      <Profile
        username={user['username']}
        tag={user.tag}
        location={user['location']}
        avatar={user.аватар}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;