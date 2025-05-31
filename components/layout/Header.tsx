import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <Link href="/">ALX Project</Link>
        </div>
        <div className="space-x-4">
          <Link href="/posts">Posts</Link>
          <Link href="/users">Users</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
