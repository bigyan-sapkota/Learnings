import { Person, Country } from "./Person";

export const App = () => {
  const getAge = (name: string): number => {
    return 99;
  };

  return (
    <div>
      <div>
        <Person
          name="Bigyan"
          email="bigyansapkota@gmail.com"
          age={21}
          isMarried={false}
          friends={["Bigyan", "Sapkota", "has", "no", "friend"]}
          country={Country.Brazil}
        />
      </div>
    </div>
  );
};

export default App;
