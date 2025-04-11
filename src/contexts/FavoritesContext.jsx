import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    if (!isItemInFavorites(item.id)) {
      setFavorites(prev => [...prev, item]);
      
      // Show toast with image
      toast.success(
        <div className="flex items-center">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-10 h-10 rounded object-cover mr-3" 
          />
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-sm">Added to favorites</p>
          </div>
        </div>,
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const removeFromFavorites = (itemId) => {
    const removedItem = favorites.find(item => item.id === itemId);
    
    if (removedItem) {
      setFavorites(prev => prev.filter(item => item.id !== itemId));
      
      // Show toast with image for removal
      toast.info(
        <div className="flex items-center">
          <img 
            src={removedItem.image} 
            alt={removedItem.title} 
            className="w-10 h-10 rounded object-cover mr-3" 
          />
          <div>
            <p className="font-medium">{removedItem.title}</p>
            <p className="text-sm">Removed from favorites</p>
          </div>
        </div>,
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const isItemInFavorites = (itemId) => {
    return favorites.some(item => item.id === itemId);
  };

  const totalAmount = favorites.reduce((total, item) => total + item.currentBidPrice, 0);

  return (
    <FavoritesContext.Provider value={{
      favorites,
      totalAmount,
      addToFavorites,
      removeFromFavorites,
      isItemInFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}