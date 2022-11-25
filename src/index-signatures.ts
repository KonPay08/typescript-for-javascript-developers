export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: "ham", 
  underTwenty: false 
};

// How to erite index signatires
// { [ index: typeForIndex]: typeForValue }
profile.name = "Ham";
profile.age = 43;
profile.natinality = "Japan";