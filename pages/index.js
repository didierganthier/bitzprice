import Layout from "../components/layout";


const Index = (props) => (
  <Layout>
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Welcome to BitzPrice</h1>
      {props.bpi.time.updated}
    </div>
  </Layout>  
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data
  }
};

export default Index;
