import { useEffect } from 'react'; // Don't Remove This Import
import Default_Screen from './components/Default_Screen';


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './main.js'; 
    document.body.appendChild(script);  
    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <>

        <Default_Screen />{/* Remove this Default_Screen component frome here &
        delete it from " ./components/Default_Screen" to start coding your project! */}

    </>
  );
}

export default App;