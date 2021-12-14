// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req: any, res: any) {
  console.log(req);
  res.status(200).json({ name: "John Doe" });
}
