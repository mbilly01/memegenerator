import React,{useState,useEffect} from "react";
const Main = () => {

  const [formData,setFormData] = useState({
    topText :'',
    bottomText : '',
    image : '/img/osakaonsen.jpg',
  })

  const [allMeme,setAllMeme] = useState([]);

  const handleChange = (e) => {
    const {name,value} = e.target;
   
    setFormData(prevFormData => {
      return {
      ...prevFormData,
      [name] : value
    }
    })
    
  }

  const getMeme = () => {
    const random = Math.floor(Math.random() * allMeme.length);
    const imgRandom = allMeme[random].url;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        image : imgRandom
      }
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault();

    

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        topText: '',
        bottomText : '' 
      }
    })

    getMeme();
    
    
  }

  useEffect(() => {
    // fetch('https://api.imgflip.com/get_memes').then(res => res.json())
    // .then(data => setAllMeme(data.data.memes));

    const getData = async () => {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMeme(data.data.memes);
    }

    getData();
  },[])
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Top Text" value={formData.topText} name="topText" />
        <input type="text" onChange={handleChange} placeholder="Bottom Text" value={formData.bottomText} name="bottomText"/>
        <button>Generate Meme Image</button>
      </form>
      <section className="output">
      <strong className="top-text">{formData.topText}</strong>
      <img src={formData.image} alt="" />
      <strong className="bottom-text">{formData.bottomText}</strong>
      </section>
      
    </main>
  );
}

export default Main;