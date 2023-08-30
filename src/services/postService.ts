type Post = {
  attributes: any;
};

const strapiURL = process.env.STRAPI_URL;

export async function getPosts(): Promise<any> {
  const response = await fetch(`${strapiURL}`);
  const posts = await response.json();
  return posts.data.map(({ attributes }: Post) => attributes);
}
