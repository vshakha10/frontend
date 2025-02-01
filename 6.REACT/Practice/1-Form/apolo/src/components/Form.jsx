export const Header = () => {
    return (
      <header className="header">
        <h1>Simple Page Layout</h1>
      </header>
    );
  };

export const Image = ()=>{
    return(
       <div className="img">
         <img src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg" className="img1"></img>
         </div> 
    );
};
  
export const MainContent = () => {      
    return (
      <main className="main-content">
        {/* <img src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg" className="img1"></img> */}
        <h2>Welcome to my simple page!</h2>
        <p>This is the main content area where you can add information.</p>
      </main>
    );
  };
  
export const Footer = () => {
    return (
      <footer className="footer">
        <p>© 2025 Simple Page. All rights reserved.</p>
      </footer>
    );
  };
  




