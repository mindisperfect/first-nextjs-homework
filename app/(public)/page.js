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
async function getLastNews() {
  try {
    return request("last-products");
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const { data: categories } = await getData();
  // const { data: category } = await getLastNews();
  return (
    <main className="container">
      {/* <Image
        src="https://kursi24.uz/upload/iblock/3fe/3fed21cae9c2e2a1cfd173f40697379d.jpg"
        alt="Najot ta'lim"
        width={300}
        height={500}
      /> */}
      <Card />
      <hr style={{backgroundColor: "purple"}} className="hr" />
        <h1 style={{fontSize: "30px", textAlign: "center", color: "white", marginBottom: "20px"}}>All products</h1>
      <div className="cards">
        {categories?.map(({ _id, name, images }) => (
          <div key={_id} className="card">
            <Image
              src={images?.url}
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
  );
}
