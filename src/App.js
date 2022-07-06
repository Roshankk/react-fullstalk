import WSPGallery from './components/WSPGallery';
import './App.css';

function App() {
  const galleryImages = [
    {
      img: 'https://cdn.pixabay.com/photo/2017/02/28/21/30/wolf-2106894_960_720.jpg' ,
      title:'fox'
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/10/21/14/46/fox-1758183_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/10/21/21/13/horses-1759214_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/09/06/11/40/zebras-927272_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/05/02/13/17/deer-1367217_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/03/12/04/00/mammal-3218712_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/10/06/22/18/horse-60153_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/22/19/26/fox-1850186_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/12/17/00/28/red-squirrel-570936_960_720.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/12/05/11/39/zebras-1883654_960_720.jpg"
    }
  ]
  return (
    <div className="App">
      <br />
      <div>
        <strong>Image Gallery</strong>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />

    </div>
  );
}

export default App;
