import { useState } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutView } from './components/CheckoutView';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { Product, View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteOrder = () => {
    clearCart();
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <Toaster position="bottom-right" richColors />
      
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        onHomeClick={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <ProductList 
              onAddToCart={addToCart} 
              onViewDetails={handleViewDetails} 
            />
          </>
        )}

        {currentView === 'checkout' && (
          <CheckoutView 
            cart={cart} 
            total={total} 
            onBack={() => setCurrentView('home')} 
            onComplete={handleCompleteOrder}
          />
        )}
      </main>

      <Footer />

      <ProductDetail 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
        total={total}
      />
    </div>
  );
}

export default App;