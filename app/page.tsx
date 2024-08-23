import { supabase } from "@/supabase";


export default function Home() {
  const setNewView = async () =>{
    const { data, error } = await supabase
    .from('view')
    .insert([{ name: 'John'}]);
    console.log(data, error);
  }

  setNewView();

  return (
    <div>Hello</div>
  );
}
