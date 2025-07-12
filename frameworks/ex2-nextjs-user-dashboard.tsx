import React, { useState, useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface DashboardProps {
  users: User[];
  posts: Post[];
}

const UserCard: React.FC<{ user: User; posts: Post[] }> = ({ user, posts }) => {
  const userPosts = posts.filter(post => post.userId === user.id);

  return (
    <div style={{
      border: '1px solid #e1e5e9',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{user.name}</h3>
      <div style={{ marginBottom: '15px' }}>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>
          <strong>Email:</strong> {user.email}
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>
          <strong>Username:</strong> @{user.username}
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>
          <strong>Website:</strong> {user.website}
        </p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#34495e' }}>Company</h4>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>
          <strong>{user.company.name}</strong>
        </p>
        <p style={{ margin: '5px 0', fontSize: '13px', fontStyle: 'italic', color: '#95a5a6' }}>
          "{user.company.catchPhrase}"
        </p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#34495e' }}>Address</h4>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>
          {user.address.street}, {user.address.suite}<br />
          {user.address.city} {user.address.zipcode}
        </p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 10px 0', color: '#34495e' }}>
          Posts ({userPosts.length})
        </h4>
        {userPosts.slice(0, 2).map(post => (
          <div key={post.id} style={{
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            borderLeft: '3px solid #3498db'
          }}>
            <h5 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#2c3e50' }}>
              {post.title}
            </h5>
            <p style={{ margin: 0, fontSize: '12px', color: '#7f8c8d' }}>
              {post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}
            </p>
          </div>
        ))}
        {userPosts.length > 2 && (
          <p style={{ fontSize: '12px', color: '#95a5a6', fontStyle: 'italic' }}>
            ...and {userPosts.length - 2} more posts
          </p>
        )}
      </div>
    </div>
  );
};

const UserDashboard: NextPage<DashboardProps> = ({ users, posts }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const totalPosts = posts.length;
  const totalUsers = users.length;
  const avgPostsPerUser = totalUsers > 0 ? (totalPosts / totalUsers).toFixed(1) : '0';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>
          User Dashboard
        </h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>
          Next.js TypeScript Dashboard with Static Generation
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#3498db',
          color: 'white',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Total Users</h3>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{totalUsers}</p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#e74c3c',
          color: 'white',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Total Posts</h3>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{totalPosts}</p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#2ecc71',
          color: 'white',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Avg Posts/User</h3>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{avgPostsPerUser}</p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Search users by name, email, or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            border: '1px solid #bdc3c7',
            borderRadius: '8px',
            outline: 'none'
          }}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} posts={posts} />
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ color: '#7f8c8d', fontSize: '18px' }}>
            No users found matching "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<DashboardProps> = async () => {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);

    const users: User[] = await usersResponse.json();
    const posts: Post[] = await postsResponse.json();

    return {
      props: {
        users,
        posts
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    
    return {
      props: {
        users: [],
        posts: []
      },
      revalidate: 60
    };
  }
};

export default UserDashboard;