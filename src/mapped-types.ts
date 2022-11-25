export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// type Partial<T> = {
//   [P in keyof T]?: T[P] | undefined;
// }

type PropertyTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | undefined;
}
type OptionalProfile = Optional<Profile>

