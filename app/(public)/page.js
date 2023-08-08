import Image from "next/image";
import Link from "next/link";
import { request } from "@/server/request";
import Card from "@/components/news/Card";

async function getData() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const { data: categories } = await getData();
  return (
    <div className="home-page">
    <main className="container">
      <Card />
      <hr style={{backgroundColor: "purple"}} className="hr" />
        <h1 style={{fontSize: "30px", textAlign: "center", color: "white", marginBottom: "20px"}}>All products</h1>
      <div className="cards">
        {categories?.map(({ _id, name, image }) => (
          <div key={_id} className="card">
            <Image
              src={image?.url}
              alt={name}
              width={150}
              height={100}
              className="img-src"
              style={{borderRadius: "8px"}}
            />
            <Link href={`category/${_id}`} className="link">{name}</Link>
          </div>
        ))}
      </div>
    </main>
    </div>
  );
}
