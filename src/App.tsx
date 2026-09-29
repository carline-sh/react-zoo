import { useState } from 'react';

  const animals = [{name: 'Koala', src: 'koala.jpg'}, {name: 'Otter', src: 'ottor.jpg'}, {name:'Panda', src: 'panda.webp'}, {name: 'Red panda', src: 'rodepanda.jpg'}, {name:'Meerkat', src: 'stokstaart.webp'}];

function App() {
  const [index, setIndex] = useState(0);

  function volgende() {
    let nextIndex = index + 1;
    if (nextIndex > animals.length - 1) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
  }

  function vorige() {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
      nextIndex = animals.length - 1;
    }
    setIndex(nextIndex);
  }


  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-xl p-10">Zoo</h1>
        <div className="px-10 flex items-center flex-col">
          <img src={"public/" + animals[index].src} alt={animals[index].name} className="w-100 mb-4" />
        </div>
      </div>
        <div className="mx-auto max-w-60">
        <span>you are now looking at {animals[index].name}</span>
      </div>
      <div className='mx-auto max-w-40'>
        <button
        type="button"
        className="counter"
        onClick={vorige}
      >
        vorige 
      </button>

      <button
        type="button"
        className="counter"
        onClick={volgende}
      >
         volgende
      </button>
      </div>
    </>
  )
}

export default App
