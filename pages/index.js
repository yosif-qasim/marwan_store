// pages/index.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
export async function getStaticProps() {
  // Initialize the Contentful client
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch entries of type 'product'
  const res = await client.getEntries({ content_type: 'product' })

  // Check if products were retrieved
  const products = res.items || []

  return {
    props: { products }, // Pass products to the page component as props
    revalidate: 1, // Optional: Enable ISR with revalidation every 1 second
  }
}
export default function HomePage({ products = [] }) {  // Set default value to an empty array
  return (
    <div className="container">
      <Header />
      <main className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.sys.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>  // Display a message if there are no products
        )}
      </main>
      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
          margin-top: 20px;
        }

        main {
          flex: 1;
        }
      `}</style>
    </div>
  )
}

