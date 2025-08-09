import { getServerSession } from "next-auth";

const getSarverSessions = async () => {
  const sessions = await getServerSession();
  return JSON.stringify(sessions);
};

export default getSarverSessions;
