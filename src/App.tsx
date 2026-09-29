import { useState } from 'react';

const animals = [
{ name: 'Koala', src: 'koala.jpg', wikipediaLink: 'https://en.wikipedia.org/wiki/Koala' },
{ name: 'Otter', src: 'ottor.jpg', wikipediaLink: 'https://en.wikipedia.org/wiki/Otter' },
{ name: 'Panda', src: 'panda.webp', wikipediaLink: 'https://en.wikipedia.org/wiki/Giant_panda' },
{ name: 'Red panda', src: 'rodepanda.jpg', wikipediaLink: 'https://en.wikipedia.org/wiki/Red_panda' },
{ name: 'Meerkat', src: 'stokstaart.webp', wikipediaLink: 'https://en.wikipedia.org/wiki/Meerkat' }
];

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
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="font-bold text-xl p-10">Zoo</h1>
        <div className="px-10 flex items-center flex-col h-[60vh]">
          <img src={"public/" + animals[index].src} alt={animals[index].name} className="w-100 mb-4 max-h-full" />
        </div>
      </div>
      <div className="mx-auto">
        <span className="pb-6">You are now looking at </span>
        <a className="underline" target="_blank" href={animals[index].wikipediaLink}>{animals[index].name}</a>
      </div>
      <div className='mx-auto flex gap-4 items-center pt-4'>
        <button
          type="button"
          className="btn"
          onClick={vorige}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn"
          onClick={volgende}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
