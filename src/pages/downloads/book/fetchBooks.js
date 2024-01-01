import axios from "axios";

export async function fetchDownloads() {
  try {
    const response = await axios.get(
      "https://cdn.contentful.com/spaces/31lakm8hkl1j/entries?access_token=aVy7YP6HzJqCxh5cxccTLT-IYJzwGjwn4gHleM2M91A&content_type=downloads&fields.type=Book"
    );

    if (response.status === 200) {
      const items = response.data.items.map((item) => {
        const fields = item.fields;
        return {
          title: fields.title,
          type: fields.type,
          fileLink: fields.fileLink,
        };
      });

      return items;
    } else {
      throw new Error("Failed to fetch downloads.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}