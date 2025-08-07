import {
  Greetings,
  Advantages,
  Reviews,
  Pricing,
  Questions,
  Layout,
} from '@/components';

function App() {
  return (
    <>
      <Layout>
        <Greetings />
        <Advantages />
        <Reviews />
        <Pricing />
        <Questions />
      </Layout>
    </>
  );
}

export default App;
