import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { SideBar } from "./components/SideBar";
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Rafael Machado"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium alias laborum odio dicta illum ipsam provident similique! Dolorum modi, impedit, repellendus maiores veritatis expedita quisquam totam amet explicabo dolorem enim?"
          />
          <Post
            author="Ana Júlia "
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium alias laborum odio dicta illum ipsam provident similique! Dolorum modi, impedit, repellendus maiores veritatis expedita quisquam totam amet explicabo dolorem enim?"
          />
        </main>
      </div>
    </>
  );
}
