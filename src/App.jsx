import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
export function App() {
  return (
    <>
      <Header />
      <Post
        author="Rafael Machado"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium alias laborum odio dicta illum ipsam provident similique! Dolorum modi, impedit, repellendus maiores veritatis expedita quisquam totam amet explicabo dolorem enim?"
      />
      <Post
        author="Ana Júlia Miranda"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium alias laborum odio dicta illum ipsam provident similique! Dolorum modi, impedit, repellendus maiores veritatis expedita quisquam totam amet explicabo dolorem enim?"
      />
    </>
  );
}
