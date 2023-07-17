import React, {useState, useEffect} from 'react';
import './App.css';

const initialState = {
  title: "MAIN \nTITLE",
  desc: "This is the main text"
} 

const App = () => {
  const [title, setTitle] = useState(initialState.title)
  const [desc, setDesc] = useState(initialState.desc)
  const [activeDashboard, setActiveDashboard] = useState<boolean | undefined>()

  useEffect(() => {
    setActiveDashboard(true)
    localStorage.setItem("active_dashboard", JSON.stringify(true))
  }, [])

  const handleMouseEnter = (e: React.MouseEvent) => {
    // This can be made more efficiently
    if(e.currentTarget.id.includes('style-guides')) {
      setTitle('TITLE \n1')
      setDesc('Rollover text 1 here')
    } else if(e.currentTarget.id.includes('one-sheets')) {
      setTitle('TITLE \n2')
      setDesc('Rollover text 2 here')
    }
  }

  const handleMouseLeave = () => {
    setTitle(initialState.title)
    setDesc(initialState.desc)
  }

  const handleStorageToggle = () => {
    setActiveDashboard(!activeDashboard)
    localStorage.setItem('active_dashboard', JSON.stringify(activeDashboard))
  }

  useEffect(() => {
    activeDashboard !== undefined && console.log(`Dashboard Active = ${activeDashboard}`)
  }, [activeDashboard])

  return (
    <div className="app">
      <div className="black">
          <h2><span id="sidebar-title">{title}</span></h2>
          <p><span id="sidebar-desc">{desc}</span></p>
        </div>

        {/* ROLLOVER TRIGGERS */}
        {/* NOTE  */}
        {/* These anchor tags could be made into a reusable component  */}
        <a href="" id="style-guide-link">
          <div 
            id="style-guides" 
            className="nav-box" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="nav-box-txt">TITLE 1</h3>
          </div>
        </a>
        <a href="">
          <div 
            id="one-sheets" 
            className="nav-box"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="nav-box-txt">TITLE 2</h3>
          </div>
        </a>

        {/* CHANGE THE LOCAL STORAGE TOGGLE DIV  */}
        <div 
          id='deactivate' 
          className='black nav-box active-dashboard'
          onClick={handleStorageToggle}
        >
          <h2>COL 2</h2>
        </div>
    </div>
  );
}

export default App;
