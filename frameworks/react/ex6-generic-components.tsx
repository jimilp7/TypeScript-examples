import * as React from 'react';

interface ListItem {
  id: string | number;
}

interface ListProps<T extends ListItem> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onItemClick?: (item: T) => void;
  keyExtractor?: (item: T) => string | number;
}

function List<T extends ListItem>({
  items,
  renderItem,
  onItemClick,
  keyExtractor = (item) => item.id
}: ListProps<T>): React.ReactElement {
  return (
    <ul>
      {items.map(item => (
        <li
          key={keyExtractor(item)}
          onClick={() => onItemClick?.(item)}
          style={{ cursor: onItemClick ? 'pointer' : 'default' }}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

interface Product extends ListItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface User extends ListItem {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

const GenericListExample: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Book', price: 20, category: 'Education' },
    { id: 3, name: 'Coffee', price: 5, category: 'Food' }
  ];

  const users: User[] = [
    { id: 'user1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 'user2', name: 'Bob', email: 'bob@example.com', role: 'user' },
    { id: 'user3', name: 'Charlie', email: 'charlie@example.com', role: 'user' }
  ];

  const handleProductClick = (product: Product): void => {
    alert(`Product: ${product.name} - $${product.price}`);
  };

  const handleUserClick = (user: User): void => {
    alert(`User: ${user.name} (${user.role})`);
  };

  return (
    <div>
      <h2>Products</h2>
      <List
        items={products}
        renderItem={(product) => (
          <div>
            <strong>{product.name}</strong> - ${product.price}
            <br />
            <small>{product.category}</small>
          </div>
        )}
        onItemClick={handleProductClick}
      />

      <h2>Users</h2>
      <List
        items={users}
        renderItem={(user) => (
          <div>
            <strong>{user.name}</strong>
            <br />
            <small>{user.email} ({user.role})</small>
          </div>
        )}
        onItemClick={handleUserClick}
      />
    </div>
  );
};

export default GenericListExample;