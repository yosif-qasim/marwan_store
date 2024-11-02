// pages/index.js

import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { FaWhatsapp } from 'react-icons/fa';

// Contentful client setup
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products from Contentful
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await client.getEntries({ content_type: 'product' });
        setProducts(res.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  // Format WhatsApp message
  const formatWhatsAppMessage = (product) => {
    return `https://wa.me/201008203165?text=I%20want%20to%20buy%20${encodeURIComponent(
      product.fields.name
    )}%20-%20${encodeURIComponent(product.fields.description)}.%20Price:%20${product.fields.price}%20EGP`;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Product Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div
            key={product.sys.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              margin: '10px',
              padding: '20px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={product.fields.image.fields.file.url}
              alt={product.fields.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>{product.fields.name}</h3>
            <p>{product.fields.description}</p>
            <p><strong>{product.fields.price} EGP</strong></p>
            <a
              href={formatWhatsAppMessage(product)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <FaWhatsapp style={{ marginRight: '8px' }} /> Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

