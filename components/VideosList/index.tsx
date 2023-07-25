import { Videos } from "./Videos";
import data from "../../data/index.json";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
};

export async function VideosList() {
  const res = await getData();
  // console.log(JSON.stringify(data, null, 2));

  return (
    <section className="container">
      <Videos data={res} />
    </section>
  );
}
