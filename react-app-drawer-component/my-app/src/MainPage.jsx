import AppDrawer from './AppDrawer';
import { useState } from 'react';

export default function MainPage({items}) {
  const [pageHeader, setPageHeader] = useState('')

  function handleClickPage(header) {
    setPageHeader(header);
  }

  return (
    <div className='main-page'>
      <AppDrawer items={items} onClickPage={handleClickPage}/>
      <h2>{pageHeader}</h2>
    </div>
  )
}
