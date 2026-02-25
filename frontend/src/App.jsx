import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Добро пожаловать в интернет-магазин!</h1>
        <p>Лучшие товары по лучшим ценам</p>
      </header>
      
      <main style={{ padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {/* Товар 1 */}
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Товар 1</h3>
            <p>Описание товара 1</p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>1000 ₽</p>
            <button style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              В корзину
            </button>
          </div>
          
          {/* Товар 2 */}
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Товар 2</h3>
            <p>Описание товара 2</p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>2000 ₽</p>
            <button style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              В корзину
            </button>
          </div>
          
          {/* Товар 3 */}
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Товар 3</h3>
            <p>Описание товара 3</p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>3000 ₽</p>
            <button style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              В корзину
            </button>
          </div>
        </div>
      </main>
      
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f5f5f5', marginTop: '20px' }}>
        <p>© 2026 Интернет-магазин. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;