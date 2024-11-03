// components/Header.js
export default function Header() {
  return (
    <header className="header">
      <h1>Dupamine Perfumes</h1>
      <style jsx>{`
        .header {
          padding: 20px;
          text-align: center;
          background-color: #D4AF37;
          color: #fff;
        }
        h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 2rem;
          font-weight: 500;
        }
      `}</style>
    </header>
  )
}

