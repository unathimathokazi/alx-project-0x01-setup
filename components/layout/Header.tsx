import Link from 'next/link';

const Header: React.FC = () => {
  return (
<<<<<<< HEAD
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
          <Link href="/">Daily Contents</Link>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
=======
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
>>>>>>> 148ea2dbf4ee435579da07149f7e566a0ef24001

export default Header;
