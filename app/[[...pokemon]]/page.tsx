import SelectionScreen from "../../src/components/SelectionScreen";

export type ParamsProps = {
  params: {
    pokemon: string | undefined
  } | undefined
}

export default async function Home({ params }: ParamsProps) {
  return (
    <SelectionScreen params={params}/>
  );
}
