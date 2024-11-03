// components/ProductCard.js
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  const { name, description, price, image } = product.fields

  return (
    <div className="product-card">
      <Image src={`https:${image.fields.file.url}`} alt={name} width={300} height={400} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price} EGP</p>
      <Link href={`https://wa.me/201008203165?text=I'm interested in ${name} (${description}) priced at ${price} EGP`}>
        <button className="btn buy-now">
          <span className="whatsapp-icon">📲</span> Buy Now
        </button>
      </Link>
      <style jsx>{`
        .product-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #333;
          margin: 15px 0;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin: 10px 0;
        }

        .price {
          font-size: 1.2rem;
          font-weight: bold;
          color: #D4AF37;
          margin-bottom: 20px;
        }

        .buy-now {
          display: flex;
          align-items: center;
          font-size: 1rem;
          font-weight: 500;
        }

        .whatsapp-icon {
          margin-right: 8px;
        }
      `}</style>
    </div>
  )
}

