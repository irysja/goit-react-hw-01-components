import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user.json';
import stats from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Profile from './profile.js';
import Statistics from './statistics.js';
import FriendList from './friends.js';
import TransactionHistory from './transaction.js';

const App = root => {
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

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
