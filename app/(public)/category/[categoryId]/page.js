

import { request } from "@/server/request";
import Image from "next/image";

async function generateMetadata({ params }) {
  console.log(params);
  let { data } = await request.get(`category/${params.categoryId}`);
  return {
    title: data.name,
  };
}

function getCategory(id) {
  try {
    return request.get(`product?category=${id}`);
  } catch (err) {
    console.log(err);
  }
}

export default async function CategoryPage({ params }) {
  let { data } = await getCategory(params.categoryId);
  let { products } = data;
  return (
    <main className="container">
      {/* {JSON.stringify(products)} */}
      <div className="products">
      {products?.map((pr, i) => (
        <div className="product" key={i}>
          <div className="image">
            <Image src={pr?.image?.url} alt={pr.title} height={200} width={200} style={{borderRadius: "4px", width: "100%", marginLeft: "-10px"}} />
          </div>
          <div className="contents" style={{display: "flex",flexDirection: "column"}}>
          <h1>{pr?.title}</h1>
          <h3><b>Sold: </b>{pr?.sold}</h3>
          <h4>{pr?.description}</h4>
          <p><b>price:</b> {pr?.price} uzs</p> 
          </div>
        </div>
      ))}
    </div>
    </main>
  );
}
