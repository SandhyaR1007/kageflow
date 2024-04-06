import Image from "next/image";

export default function Library() {
    return (
   <main>{
    videos.map(data=><div key={data._id}>
        <p>{data.title}</p>
        <Image src={data.thumbnail} alt={data.title} width={300} height={200}/>

    </div>)
   }
    </main>
    );
  }

export const videos:Video[] = [{
    _id:1,
    title:"ss",
    url:"",
    type:"beginner",
    thumbnail:""
},
{
    _id:2,
    title:"ss",
    url:"",
    type:"beginner",
    thumbnail:""
},
{
    _id:3,
    title:"ee",
    url:"",
    type:"beginner",
    thumbnail:""
}]

type Video = {
    _id:number | string;
    title:string;
    url:string;
    type:'beginner' | 'intermediate' | 'advanced';
    thumbnail:string;
}