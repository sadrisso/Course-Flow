import { useGetUsersQuery } from "@/redux/services/coursesApi";
import React from "react";

function UserPage() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  return <div>

  </div>;
}

export default UserPage;
