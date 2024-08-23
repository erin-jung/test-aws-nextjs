'use client'
import { useEffect, useState } from 'react';
import { supabase } from "@/supabase";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const setNewView = async () => {
    const { data, error } = await supabase
      .from('view')
      .select('*')

    if (error) {
      console.error(error);
      return;
    }

    setData(data);
  }

  useEffect(() => {
    setNewView();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {data ? (
        <div>
          {data.map((item: any, index: number) => (
            <div key={index}>
              <p>{item.name}</p>
              {/* Render other properties as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}