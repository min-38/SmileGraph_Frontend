import axios from "axios";

// export const postDiary = (diary) => axios.post("/api/diary", diary);

export async function postDiary(diary) {
    const response = await axios.post("/api/diary", diary);
    console.log(response);
    // return response.data.response.body.items.item
}