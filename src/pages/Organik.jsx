import { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Banner from "../components/Banner"
import Card2 from '../components/Card2';
import DaurUlang from '../components/DaurUlang';

function Organik(){

  // Data
  const[banner, setBanner] = useState({
    gambar: "https://i.ibb.co.com/LJjsP1k/organik3-removebg-preview.png", 
    judul: "Sampah Organik", 
    deskripsi: "Sampah organik didefinisikan sebagai sampah yang berasal dari sisa-sisa makhluk hidup, baik hewan, tanaman, maupun manusia. Karena karakteristiknya yang organik, sampah ini sebenarnya bisa terurai sendiri di alam dengan proses alamiah.",
  }) 

  const[organik, setOrganik] = useState([
    {id:1, name:"Buah Busuk", img: "https://i.ibb.co.com/1JrGGrLS/download.jpg"},
    {id:2, name:"Biji", img: "https://i.ibb.co.com/93mHRdbH/1b960yuurd7kb6c.jpg"},
    {id:3, name:"Daun Kering", img: "https://i.ibb.co.com/v4djxyxY/download-1.jpg"},
    {id:4, name:"Kotoran Hewan", img: "https://i.ibb.co.com/PvypG7KC/pngtree-cow-dung-in-fields-fertilizer-shit-unhygienic-photo-image-30271534.jpg"},
    {id:5, name:"Kulit Telur", img: "https://i.ibb.co.com/8gdrz9sb/cangkang1.jpg"},
    {id:6, name:"Ranting Kering", img: "https://i.ibb.co.com/7mC0GwF/twigs-branches-branch-tree-tree-branches-dry-branches-thumbnail.jpg"},
    {id:7, name:"Sayur Busuk", img: "https://i.ibb.co.com/cczpTMXb/sayur.webp"},
    {id:8, name:"Serabut Kelapa", img: "https://i.ibb.co.com/C57h1W1q/pb3pkkn-U-Kelapa.jpg"},
    {id:9, name:"Tulang Hewan", img: "https://i.ibb.co.com/Nd6HHthL/pngtree-fish-bone-animal-spine-dead-photo-png-image-13545879.png"}
  ])

  const[daurulg, setDaurulg] = useState([
    {eventKey: 0, header: "Daur Ulang Sampah Cangkang Telur", judul: "Membuat Kerajinan dari Cangkang Telur", imgex: "https://i.ibb.co.com/k6yHXrhf/png-transparent-paper-watercolor-painting-chicken-egg-eggs-watercolor-painting-food-broken-egg.png", 
      desc: "Cara membuatnya juga sangatlah mudah, yang pertama pilihlah terlebih dahulu kulit telur yang masih bagus. Selanjutnya, bersihkan kulit telur dari kotoran, kemudian keringkan. Berilah warna sesuai dengan karakter yang kalian inginkan, jangan lupakan bentuk mata dan juga hidung agar tampak lebih cantik, dan boneka dari kulit telur sudah siap untuk dijadikan hiasan."},
    {eventKey: 1, header: "Daur Ulang Sampah Organik", judul: "Membuat Kompos Dari Sampah Organik", imgex: "https://i.ibb.co.com/dwJgwLvJ/cara-membuat-kompos-di-pekarangan-rumah-panduan-langkah-demi-langkah.webp",
      desc: "Sampah organik yang anda sisihkan tadi kemudian potong kecil-kecil. Kemudian campur bahan tersebut dengan sepertiga serbuk gergaji atau pupuk kandang. Jika anda menggunakan pupuk kandang seperti kotoran kambing maka buat komposisi 3 : 1. Jangan lupa untuk menambahkan ragi kompos atau Tricholant lalu tutup dengan karung atau plastic. Diamkan sampah hingga 7 hari lamanya sampai membusuk. Setiap hari luangkan waktu Anda untuk mengaduk sampah ini dan atur suhu kompos berkisar 30 – 70 derajat celcius. Jika anda kesulitan dalam mengaduknya taka da salahnya jika ditambahkan air. Kompos yang sudah jadi akan berwarna kecokelatan seperti tanah dan tidak berbau busuk lagi."}
  ])

  return(
    <>
      <Helmet><title>Organik | TRACLE</title></Helmet>

      {/* Banner */}
      <Banner
        gbr={banner.gambar}
        kategori={banner.judul}
        desc={banner.deskripsi}
      />

      {/* Contoh Sampah */}
      <Container fluid>
        <Container className='p-4'>
          <h2 className="text-center my-5">CONTOH</h2>
          <div className='row my-4'>
          {organik.map((item, id) => (
            <Card2
              key={id}
              img={item.img}
              name={item.name}
            />
            ))}
          </div>
        </Container>
      </Container>

      {/* Daur Ulang */}
      <Container fluid className='bg-light'>
        <Container>
          <h2 className="text-center py-5">DAUR ULANG</h2>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {daurulg.map((item, index) => (
              <DaurUlang
                key={index}
                eventKey={item.eventKey} 
                header={item.header}
                judul={item.judul}
                desc={item.desc}
                imgex={item.imgex}
              />
            ))}
          </Accordion>
          <div className='p-4'></div>
        </Container>
      </Container>

    </>
  )
}

export default Organik