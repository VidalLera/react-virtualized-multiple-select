import { useState, useEffect } from 'react';
import { Item } from '../Item/Item';

export const List = ({accounts}) => {

  const itemHeight = 30
  const numberRenders = 30 + 1
  
  const [userAccounts, setUserAccounts] = useState({rendersUp: 0, rendersDown:numberRenders});
  const [userSelectedAccounts, setUserSelectedAccounts] = useState([]);
  const totalHeight = itemHeight * accounts.length + "px";
  console.log(totalHeight)
  const placeHolderBottom = (totalHeight - numberRenders - userAccounts.rendersUp - userAccounts.rendersDown);
  const placeHolderTop = (totalHeight - placeHolderBottom) + 'px';

  console.log({placeHolderBottom, placeHolderTop});

  const handleClick = (value) => {
    console.log(value);
    setUserSelectedAccounts(userAccounts.concat(value));
  }

  const renderItem = (id) => id > userAccounts.rendersUp && id < userAccounts.rendersDown

  const handleScroll = (e) => {
    console.log(e.target.scrollTop)
    const indexItems = e.target.scrollTop / itemHeight;
    const rendersUp = indexItems - numberRenders < 0 ? 0 : indexItems - numberRenders;
    const rendersDown = indexItems + numberRenders > accounts.length ? 0 : indexItems + numberRenders;
    setUserAccounts({rendersUp, rendersDown})
  }

  return (
    <div 
      style={
        {
          float: 'left',
          height: "250px",
          width:"250px",
        }
      }
      
        onScrollCapture={handleScroll}
      >
        <div
        style={
          {
            "display": "flex",
            "flexDirection": "column",
          }
        }
        >

        <div

        style={
          {
            "flexGrow": 1, 
            overflowY:"auto"
          }
        }
        >

      {
        accounts.map(account => 
          <Item 
          shouldRender={renderItem(account.id)} 
          key={account.id} 
          click={handleClick} 
          value={account.value}
          >
          {account.id} - {account.name}
        </Item>
      )}
      </div>
        </div>
    </div>
  )
}