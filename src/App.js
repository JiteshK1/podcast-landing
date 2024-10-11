import { FaPlay } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
function App() {

  const [chartData, setChartData] = useState({ dates: [], via: [], main: [] });

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://viaje.ai/mainvia_api/');
        const result = await response.json();
        console.log(result);  // Check the structure
    
        const data = result.data;  // Access the correct array
    
        if (Array.isArray(data)) {
          const dates = data.map(item => item[0]);         // Dates
          const via = data.map(item => item[1]);           // Via booking count
          const main = data.map(item => item[2]);          // Main booking count
    
          setChartData({ dates, via, main });
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, []);

  // Highcharts configuration options
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Bookings Overview',
    },
    xAxis: {
      categories: chartData.dates, // Dates on X-axis
      title: {
        text: 'Dates',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Bookings',
      },
    },
    series: [
      {
        name: 'Via',
        data: chartData.via, // Data for "Via" bookings
        color: '#9fbbe8',
      },
      {
        name: 'Main',
        data: chartData.main, // Data for "Main" bookings
        color: '#5a5a5a',
      },
    ],
  };
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function to show/hide mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="font-sans antialiased">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">
  <span className="text-black">Design</span>
  <span className="text-purple-600">_pod</span>
</div>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-600">Home</a>
          <a href="#product" className="text-gray-600">Product</a>
          <a href="#pricing" className="text-gray-600">Pricing</a>
          <a href="#faq" className="text-gray-600">FAQ</a>
          <a href="#blog" className="text-gray-600">Blog</a>
        </div>
        <div className="hidden md:flex space-x-4">
  <a href="/login" className="px-4 py-2 bg-gray-100 text-gray-600 font-bold rounded">Log in</a>
  <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded">Sign up</a>
</div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-purple-600 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Show when 'isMobileMenuOpen' is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-50 py-4">
          <a href="/login" className="text-gray-600 mb-4">Log in</a>
          <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded">Sign up</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 md:p-12 bg-gray-50">
        <div className="text-center lg:text-left space-y-6 lg:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            The best place to listen to your favorite <span className="text-purple-600">podcasts</span>.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg flex items-center space-x-2">
  <span>Subscribe Now</span>
  <FaChevronDown className="h-4 w-4" />
</button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg flex items-center space-x-2">
           <FaPlay className="h-5 w-5" />
             <span>Explore</span>
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="flex space-x-4 mt-10 lg:mt-0">
        <section className="flex space-x-4 mt-10 lg:mt-0">
      <img 
        src="person1.jpg" 
        alt="Happy Listener 1" 
        className="capsule" 
      />
      <img 
        src="person2.jpg" 
        alt="Happy Listener 2" 
        className="capsule" 
      />
    </section>
        </div>
      </section>

    {/* Supported Platforms */}
<section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 py-10 bg-white">
  <span className="mr-4">Supported by:</span>
  <div className="flex items-center space-x-2">
    <img src="spotify.png" alt="Spotify" className="h-8 w-auto" />
    <span>Spotify</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="pdcast.png" alt="Google Podcasts" className="h-8 w-auto" />
    <span>Google Podcasts</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="youtube.jpg" alt="YouTube" className="h-8 w-auto" />
    <span>YouTube</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="slack.png" alt="Slack" className="h-8 w-auto" />
    <span>Slack</span>
  </div>
</section>

      
      {/* New Section: Discover Your Favorite Podcasts */}
      <section className="p-8 md:p-12 bg-white text-center lg:text-left">
  <div className="max-w-2xl mx-auto lg:max-w-full flex flex-col lg:flex-row items-center lg:items-start justify-between">
    <div className="text-center lg:text-left space-y-4 lg:max-w-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Discover your favorite <span className="text-purple-600">podcasts</span>
      </h2>
      <p className="text-gray-600">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    {/* Decorative Image/Icons */}
    <div className="mt-8 lg:mt-0 ml-4"> {/* Added ml-4 for left margin */}
      <img src="star.png" alt="Decorative Icon" className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 object-contain" /> {/* Increased size */}
    </div>
  </div>
</section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
    Bookings Chart
  </h1>
  
  <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg">
    {chartData.dates.length > 0 ? (
      <HighchartsReact highcharts={Highcharts} options={options} />
    ) : (
      <div className="text-center text-gray-500">Loading data...</div>
    )}
  </div>
</div>
<section className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-6 py-10 lg:px-16 bg-gray-50">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="man2.jpg"
          alt="Record your own voice"
          className="rounded-lg shadow-lg w-3/4 lg:w-full"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Record your own voice
        </h2>
        <p className="text-gray-600 mb-6">
          All social icons are property of their respective owners. Please read
          the guidelines for use, brand guidelines, and any other terms of use
          from the respective owners provided below before using these icons in
          designs.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 4 rounded-md text-sm sm:text-base font-medium hover:bg-purple-700 transition mb-4 sm:mb-2">
          Learn More
        </button>
      </div>
    </section>

    
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:px-16 bg-pink-50">
      {/* Left Side: Text Content */}
      <div className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Easy to listen anytime and anywhere
        </h2>
        <p className="text-gray-600">
          All social icons are property of their respective owners. Please read
          the guidelines for use, brand guidelines, and any other terms.
        </p>
      </div>

     {/* Right Side: Image Grid */}
     <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-xs sm:max-w-sm lg:max-w-lg">
    {/* First Image */}
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex items-center justify-center">
      <img
        src="happy.jpg"
        alt="Happy person"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
    {/* Second Image */}
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex items-center justify-center">
      <img
        src="smiling.png"
        alt="Smiling person"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
    {/* Third Image (Spanning across two columns) */}
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex items-center justify-center col-span-2 row-span-2">
      <img
        src="Exited.jpg"
        alt="Excited person"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
</div>
</div>

    </section>
    
    </div>
  );
}

export default App;
