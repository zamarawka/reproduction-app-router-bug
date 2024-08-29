import { sleep } from "../../utils";
import HomeContent from "./HomeContent";

interface HomeProps {
  searchParams: {
    tab?: 'other' | 'more'
  }
}

/** Add your relevant code here for the issue to reproduce */
export default async function Home({ searchParams: { tab } }: HomeProps) {
  await sleep(200);

  return <div><HomeContent tab={tab} /></div>;
}
