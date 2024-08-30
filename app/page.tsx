import Link from 'next/link';

const Home: React.FC = (): JSX.Element => {
  return (
    <main>
      <h1>First page right here</h1>
      <Link href="/users">Users</Link>
    </main>
  );
};
export default Home;
