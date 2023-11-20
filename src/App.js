import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  let food=[
    { id:1,
    name:"Hotel Vairamaligai",
    rating:"4.8",
    cuisine:"South Indian,Chinese,North India ",
    amount:400,
    foodtyp:"Non-veg"
  },
  { id:2,
    name:"Hotel Banu Birunthavan",
    rating:"4.0",
    cuisine:"South Indian,North India ",
    amount:300,
    foodtyp:"Pure veg"
    },
    { id:3,
      name:"Arabian Hot Grill",
      rating:"4.1",
      cuisine:"South Indian,Chinese,North India ",
      amount:400,
      foodtyp:"Non-veg"
    },
    { id:4,
      name:"Annapoorna Hotel",
      rating:"4.0",
      cuisine:"South Indian,Chinese,North India ",
      amount:250,
      foodtyp:"Pure veg"
    },
    { id:5,
      name:"Anjappar",
      rating:"3.7",
      cuisine:"South Indian,Chinese,North India ",
      amount:350,
      foodtyp:"Non-veg"
    },
    { id:6,
      name:"Hotel Arya Bhavan",
      rating:"4.2",
      cuisine:"South Indian,Chinese,North India ",
      amount:320,
      foodtyp:"Pure veg"
    },
    { id:7,
      name:"Hotel Sri Madhuram",
      rating:"4.4",
      cuisine:"South Indian,Chinese,North India ",
      amount:280,
      foodtyp:"Pure veg"
    },
    { id:8,
      name:"Hotel New Ruchi",
      rating:"3.1",
      cuisine:"South Indian,Chinese",
      amount:280,
      foodtyp:"Non-veg"
    },
    { id:9,
      name:"KFC",
      rating:"4.1",
      cuisine:"Burgers,chinese",
      amount:350,
      foodtyp:"Non-veg"
    },
    { id:10,
      name:"Kasali Hotel",
      rating:"3.8",
      cuisine:"South Indian,Chinese,North Indian",
      amount:350,
      foodtyp:"Non-veg"
    },
    { id:11,
      name:"Hotel Saravana Bhava",
      rating:"4.3",
      cuisine:"South Indian,Chinese",
      amount:200,
      foodtyp:"Pure veg"
    },
    { id:12,
      name:"Dindigul Thalappakatti",
      rating:"4.0",
      cuisine:"South Indian,Chinese",
      amount:600,
      foodtyp:"Non-veg"
    },
    { id:13,
      name:"Hotel Anandhabhavan",
      rating:"3.9",
      cuisine:"South Indian,Chinese,North Indian",
      amount:250,
      foodtyp:"Pure veg"
    },
    { id:14,
      name:"Hotel Everest",
      rating:"2.3",
      cuisine:"South Indian,Chinese",
      amount:280,
      foodtyp:"Non-veg"
    },
    { id:15,
      name:"Aasife Biriyani",
      rating:"4.1",
      cuisine:"South Indian,Chinese,North Indian",
      amount:380,
      foodtyp:"Non-veg"
    },
    { id:16,
      name:"Hotel Aryaas Grand",
      rating:"4.4",
      cuisine:"South Indian,Chinese,North Indian",
      amount:250,
      foodtyp:"Pure veg"
    },
    { id:17,
      name:"Kasi Vilas Restaurant",
      rating:"4.2",
      cuisine:"South Indian,Chinese,North Indian",
      amount:250,
      foodtyp:"Non-veg"
    },
    { id:18,
      name:"Hotel Sri Amuthaas",
      rating:"3.8",
      cuisine:"South Indian,Chinese,North Indian",
      amount:200,
      foodtyp:"Pure veg"
    },
    { id:19,
      name:"Hotel Varnams",
      rating:"4.1",
      cuisine:"South Indian,Chinese,North Indian",
      amount:400,
      foodtyp:"Non-veg"
    },
    { id:20,
      name:"Hotel Aryaas Grand",
      rating:"4.4",
      cuisine:"South Indian,Chinese,North Indian",
      amount:250,
      foodtyp:"Pure veg"
    },
]
  return (
    <div className="App">
      <Card details={food} />
      
    </div>
  );
}

export default App;
