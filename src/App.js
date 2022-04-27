import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import CenterComponent from './Components/CenterComponent';
import Items from './Components/Items';
import Summary from './Components/Summary';
import ShippingDetails from './Components/ShippingDetails';

function App() {
  const [isPlacingOrder,setIsPlacingOrder] = useState(false);
  const [currTotalAmount,setCurrTotalAmount] = useState(0);
  var ItemsList = [
    {
      Name:"Sushi",
      Description:"Finest Fish and Veggies",
      Amount:"22.99"
    },
    {
      Name:"Schnitzel",
      Description:"A german speciality!",
      Amount:"16.50"
    },
    {
      Name:"Barbecue Burger",
      Description:"American, raw, meaty",
      Amount:"12.99"
    },
    {
      Name:"Green Bowl",
      Description:"Healthy...and green...",
      Amount:"18.99"
    }
  ];
  const [isCartClick,setCartClick] = useState(false);
  const [selectedItems,setSelectedItems] = useState('');

  function onAddClickHandler(item,quantity)
  {
    setSelectedItems( (previousState) => {
      for(var i=0;i<previousState.length;i++)
      {
        if(previousState[i].Name === item.Name)
        {
          previousState[i].Quantity = quantity;
          return [...previousState];
        }
      }
      return ([...previousState,{Name:item.Name,Description:item.Description,Amount:item.Amount,Quantity:quantity}]);
    })
  }

  function onCartClick()
  {
    setCartClick(true);
    setIsPlacingOrder(false);
  }
  function onCloseClick()
  {
    setCartClick(false);
    setIsPlacingOrder(false);
  }
  function placeOrder(total)
  {
    setCurrTotalAmount(total);
    setIsPlacingOrder(true);
    setCartClick(false);
  }
  function onSuccessfulOrderPlaced()
  {
    setCartClick(false);
    setIsPlacingOrder(false);
    setSelectedItems('');
  }
  function onAddOrRemove(item,quantity)
  {
      setSelectedItems( (previousState) => {
        for(var i=0;i<previousState.length;i++)
        {
          if(previousState[i].Name === item.Name)
          {
            if(quantity === 0)
            {
              var currentItems = [...previousState];
              currentItems.splice(i,1);
              return[...currentItems];
            }
            else
            {
              previousState[i].Quantity = quantity;
              return [...previousState];
            }
          }
        }
      });
    }
  return (
    <div className='main-container'>
      {isCartClick === true ? <Summary selectedItems={selectedItems} onCloseClick={onCloseClick} onAddOrRemove={onAddOrRemove} placeOrder={placeOrder} />:null}
      <Header selectedItems={selectedItems} onCartClick={onCartClick} />
      <div className={`image-container ${isCartClick===true ? "blur": ""} `}>
        <img src='./food.jpg' alt='No Image'/>
      </div>
      {isPlacingOrder === false ? <div className='show-items'>
        <CenterComponent isCartClick={isCartClick} />
        <div className={`items-main-container ${isCartClick===true ? "blur": ""} `}>
        {ItemsList.map((item) => {
          return <Items itemdetails={item} onAddClickHandler={onAddClickHandler} />
        })}
        </div>
        </div> :
        <ShippingDetails onCloseClick={onCloseClick} onSuccessfulOrderPlaced={onSuccessfulOrderPlaced} currTotalAmount={currTotalAmount}/>
      }
      
    </div>
  );
}

export default App;
