import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Get the user of the request
  const user = await getUser(req);

  // Check if the user is authenticated
  if (!user) {
    return res.status(401).json({
      message: "No user is signed in.",
    });
  }

  // Return the secret message to the authenticated user
  return res.status(200).json({
    message: `${user.address}`,
  });
};

export default handler;
