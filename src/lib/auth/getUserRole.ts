import { auth } from "@clerk/nextjs/server";


export async function getUser(): Promise<{ role: string | undefined; currentUserId: string | null }> {
  const {  userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  const currentUserId = userId;
  return {role, currentUserId};
}
