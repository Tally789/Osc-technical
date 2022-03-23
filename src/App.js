import React, {useState, useEffect} from 'react'
import './App.css'
import Card from './Card';
import Footer from './Footer';
import Nav from './Nav';


const App = () => {
  const [data, setData ] = useState([]);

    const url = "https://6221e286666291106a161556.mockapi.io/api/osc/getMockLeads/leads";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
       try { const response = await fetch(url);
        const json = await response.json();
        setData(json);
    } catch (error) {
      console.log(error)
    }

    console.log(data)
  }
    


  return (
    <div className="App">
      <Nav />
      <div class="card--wrapper" >{data.map(item => <Card item={item} key={item.id}/>)}</div>
      <Footer />
    </div>
  );
}

export default App;
