import React, { useState } from 'react'
import FilterSidebar from '../components/FilterSidebar';
import Header from '../components/Header';
import UserList from '../components/ UserList';
import UserDetailPanel from '../components/UserDetailPanel';

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1">
        <FilterSidebar />
        
          <UserList />
        
        {/* <UserList setSelectedUser={setSelectedUser} /> */}
        <UserDetailPanel />
      </div>
    </div>
  )
}
