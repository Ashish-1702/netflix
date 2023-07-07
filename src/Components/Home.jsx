import {React} from "react";
import "./Home.scss"

const Card=({img})=>{ 
     return<img className="card" src={img} alt="cover"/>
}

const Row=({title})=>(

    <div className="row">

         <h2>{title}</h2>
         <div>
           <Card img={"https://th-i.thgim.com/public/incoming/nt52c4/article66177563.ece/alternates/FREE_1200/IMG_Kantara_0_x_2_1_02AFBGSL.jpg"} />
           <Card img={"https://th-i.thgim.com/public/incoming/nt52c4/article66177563.ece/alternates/FREE_1200/IMG_Kantara_0_x_2_1_02AFBGSL.jpg"} />
           <Card img={"https://th-i.thgim.com/public/incoming/nt52c4/article66177563.ece/alternates/FREE_1200/IMG_Kantara_0_x_2_1_02AFBGSL.jpg"} />
           <Card img={"https://th-i.thgim.com/public/incoming/nt52c4/article66177563.ece/alternates/FREE_1200/IMG_Kantara_0_x_2_1_02AFBGSL.jpg"} />
         </div>
    </div>
)

const Home=() =>{
    return(
        <section className="home">
            <div className="banner"></div>
            <Row title={"Popular on Netflix"}/>
        </section>
    )
}
export default Home