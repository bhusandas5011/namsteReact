const Title = () => (
    <a href="/">
    <img
    className="logo" 
     alt="Food Items" 
     src="https://www.pngkey.com/png/detail/428-4282931_uber-for-food-delivery-food-delivery.png"></img>
     </a>
  );

const Header = () => {
    return (
        <div className="header">
            <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            
        </div>
        </div>
    );
};

export default Header;