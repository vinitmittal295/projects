import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Home() {
  const[search, setSearch]=useState("")
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true); // Start loading
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API Response:', data[0] || []); 
      // Inspect the response structure

      // Adjust according to your API response structure
      setFoodItem(data[0] || []); 
      // First element for food items
      setFoodCat(data[1] || []);     // Second element for food categories
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div><Navbar /></div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center " >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button> */}
    </div>

    </div>
    <div className="carousel-item active">
      <img src="https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f5b5885a38.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>    
      </div>

      <div className='container'>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : Array.isArray(foodCat) && foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className='row mb-3' key={data.id}>
              <div className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {Array.isArray(foodItem) && foodItem.length > 0 ? (
                foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filterItems => (
                    <div className='col-12 col-md-6 col-lg-3' key={filterItems._id}>
                      <Card  foodName={filterItems.name}
                      options={filterItems.options[0]}
                      imgSrc={filterItems.img}
                      item={filterItems} /> {/* Pass item to Card component */}
                    </div>
                  ))
              ) : (
                <div>No items found in this category</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories found</div>
        )}
      </div>
      <div><Footer /></div>
    </>
  );
}

export default Home;
