import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      I am Home Page
      <pre>Username: {username}</pre>
    </div>
  );
};

export default Home;
