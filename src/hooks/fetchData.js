import { supabase } from "../services/supabase";

async function FetchData() {
  try {
    const { data } = await supabase.from("ads").select();
    if (data) {
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default FetchData;
